import { z } from 'zod';

// Email validation
export const emailSchema = z
  .string()
  .trim()
  .min(1, { message: 'Email é obrigatório' })
  .email({ message: 'Email inválido' })
  .max(255, { message: 'Email muito longo' });

// Password validation
export const passwordSchema = z
  .string()
  .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
  .max(128, { message: 'Senha muito longa' });

// Login form validation
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

// Site config validation
export const siteConfigSchema = z.object({
  whatsapp_number: z
    .string()
    .regex(/^[0-9]{10,15}$/, { message: 'Número deve ter apenas dígitos (10-15)' }),
  whatsapp_message: z
    .string()
    .max(500, { message: 'Mensagem muito longa' }),
  site_name: z
    .string()
    .min(1, { message: 'Nome do site é obrigatório' })
    .max(100, { message: 'Nome muito longo' }),
  banner_text: z
    .string()
    .max(200, { message: 'Texto do banner muito longo' }),
  primary_color: z
    .string()
    .regex(/^\d{1,3}\s+\d{1,3}%\s+\d{1,3}%$/, { message: 'Formato HSL inválido (ex: 221 83% 53%)' })
    .optional(),
  gold_color: z
    .string()
    .regex(/^\d{1,3}\s+\d{1,3}%\s+\d{1,3}%$/, { message: 'Formato HSL inválido (ex: 45 93% 47%)' })
    .optional(),
});

// Sanitize text input to prevent XSS
export const sanitizeText = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Validate and sanitize URL
export const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

export type LoginFormData = z.infer<typeof loginSchema>;
export type SiteConfigData = z.infer<typeof siteConfigSchema>;
