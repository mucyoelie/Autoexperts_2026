import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, BadgeCheck, BatteryCharging, Wallet } from "lucide-react";
import { images } from "../assets";
import { vehicles } from "../data/vehicles";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useVehicleFilters } from "../hooks/useVehicleFilters";
import Button from "../components/common/Button";
import EmptyState from "../components/common/EmptyState";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import VehicleCard from "../components/common/VehicleCard";
import VehicleFilters from "../components/vehicles/VehicleFilters";

const trustPoints = [
  { icon: BatteryCharging, label: "Battery health report on every car" },
  { icon: BadgeCheck, label: "92-point inspection before listing" },
  { icon: Wallet, label: "Trade-in and financing introductions" },
];

const Marketplace = () => {
  useDocumentTitle("Vehicle Marketplace");
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get("type");

  const { filters, updateFilter, resetFilters, results, activeCount } = useVehicleFilters(vehicles, {
    type: typeParam === "electric" || typeParam === "hybrid" ? typeParam : "all",
  });

  // Keep the URL shareable: /vehicles?type=electric
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (filters.type === "all") next.delete("type");
    else next.set("type", filters.type);
    if (next.toString() !== searchParams.toString()) {
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.type]);

  return (
    <>
      <PageHero
        eyebrow="Vehicle marketplace"
        title="Electric and hybrid vehicles, fully inspected."
        description="Every car on this page has passed our 92-point inspection and comes with a verified battery health figure. Prices are in Rwandan francs and include our 30-day drivetrain warranty."
        image={images.chargingForecourt}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Marketplace" }]}
      >
        <ul className="flex flex-col gap-2 text-xs text-navy-200 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-sm">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <li key={point.label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-eco" aria-hidden="true" />
                {point.label}
              </li>
            );
          })}
        </ul>
      </PageHero>

      <section className="section-padding bg-mist">
        <div className="container">
          <VehicleFilters
            vehicles={vehicles}
            filters={filters}
            updateFilter={updateFilter}
            resetFilters={resetFilters}
            activeCount={activeCount}
            resultCount={results.length}
          />

          {results.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((vehicle, index) => (
                <Reveal key={vehicle.id} delay={Math.min(index, 6) * 40} className="h-full">
                  <VehicleCard vehicle={vehicle} index={index} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8">
              <EmptyState
                title="No vehicles match those filters"
                description="Try a wider price range, a different brand, or clear the search. New stock arrives every fortnight — tell us what you are looking for and we will call you first."
                actionLabel="Clear all filters"
                onAction={resetFilters}
              />
            </div>
          )}

          <div className="mt-12 grid gap-6 rounded-3xl border border-navy-100 bg-white p-7 shadow-card lg:grid-cols-12 lg:items-center sm:p-9">
            <div className="lg:col-span-8">
              <h2 className="text-balance font-display text-2xl leading-tight sm:text-3xl">
                Selling an EV or hybrid? We will value it in 30 minutes.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
                Bring the car and its logbook to Niboyi, Kicukiro. We run a battery health check, verify the service history and
                make a written offer the same day — no obligation to sell.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Button to="/contact" iconRight={ArrowRight}>
                Book a valuation
              </Button>
              <Button to="/about" variant="outline">
                About our inspections
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplace;
