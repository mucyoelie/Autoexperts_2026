import { cn } from "../../utils/cn";

const variants = {
  electric: "bg-electric-50 text-electric-700 ring-electric-100",
  eco: "bg-eco-50 text-eco-700 ring-eco-100",
  navy: "bg-navy-50 text-navy-700 ring-navy-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
  rose: "bg-rose-50 text-rose-700 ring-rose-100",
  solid: "bg-white/10 text-white ring-white/20 backdrop-blur",
};

const Badge = ({ children, variant = "navy", className }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
      variants[variant],
      className,
    )}
  >
    {children}
  </span>
);

export default Badge;
