import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { cn } from "../../utils/cn";

const Logo = ({ light = false, className }) => (
  <Link
    to="/"
    aria-label="AutoExperts Rwanda — home"
    className={cn("group inline-flex items-center gap-3", className)}
  >
    <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-eco shadow-[0_10px_24px_-12px_rgba(11,31,51,0.8)] transition-transform duration-300 group-hover:-translate-y-0.5">
      <Zap className="h-5 w-5" aria-hidden="true" />
      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-eco ring-2 ring-white" aria-hidden="true" />
    </span>
    <span className="flex flex-col leading-none">
      <span className={cn("font-display text-lg font-bold tracking-tight", light ? "text-white" : "text-navy")}>
        AutoExperts
      </span>
      <span
        className={cn(
          "mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.32em]",
          light ? "text-navy-200" : "text-navy-400",
        )}
      >
        Rwanda
      </span>
    </span>
  </Link>
);

export default Logo;
