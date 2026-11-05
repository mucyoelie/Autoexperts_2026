import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { featuredVehicles } from "../../data/vehicles";
import { cn } from "../../utils/cn";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import VehicleCard from "../common/VehicleCard";

const tabs = [
  { id: "all", label: "All featured" },
  { id: "electric", label: "Electric" },
  { id: "hybrid", label: "Hybrid" },
];

const FeaturedVehicles = () => {
  const [tab, setTab] = useState("electric");

  const vehicles = useMemo(
    () => (tab === "all" ? featuredVehicles : featuredVehicles.filter((vehicle) => vehicle.type === tab)).slice(0, 6),
    [tab],
  );

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Featured stock"
            title="Inspected, documented and ready to drive."
            description="Every listing includes a verified battery health figure and a 92-point inspection report. No surprises after you sign."
          />

          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter featured vehicles">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => setTab(item.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  tab === item.id
                    ? "bg-navy text-white shadow-card"
                    : "border border-navy-100 bg-white text-navy-600 hover:border-electric hover:text-electric",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, index) => (
            <Reveal key={vehicle.id} delay={index * 50} className="h-full">
              <VehicleCard vehicle={vehicle} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-navy-100 bg-mist px-6 py-6 sm:flex-row">
          <p className="text-sm text-navy-600">
            <span className="font-semibold text-navy">{featuredVehicles.length} featured vehicles</span> and more in the
            full marketplace — filter by brand, budget and battery type.
          </p>
          <Button to="/vehicles" iconRight={ArrowRight} className="shrink-0">
            Browse marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
