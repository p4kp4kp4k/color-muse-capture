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
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp, user, isAdmin, roleChecked, loading } = useAuth();
  const { checkRateLimit, recordAttempt, resetAttempts } = useRateLimit({ maxAttempts: 5, windowMs: 60000 });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && roleChecked && user && isAdmin) {
      resetAttempts();
      navigate('/admin');
    }
  }, [user, isAdmin, roleChecked, loading, navigate, resetAttempts]);

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
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          let errorMessage = error.message;
          if (error.message.includes('already registered')) {
            errorMessage = 'Este email já está cadastrado';
          }
          toast({
            title: "Erro ao cadastrar",
            description: errorMessage,
            variant: "destructive",
          });
          return;
        }
        toast({
          title: "Cadastro realizado!",
          description: "Agora faça login para acessar o painel.",
        });
        setIsSignUp(false);
      } else {
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
      }
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
            {isSignUp ? 'Criar Conta Admin' : 'Painel Administrativo'}
          </CardTitle>
          <CardDescription>
            {isSignUp 
              ? 'Crie sua conta de administrador' 
              : 'Entre com suas credenciais de administrador'}
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                />
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-3 flex items-start gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                Área restrita. Apenas administradores autorizados podem acessar.
              </span>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading 
                ? (isSignUp ? 'Criando conta...' : 'Entrando...') 
                : (isSignUp ? 'Criar Conta' : 'Entrar')}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-primary hover:underline"
            >
              {isSignUp 
                ? 'Já tem conta? Faça login' 
                : 'Primeiro acesso? Criar conta'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;