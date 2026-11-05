import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

const PageHero = ({ eyebrow, title, description, image, breadcrumbs = [], children, align = "left" }) => (
  <section className="relative isolate overflow-hidden bg-navy-950">
    {image ? (
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
    ) : null}
    <div
      className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40"
      aria-hidden="true"
    />
    <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

    <div className="container relative py-16 sm:py-20 lg:py-24">
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        {breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-navy-300">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                    {crumb.to && !isLast ? (
                      <Link to={crumb.to} className="transition hover:text-eco">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-white" : undefined} aria-current={isLast ? "page" : undefined}>
                        {crumb.label}
                      </span>
                    )}
                    {!isLast ? <ChevronRight className="h-3 w-3 text-navy-500" aria-hidden="true" /> : null}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? <span className="eyebrow text-eco-300">{eyebrow}</span> : null}

        <h1 className="mt-4 text-balance font-display text-4xl leading-[1.1] text-white sm:text-5xl">{title}</h1>

        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">{description}</p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  </section>
);

export default PageHero;
