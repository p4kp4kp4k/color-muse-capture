import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useRateLimit } from '@/hooks/useRateLimit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, Lock, Mail, AlertTriangle } from 'lucide-react';
import { loginSchema } from '@/lib/validation';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signOut, user, isAdmin, roleChecked, loading } = useAuth();
  const { checkRateLimit, recordAttempt, resetAttempts } = useRateLimit({ maxAttempts: 5, windowMs: 60000 });
  const navigate = useNavigate();
  const { toast } = useToast();

  const isUnauthorizedUser = !loading && roleChecked && !!user && !isAdmin;

  useEffect(() => {
    if (!loading && roleChecked && user && isAdmin) {
      resetAttempts();
      navigate('/admin');
    }
  }, [user, isAdmin, roleChecked, loading, navigate, resetAttempts]);

  useEffect(() => {
    if (isUnauthorizedUser) {
      toast({
        title: "Acesso negado",
        description: "Esta conta não tem permissão de administrador. Saia e entre com um email autorizado.",
        variant: "destructive",
      });
    }
  }, [isUnauthorizedUser, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limit
    const rateLimitResult = checkRateLimit();
    if (!rateLimitResult.allowed) {
      toast({
        title: "Muitas tentativas",
        description: rateLimitResult.message,
        variant: "destructive",
      });
      return;
    }

    // Validate input
    const validation = loginSchema.safeParse({ email, password });
    if (!validation.success) {
      toast({
        title: "Erro de validação",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      recordAttempt();
      return;
    }

    setIsLoading(true);
    recordAttempt();

    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast({
          title: "Erro ao entrar",
          description: error.message === 'Invalid login credentials' 
            ? 'Email ou senha incorretos' 
            : error.message,
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Login realizado!",
        description: "Verificando permissões...",
      });
    } catch (err) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-heading">
            Painel Administrativo
          </CardTitle>
          <CardDescription>
            Entre com suas credenciais de administrador
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isUnauthorizedUser ? (
            <div className="space-y-4">
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
                <p className="font-medium text-foreground">Conta sem permissão de administrador</p>
                <p className="mt-1 text-muted-foreground">
                  Você está logado, mas este email não tem acesso ao painel. Saia e entre com um email de admin.
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={async () => {
                  await signOut();
                  setEmail('');
                  setPassword('');
                }}
              >
                Sair e trocar conta
              </Button>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                      minLength={6}
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Área restrita. Apenas administradores autorizados podem acessar.</span>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;