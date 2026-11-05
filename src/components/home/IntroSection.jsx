import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { images } from "../../assets";
import { site } from "../../data/site";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";

const highlights = [
  "Exclusively electric and hybrid — never a mixed petrol workshop",
  "Battery state-of-health reporting on every inspection",
  "Genuine and OEM-grade parts, sourced with lead times you can plan around",
  "Plain-language explanations, in English, Kinyarwanda or French",
];

const IntroSection = () => (
  <section className="section-padding bg-white">
    <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={images.workshopThree}
            alt="AutoExperts technicians inspecting an electric vehicle in the Kigali workshop"
            className="h-[320px] w-full object-cover sm:h-[420px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent" aria-hidden="true" />
        </div>

        <div className="absolute -bottom-8 right-0 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:block lg:-right-6">
          <img
            src={images.chargingStation}
            alt="Electric vehicle plugged into a charging station"
            className="h-36 w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="absolute left-5 top-5 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur">
          <p className="font-display text-2xl font-bold text-navy">2018</p>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-400">Serving Kigali</p>
        </div>
      </Reveal>

      <div>
        <SectionHeading
          align="left"
          eyebrow="Who we are"
          title="A workshop built around one technology: electric."
          description="Petrol engines are not our business. From the diagnostic software on our laptops to the insulated tools on our benches, everything at AutoExperts Rwanda is chosen for battery electric and hybrid vehicles."
        />

        <p className="mt-5 text-sm leading-relaxed text-ink/70 sm:text-base">
          We started in 2018 with two imported Nissan Leafs, a borrowed scan tool and a simple observation: Kigali had
          EV owners, but nowhere qualified to look after their cars. Today we run a full workshop, a curated
          marketplace, a rental fleet and a training school for the technicians Rwanda will need next.
        </p>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-navy-600">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button to="/about" iconRight={ArrowRight}>
            More about us
          </Button>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-navy transition hover:text-electric"
          >
            <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
