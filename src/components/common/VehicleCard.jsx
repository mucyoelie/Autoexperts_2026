import { Link } from "react-router-dom";
import { ArrowRight, BatteryCharging, Calendar, Gauge, Star } from "lucide-react";
import { formatMileage, formatRWF, formatRange } from "../../utils/format";
import Badge from "./Badge";

const VehicleCard = ({ vehicle, index = 0 }) => {
  const isElectric = vehicle.type === "electric";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={vehicle.image}
          alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model}`}
          loading={index < 4 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />

        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <Badge variant={isElectric ? "electric" : "eco"} className="bg-white/95 shadow-sm ring-0 backdrop-blur">
            {isElectric ? "Electric" : "Hybrid"}
          </Badge>
          {vehicle.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-navy/85 px-2.5 py-1 text-[0.68rem] font-semibold text-white backdrop-blur">
              <Star className="h-3 w-3 fill-eco text-eco" aria-hidden="true" />
              Featured
            </span>
          ) : null}
        </div>

        {vehicle.badge ? (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-semibold text-navy shadow-sm">
            {vehicle.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-400">{vehicle.brand}</p>
            <h3 className="mt-1 font-display text-base font-semibold leading-snug text-navy">{vehicle.model}</h3>
          </div>
          <span className="shrink-0 rounded-lg bg-mist px-2.5 py-1 text-xs font-semibold text-navy-600">
            {vehicle.year}
          </span>
        </div>

        <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-navy-50 py-3 text-xs">
          <div className="flex flex-col gap-1">
            <dt className="flex items-center gap-1 text-navy-400">
              <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">Mileage</span>
            </dt>
            <dd className="font-semibold text-navy-700">{formatMileage(vehicle.mileage)}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="flex items-center gap-1 text-navy-400">
              <BatteryCharging className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">Battery capacity</span>
            </dt>
            <dd className="font-semibold text-navy-700">{vehicle.battery} kWh</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="flex items-center gap-1 text-navy-400">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">Range or fuel economy</span>
            </dt>
            <dd className="font-semibold text-navy-700">
              {vehicle.range ? formatRange(vehicle.range) : `${vehicle.fuelEconomy} L/100km`}
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-wide text-navy-400">Price</p>
            <p className="font-display text-base font-bold text-navy">{formatRWF(vehicle.price)}</p>
          </div>
          <Link
            to={`/vehicles/${vehicle.slug}`}
            aria-label={`View details for ${vehicle.brand} ${vehicle.model}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3.5 py-2 text-xs font-semibold text-navy transition-colors group-hover:bg-electric group-hover:text-white"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
