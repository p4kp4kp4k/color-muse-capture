import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  GraduationCap, LogOut, Save, Phone, Type, Palette, 
  MessageSquare, Settings, RefreshCw
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
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading) {
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
  }, [user, isAdmin, authLoading, navigate, toast]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchConfigs();
    }
  }, [user, isAdmin]);

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

      fetchConfigs();
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
      default:
        return <Settings className="w-4 h-4" />;
    }
  };

  if (authLoading || loading) {
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
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="contact">Contato</TabsTrigger>
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="theme">Tema</TabsTrigger>
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
