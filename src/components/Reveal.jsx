import { useScrollReveal } from "../hooks/useScrollReveal";

export const Reveal = ({ children, delay = 0, className = "", threshold = 0.15 }) => {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${isVisible ? "reveal-visible" : ""} ${
        delay ? `reveal-delay-${delay}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};