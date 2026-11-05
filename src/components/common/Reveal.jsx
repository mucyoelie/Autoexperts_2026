import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

/** Fades and lifts its children into view once they are on screen. */
const Reveal = ({ children, delay = 0, className, as: Tag = "div" }) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out will-change-transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
