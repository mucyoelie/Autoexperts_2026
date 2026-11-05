import { images } from "../../assets";
import { reasons } from "../../data/company";
import Button from "../common/Button";
import Icon from "../common/Icon";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";

const WhyChoose = () => (
  <section className="relative isolate overflow-hidden bg-navy-950 section-padding">
    <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
    <div
      className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-electric/15 blur-[130px]"
      aria-hidden="true"
    />

    <div className="container relative">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            light
            eyebrow="Why AutoExperts"
            title="Specialists, not generalists."
            description="Anyone can change oil. Working safely inside a 400-volt battery pack is a different discipline — and it is the only one we practise."
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={images.batteryTwo}
              alt="Electric vehicle battery pack being inspected with diagnostic equipment"
              className="h-48 w-full object-cover sm:h-56"
              loading="lazy"
            />
          </div>

          <div className="mt-8">
            <Button to="/services" variant="secondary">
              See how we work
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 60}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-eco/40 hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-eco/20 text-eco ring-1 ring-inset ring-white/10">
                    <Icon name={reason.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
