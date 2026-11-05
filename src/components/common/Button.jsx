import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-electric text-white shadow-glow hover:bg-electric-600 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-eco text-white shadow-[0_18px_45px_-18px_rgba(0,200,83,0.6)] hover:bg-eco-600 hover:-translate-y-0.5 active:translate-y-0",
  dark: "bg-navy text-white hover:bg-navy-700 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-navy-200 bg-white/80 text-navy hover:border-electric hover:text-electric hover:-translate-y-0.5",
  light: "bg-white text-navy hover:bg-mist hover:-translate-y-0.5",
  ghost: "text-navy hover:bg-navy-50",
  link: "text-electric hover:text-electric-600 px-0",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Button that renders a <button>, a react-router <Link> or an <a>.
 * Pass `to` for internal navigation or `href` for external links.
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  icon: Icon,
  iconRight: IconRight,
  iconClassName,
  fullWidth = false,
  className,
  type = "button",
  ...props
}) => {
  const classes = cn(
    base,
    variants[variant],
    variant === "link" ? "" : sizes[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className={cn("h-4 w-4 shrink-0", iconClassName)} /> : null}
      <span>{children}</span>
      {IconRight ? (
        <IconRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
