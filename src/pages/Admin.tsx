import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useSiteConfigContext } from '@/contexts/SiteConfigContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  GraduationCap, LogOut, Save, Phone, Type, Palette, 
  MessageSquare, Settings, RefreshCw, BarChart3
} from 'lucide-react';

interface ConfigItem {
  id: string;
  key: string;
  value: string;
  description: string | null;
  category: string;
}

const Admin = () => {
  const [configs, setConfigs] = useState<ConfigItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editedValues, setEditedValues] = useState<Record<string, string>>({});
  const { user, isAdmin, roleChecked, loading: authLoading, signOut } = useAuth();
  const { refetch: refetchGlobalConfig } = useSiteConfigContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && roleChecked) {
      if (!user) {
        navigate('/admin-login');
        return;
      }
      if (!isAdmin) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar esta página",
          variant: "destructive",
        });
        navigate('/');
        return;
      }
    }
  }, [user, isAdmin, roleChecked, authLoading, navigate, toast]);

  useEffect(() => {
    if (user && roleChecked && isAdmin) {
      fetchConfigs();
    }
  }, [user, roleChecked, isAdmin]);

  const fetchConfigs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_config')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;

      setConfigs(data || []);
      const values: Record<string, string> = {};
      data?.forEach((item) => {
        values[item.key] = item.value;
      });
      setEditedValues(values);
    } catch (err) {
      console.error('Error fetching configs:', err);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as configurações",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      for (const config of configs) {
        if (editedValues[config.key] !== config.value) {
          const { error } = await supabase
            .from('site_config')
            .update({ value: editedValues[config.key] })
            .eq('key', config.key);

          if (error) throw error;
        }
      }

      toast({
        title: "Sucesso!",
        description: "Configurações salvas com sucesso",
      });

      await fetchConfigs();
      await refetchGlobalConfig();
    } catch (err) {
      console.error('Error saving configs:', err);
      toast({
        title: "Erro",
        description: "Não foi possível salvar as configurações",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const getConfigsByCategory = (category: string) => {
    return configs.filter(c => c.category === category);
  };

  const renderConfigInput = (config: ConfigItem) => {
    const value = editedValues[config.key] || '';
    
    return (
      <div key={config.key} className="space-y-2">
        <Label htmlFor={config.key} className="flex items-center gap-2">
          {getIconForKey(config.key)}
          {config.description || config.key}
        </Label>
        <Input
          id={config.key}
          value={value}
          onChange={(e) => setEditedValues(prev => ({
            ...prev,
            [config.key]: e.target.value
          }))}
          placeholder={config.description || ''}
        />
      </div>
    );
  };

  const getIconForKey = (key: string) => {
    switch (key) {
      case 'whatsapp_number':
        return <Phone className="w-4 h-4" />;
      case 'whatsapp_message':
        return <MessageSquare className="w-4 h-4" />;
      case 'site_name':
      case 'banner_text':
        return <Type className="w-4 h-4" />;
      case 'primary_color':
      case 'gold_color':
        return <Palette className="w-4 h-4" />;
      case 'ga_measurement_id':
      case 'google_ads_id':
      case 'google_ads_label':
      case 'gtm_id':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <Settings className="w-4 h-4" />;
    }
  };

  // Filter out meta_pixel_id from analytics configs
  const getFilteredConfigsByCategory = (category: string) => {
    return configs.filter(c => 
      c.category === category && 
      !['meta_pixel_id'].includes(c.key)
    );
  };

  if (authLoading || loading || !roleChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold font-heading text-lg">Painel Administrativo</h1>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchConfigs}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Atualizar
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="contact" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-lg">
            <TabsTrigger value="contact">Contato</TabsTrigger>
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="theme">Tema</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Configurações de Contato
                </CardTitle>
                <CardDescription>
                  Configure os números de WhatsApp e mensagens padrão
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getConfigsByCategory('contact').map(renderConfigInput)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configurações Gerais
                </CardTitle>
                <CardDescription>
                  Configure o nome do site e textos principais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getConfigsByCategory('general').map(renderConfigInput)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="theme">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Configurações de Tema
                </CardTitle>
                <CardDescription>
                  Configure as cores do site (formato HSL, ex: 221 83% 53%)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getConfigsByCategory('theme').map(renderConfigInput)}
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> As cores devem estar no formato HSL sem os parênteses.
                    Exemplo: "221 83% 53%" para azul escuro.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Configurações de Analytics
                </CardTitle>
                <CardDescription>
                  Configure os IDs do Google Ads para rastrear conversões
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getFilteredConfigsByCategory('analytics').map(renderConfigInput)}
                <div className="p-4 bg-muted rounded-lg space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Google Analytics:</strong> Encontre seu ID em Google Analytics → Admin → Data Streams → Seu site. Formato: G-XXXXXXXXXX
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Google Ads ID:</strong> Encontre o ID de conversão no Google Ads → Ferramentas → Conversões. Formato: AW-XXXXXXXXX
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Google Ads Label:</strong> O rótulo da conversão específica. Encontre junto com o ID de conversão.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Google Tag Manager:</strong> Encontre seu ID no GTM → Admin → Container. Formato: GTM-XXXXXXXX
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <Button onClick={handleSave} disabled={saving} size="lg">
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Admin;
