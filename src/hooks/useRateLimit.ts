import { useState, useCallback, useRef } from 'react';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

export const useRateLimit = (config: RateLimitConfig = { maxAttempts: 5, windowMs: 60000 }) => {
  const attemptsRef = useRef<number[]>([]);

  const checkRateLimit = useCallback(() => {
    const now = Date.now();
    // Remove old attempts outside the window
    attemptsRef.current = attemptsRef.current.filter(
      (timestamp) => now - timestamp < config.windowMs
    );

    if (attemptsRef.current.length >= config.maxAttempts) {
      const oldestAttempt = attemptsRef.current[0];
      const waitTime = Math.ceil((config.windowMs - (now - oldestAttempt)) / 1000);
      return {
        allowed: false,
        waitTime,
        message: `Muitas tentativas. Aguarde ${waitTime} segundos.`
      };
    }

    return { allowed: true, waitTime: 0, message: '' };
  }, [config.maxAttempts, config.windowMs]);

  const recordAttempt = useCallback(() => {
    attemptsRef.current.push(Date.now());
  }, []);

  const resetAttempts = useCallback(() => {
    attemptsRef.current = [];
  }, []);

  return { checkRateLimit, recordAttempt, resetAttempts };
};
