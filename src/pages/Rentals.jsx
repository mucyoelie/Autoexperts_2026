import { useRef, useState } from "react";
import { ArrowRight, BatteryCharging, CheckCircle2, Headphones, Plane, ShieldCheck, Sparkles } from "lucide-react";
import { images } from "../assets";
import { rentalIncludes, rentals } from "../data/rentals";
import { whatsappLink } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { cn } from "../utils/cn";
import Button from "../components/common/Button";
import EmptyState from "../components/common/EmptyState";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import RentalCard from "../components/rental/RentalCard";
import RentalInquiryForm from "../components/rental/RentalInquiryForm";

const perks = [
  { icon: BatteryCharging, title: "Handed over charged", body: "Every rental leaves with at least 80% battery and a charging card." },
  { icon: ShieldCheck, title: "Fully insured", body: "Comprehensive insurance and 24/7 roadside support are included." },
  { icon: Plane, title: "Airport delivery", body: "We meet you at Kigali International Airport on request." },
  { icon: Headphones, title: "Real human support", body: "A WhatsApp line to our workshop, not a foreign call centre." },
];

const steps = [
  "Pick your vehicle and dates",
  "Send the inquiry — we confirm within one working hour",
  "Share your licence and ID, sign the agreement",
  "Collect the car (or we deliver it) and drive electric",
];

const Rentals = () => {
  useDocumentTitle("Car Rental");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(rentals[0].slug);
  const inquiryRef = useRef(null);

  const visibleRentals = onlyAvailable ? rentals.filter((rental) => rental.available) : rentals;

  const handleInquire = (rental) => {
    setSelectedVehicle(rental.slug);
    inquiryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageHero
        eyebrow="Car rental"
        title="Rent electric. Skip the fuel queue."
        description="A quiet, clean fleet for Kigali and beyond. Daily and weekly rates, insurance included, and a charging briefing at handover so you are never stranded."
        image={images.chargingStation}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Rentals" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#fleet" iconRight={ArrowRight}>
            See the fleet
          </Button>
          <Button href={whatsappLink("Hello AutoExperts! I would like to rent an electric or hybrid vehicle.")} variant="outline" size="lg" className="border-white/25 bg-white/5 text-white hover:border-eco hover:text-eco">
            Ask on WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-navy-100 bg-white py-10">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div key={perk.title} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-eco-50 text-eco-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{perk.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-navy-400">{perk.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="fleet" className="section-padding scroll-mt-20 bg-mist">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow">Our fleet</span>
              <h2 className="mt-3 text-balance font-display text-2xl sm:text-3xl">
                {rentals.length} vehicles, all electric or hybrid
              </h2>
              <p className="mt-2 max-w-xl text-sm text-ink/70">
                Prices include comprehensive insurance and unlimited mileage on weekly bookings. Deposit is refundable
                on return.
              </p>
            </div>

            <label className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-navy-100 bg-white px-4 py-2.5 text-sm font-medium text-navy shadow-sm">
              <input
                type="checkbox"
                checked={onlyAvailable}
                onChange={(event) => setOnlyAvailable(event.target.checked)}
                className="h-4 w-4 rounded border-navy-300 text-electric focus:ring-electric"
              />
              Available now only
            </label>
          </div>

          {visibleRentals.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleRentals.map((rental, index) => (
                <Reveal key={rental.id} delay={Math.min(index, 5) * 50} className="h-full">
                  <RentalCard rental={rental} onInquire={handleInquire} index={index} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8">
              <EmptyState
                title="Everything is on the road right now"
                description="Our whole fleet is currently booked. Send us your dates anyway — we often have cancellations and can prioritise your request."
                actionLabel="Show all vehicles"
                onAction={() => setOnlyAvailable(false)}
              />
            </div>
          )}

          <div className="mt-10 rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Included as standard
                </span>
                <h2 className="mt-3 text-2xl">No surprise extras</h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {rentalIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">How renting works</h3>
                <ol className="mt-4 space-y-3">
                  {steps.map((step, index) => (
                    <li key={step} className="flex items-center gap-3 rounded-xl bg-mist px-4 py-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-[0.7rem] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm text-navy-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={inquiryRef} id="rental-inquiry" className="section-padding scroll-mt-20 bg-white">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Rental inquiry</span>
            <h2 className="mt-4 text-balance font-display text-2xl leading-tight sm:text-3xl">
              Reserve your dates
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Send the inquiry and we will hold the vehicle for 24 hours while you confirm. If your first choice is
              booked, we will suggest the closest alternative.
            </p>

            <div className="mt-6 space-y-3">
              <div className={cn("rounded-2xl border p-4", "border-navy-100 bg-mist")}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-400">Deposit</p>
                <p className="mt-1 text-sm text-navy-600">
                  Refundable deposits range from RWF 200,000 to RWF 400,000 depending on the vehicle. Paid by mobile
                  money or card at handover.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-mist p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-400">Requirements</p>
                <ul className="mt-2 space-y-1.5 text-sm text-navy-600">
                  <li>Valid driving licence (Rwandan or international)</li>
                  <li>National ID or passport</li>
                  <li>Minimum age 23</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <RentalInquiryForm selectedVehicle={selectedVehicle} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rentals;
