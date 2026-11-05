import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Icon from "./Icon";
import { cn } from "../../utils/cn";

const ServiceCard = ({ service, index = 0 }) => {
  const isEco = service.accent === "eco";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading={index < 3 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" aria-hidden="true" />
        <span
          className={cn(
            "absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg backdrop-blur",
            isEco ? "bg-eco/90" : "bg-electric/90",
          )}
        >
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="absolute inset-x-5 bottom-4 font-display text-lg font-semibold text-white">{service.shortTitle}</h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-ink/70">{service.summary}</p>

        <ul className="mt-5 space-y-2.5">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-navy-600">
              <Check
                className={cn("mt-0.5 h-4 w-4 shrink-0", isEco ? "text-eco" : "text-electric")}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 border-t border-navy-50 pt-5 text-sm font-semibold text-navy transition-colors hover:text-electric"
        >
          Explore this service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
