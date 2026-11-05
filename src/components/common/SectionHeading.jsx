import { cn } from "../../utils/cn";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  as: Tag = "h2",
}) => {
  const alignment =
    align === "left" ? "text-left items-start" : align === "right" ? "text-right items-end" : "text-center items-center";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", align === "center" && "mx-auto", alignment, className)}>
      {eyebrow ? (
        <span className={cn("eyebrow", light && "text-eco-300")}>
          <span className={cn("h-px w-6 bg-current", light && "bg-eco-300")} aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}

      <Tag
        className={cn(
          "text-balance text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Tag>

      {description ? (
        <p className={cn("max-w-2xl text-base leading-relaxed sm:text-lg", light ? "text-navy-100" : "text-ink/70")}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
