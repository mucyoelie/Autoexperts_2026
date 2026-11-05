import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Calendar,
  CheckCircle2,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { getVehicleBySlug, vehicles } from "../data/vehicles";
import { site, whatsappLink } from "../data/site";
import { formatMileage, formatRWF, formatRange } from "../utils/format";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import PageHero from "../components/common/PageHero";
import VehicleCard from "../components/common/VehicleCard";
import VehicleInquiryForm from "../components/vehicles/VehicleInquiryForm";
import NotFound from "./NotFound";

const inspectionPoints = [
  "Battery state of health and cell balance",
  "Charging speed on AC and DC",
  "Insulation resistance and HV connectors",
  "Motor, inverter and reduction gear",
  "Brake pads, discs and regenerative system",
  "Suspension, steering and tyres",
  "Body panels, paint depth and accident history",
  "Software version, recalls and service history",
];

const VehicleDetail = () => {
  const { slug } = useParams();
  const vehicle = getVehicleBySlug(slug);
  // Track the slug alongside the index so switching vehicles resets the gallery safely.
  const [selection, setSelection] = useState({ slug, index: 0 });
  const activeImage = selection.slug === slug ? selection.index : 0;

  useDocumentTitle(vehicle ? `${vehicle.year} ${vehicle.brand} ${vehicle.model}` : "Vehicle not found");

  if (!vehicle) return <NotFound />;

  const isElectric = vehicle.type === "electric";

  const specs = [
    { icon: Calendar, label: "Year", value: vehicle.year },
    { icon: Gauge, label: "Mileage", value: formatMileage(vehicle.mileage) },
    { icon: BatteryCharging, label: "Battery capacity", value: `${vehicle.battery} kWh` },
    {
      icon: Zap,
      label: vehicle.range ? "Electric range (WLTP)" : "Fuel economy",
      value: vehicle.range ? formatRange(vehicle.range) : `${vehicle.fuelEconomy} L/100km`,
    },
    { icon: Zap, label: "Power", value: vehicle.power },
    { icon: ShieldCheck, label: "Drivetrain", value: vehicle.drivetrain },
  ];

  const detailSpecs = [
    { label: "Body type", value: vehicle.bodyType },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Seats", value: `${vehicle.seats} seats` },
    { label: "Exterior colour", value: vehicle.color },
    { label: "Condition", value: vehicle.condition },
    { label: "Vehicle type", value: isElectric ? "Battery electric (BEV)" : "Hybrid" },
    { label: "Location", value: "Niboyi, Kicukiro" },
    { label: "Stock reference", value: vehicle.id.toUpperCase() },
  ];

  const similar = vehicles
    .filter((item) => item.slug !== vehicle.slug && item.type === vehicle.type)
    .slice(0, 3);

  const gallery = vehicle.gallery?.length ? vehicle.gallery : [vehicle.image];

  return (
    <>
      <PageHero
        eyebrow={isElectric ? "Electric vehicle" : "Hybrid vehicle"}
        title={`${vehicle.year} ${vehicle.brand} ${vehicle.model}`}
        description={vehicle.description}
        image={vehicle.image}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Marketplace", to: "/vehicles" },
          { label: `${vehicle.brand} ${vehicle.model}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant={isElectric ? "electric" : "eco"} className="bg-white/95 text-navy ring-0">
            {isElectric ? "Electric" : "Hybrid"}
          </Badge>
          <Badge variant="solid">{vehicle.condition}</Badge>
          {vehicle.badge ? <Badge variant="solid">{vehicle.badge}</Badge> : null}
          <span className="font-display text-xl font-bold text-white">{formatRWF(vehicle.price)}</span>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl border border-navy-100 bg-mist">
              <img
                src={gallery[activeImage]}
                alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model} — photo ${activeImage + 1}`}
                className="h-[280px] w-full object-cover sm:h-[420px]"
              />
            </div>

            {gallery.length > 1 ? (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {gallery.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelection({ slug, index })}
                    aria-label={`Show photo ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`overflow-hidden rounded-xl border-2 transition ${
                      activeImage === index ? "border-electric" : "border-transparent hover:border-navy-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-20 w-full object-cover sm:h-24"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            ) : null}

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {specs.map((spec) => {
                const Icon = spec.icon;
                return (
                  <div key={spec.label} className="rounded-2xl border border-navy-100 bg-white p-4">
                    <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
                    <p className="mt-3 text-[0.68rem] uppercase tracking-wide text-navy-400">{spec.label}</p>
                    <p className="mt-1 text-sm font-semibold text-navy">{spec.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-lg font-semibold text-navy">Full specification</h2>
                <dl className="mt-4 divide-y divide-navy-50 rounded-2xl border border-navy-100">
                  {detailSpecs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                      <dt className="text-navy-400">{spec.label}</dt>
                      <dd className="text-right font-medium text-navy">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h2 className="font-display text-lg font-semibold text-navy">Highlights</h2>
                <ul className="mt-4 space-y-2.5">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-navy-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl bg-mist p-5">
                  <h3 className="text-sm font-semibold text-navy">92-point inspection includes</h3>
                  <ul className="mt-3 space-y-1.5">
                    {inspectionPoints.slice(0, 5).map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-navy-500">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-navy-400">
                    Full inspection PDF is shared before you commit — ask for it on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy-400">Asking price</p>
                <p className="mt-1 font-display text-2xl font-bold text-navy">{formatRWF(vehicle.price)}</p>
                <p className="mt-1 text-xs text-navy-400">
                  Includes 30-day drivetrain warranty · Trade-in considered
                </p>

                <div className="mt-5 space-y-2">
                  <Button href="#inquiry" fullWidth iconRight={ArrowRight}>
                    Contact about this vehicle
                  </Button>
                  <Button
                    href={whatsappLink(
                      `Hello AutoExperts! I would like to know more about the ${vehicle.year} ${vehicle.brand} ${vehicle.model} (${vehicle.id.toUpperCase()}).`,
                    )}
                    variant="secondary"
                    fullWidth
                    icon={MessageCircle}
                  >
                    WhatsApp the seller
                  </Button>
                  <Button href={site.phoneHref} variant="outline" fullWidth icon={Phone}>
                    {site.phone}
                  </Button>
                </div>

                <div className="mt-5 space-y-2 border-t border-navy-50 pt-4 text-xs text-navy-500">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-electric" aria-hidden="true" />
                    Viewing by appointment in Niboyi, Kicukiro
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-electric" aria-hidden="true" />
                    Battery report available before payment
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-navy-100 bg-mist p-5">
                <h3 className="text-sm font-semibold text-navy">Financing estimate</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-500">
                  With 30% down over 36 months, expect around{" "}
                  <span className="font-semibold text-navy">
                    {formatRWF(Math.round((vehicle.price * 0.7 * 1.14) / 36))}
                  </span>{" "}
                  per month. We introduce buyers to partner banks and SACCOs — indicative only.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-electric hover:underline"
                >
                  Ask about financing
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="inquiry" className="section-padding scroll-mt-24 bg-mist">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Make an inquiry</span>
            <h2 className="mt-4 text-balance font-display text-2xl leading-tight sm:text-3xl">
              Ask about the {vehicle.brand} {vehicle.model}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Tell us what you would like to do and we will come back with availability, the full battery report and a
              test-drive slot. No pressure, no auto-generated spam.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                Reply within one working hour, Monday to Saturday
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                Full inspection PDF shared on request
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                Test drives in Kigali, or at your office for fleet buyers
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <VehicleInquiryForm vehicle={vehicle} />
            </div>
          </div>
        </div>
      </section>

      {similar.length > 0 ? (
        <section className="section-padding bg-white">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl">Similar {isElectric ? "electric" : "hybrid"} vehicles</h2>
              <Button to={`/vehicles?type=${vehicle.type}`} variant="outline" size="sm" iconRight={ArrowRight}>
                See all
              </Button>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((item, index) => (
                <VehicleCard key={item.id} vehicle={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default VehicleDetail;
