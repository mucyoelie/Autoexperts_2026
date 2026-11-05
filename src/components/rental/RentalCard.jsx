import { ArrowRight, Briefcase, Gauge, Users } from "lucide-react";
import { formatRWF, formatRange } from "../../utils/format";
import Badge from "../common/Badge";

const RentalCard = ({ rental, onInquire, index = 0 }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
    <div className="relative aspect-[16/10] overflow-hidden bg-mist">
      <img
        src={rental.image}
        alt={`${rental.name} available for rent`}
        loading={index < 3 ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
        <Badge variant={rental.type === "electric" ? "electric" : "eco"} className="bg-white/95 ring-0">
          {rental.type === "electric" ? "Electric" : "Hybrid"}
        </Badge>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold backdrop-blur ${
            rental.available ? "bg-eco/90 text-white" : "bg-amber-500/90 text-white"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${rental.available ? "bg-white" : "bg-white/70"}`} aria-hidden="true" />
          {rental.available ? "Available" : "Booked"}
        </span>
      </div>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base font-semibold text-navy">{rental.name}</h3>
          <p className="mt-0.5 text-xs text-navy-400">
            {rental.year} · {rental.transmission}
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-base font-bold text-navy">{formatRWF(rental.dailyPrice)}</p>
          <p className="text-[0.65rem] text-navy-400">per day</p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink/70">{rental.description}</p>

      <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-navy-50 py-3 text-xs">
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5 text-navy-300" aria-hidden="true" />
          <span className="sr-only">Seats</span>
          <dd className="font-medium text-navy-600">{rental.seats}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <Gauge className="h-3.5 w-3.5 text-navy-300" aria-hidden="true" />
          <span className="sr-only">Range</span>
          <dd className="font-medium text-navy-600">
            {rental.range ? formatRange(rental.range) : "Hybrid"}
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5 text-navy-300" aria-hidden="true" />
          <span className="sr-only">Luggage</span>
          <dd className="font-medium text-navy-600">{rental.luggage.split(" ")[0]} bags</dd>
        </div>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {rental.features.slice(0, 3).map((feature) => (
          <li key={feature} className="rounded-full bg-mist px-2.5 py-1 text-[0.68rem] font-medium text-navy-600">
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <p className="text-xs text-navy-400">
          Weekly <span className="font-semibold text-navy">{formatRWF(rental.weeklyPrice)}</span>
        </p>
        <button
          type="button"
          onClick={() => onInquire?.(rental)}
          className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-electric"
        >
          {rental.available ? "Check availability" : "Join waiting list"}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </article>
);

export default RentalCard;
