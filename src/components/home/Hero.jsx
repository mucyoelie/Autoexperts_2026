import { ArrowRight, BatteryCharging, CalendarCheck, ShieldCheck, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../assets";
import { site } from "../../data/site";
import { stats } from "../../data/company";
import { formatRWF } from "../../utils/format";
import Button from "../common/Button";

const heroVehicle = {
  name: "Hyundai Ioniq 5 AWD",
  slug: "hyundai-ioniq-5-awd-2022",
  price: 46900000,
  battery: 72.6,
  range: 481,
};

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-navy-950">
    <img
      src={images.chargingForecourt}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900/50" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" aria-hidden="true" />
    <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
    <div
      className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric/20 blur-[120px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-eco/15 blur-[110px]"
      aria-hidden="true"
    />

    <div className="container relative pb-12 pt-14 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-eco opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-eco" />
            </span>
            Kigali&apos;s EV &amp; hybrid specialists
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[3.9rem]">
            Rwanda&apos;s electric future,
            <span className="text-gradient"> expertly serviced.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {site.name} is the workshop, marketplace and training centre built exclusively for electric and hybrid
            vehicles — high-voltage certified diagnostics, honest advice and a fleet you can rent or buy today.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/vehicles" size="lg" iconRight={ArrowRight}>
              Explore vehicles
            </Button>
            <Button to="/contact" size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:border-eco hover:text-eco">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book a service
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-navy-200 sm:text-sm">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-eco" aria-hidden="true" />
              Certified high-voltage team
            </li>
            <li className="flex items-center gap-2">
              <BatteryCharging className="h-4 w-4 text-eco" aria-hidden="true" />
              Battery health report included
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              4.9/5 from 380+ customers
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] border border-white/10"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-3 shadow-lift backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={images.vehicleIoniq5}
                  alt={`${heroVehicle.name} available at AutoExperts Rwanda`}
                  className="h-52 w-full object-cover sm:h-60"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-navy/80 px-3 py-1 text-[0.68rem] font-semibold text-white backdrop-blur">
                  <Zap className="h-3 w-3 text-eco" aria-hidden="true" />
                  Available now
                </span>
              </div>

              <div className="px-3 pb-2 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-navy-200">Featured EV</p>
                    <h2 className="mt-1 font-display text-lg font-semibold text-white">{heroVehicle.name}</h2>
                  </div>
                  <p className="shrink-0 rounded-lg bg-white/10 px-2.5 py-1 text-sm font-bold text-white">
                    {formatRWF(heroVehicle.price)}
                  </p>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-white/5 px-3 py-2">
                    <dt className="text-navy-300">Battery</dt>
                    <dd className="mt-0.5 font-semibold text-white">{heroVehicle.battery} kWh</dd>
                  </div>
                  <div className="rounded-xl bg-white/5 px-3 py-2">
                    <dt className="text-navy-300">Range (WLTP)</dt>
                    <dd className="mt-0.5 font-semibold text-white">{heroVehicle.range} km</dd>
                  </div>
                </dl>

                <Link
                  to={`/vehicles/${heroVehicle.slug}`}
                  className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy transition hover:bg-eco hover:text-white"
                >
                  View listing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-48 rounded-2xl border border-white/15 bg-navy-900/90 p-4 shadow-lift backdrop-blur sm:block">
              <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-wide text-navy-300">
                Battery health
                <BatteryCharging className="h-3.5 w-3.5 text-eco" aria-hidden="true" />
              </div>
              <p className="mt-2 font-display text-2xl font-bold text-white">96%</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-electric to-eco" />
              </div>
              <p className="mt-2 text-[0.65rem] text-navy-300">Verified on our diagnostic bench</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative border-t border-white/10 bg-navy-950/60 backdrop-blur">
      <div className="container grid grid-cols-2 gap-6 py-7 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-[0.7rem] leading-snug text-navy-300 sm:text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
