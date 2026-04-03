import { useState, useEffect } from "react";

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  pauseDuration?: number;
}

export const useTypingEffect = ({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  pauseDuration = 2000,
}: UseTypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    const startTyping = () => {
      setIsTyping(true);
      setIsComplete(false);
      setDisplayedText("");
      charIndex = 0;

      const typeChar = () => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeChar, speed);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          if (loop) {
            timeout = setTimeout(() => {
              startTyping();
            }, pauseDuration);
          }
        }
      };

      typeChar();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, loop, pauseDuration]);

  return { displayedText, isTyping, isComplete };
};
