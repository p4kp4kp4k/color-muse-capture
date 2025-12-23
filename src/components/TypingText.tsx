import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

const TypingText = ({
  text,
  speed = 40,
  delay = 500,
  className = "",
  cursorClassName = "",
  showCursor = true,
}: TypingTextProps) => {
  const { displayedText, isTyping, isComplete } = useTypingEffect({
    text,
    speed,
    delay,
  });

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span
          className={`inline-block w-[3px] h-[1em] bg-gold ml-1 align-middle ${
            isTyping ? "animate-pulse" : isComplete ? "opacity-0" : ""
          } ${cursorClassName}`}
        />
      )}
    </span>
  );
};

export default TypingText;
