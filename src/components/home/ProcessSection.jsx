import { processSteps } from "../../data/company";
import Icon from "../common/Icon";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";

const ProcessSection = () => (
  <section className="section-padding bg-mist">
    <div className="container">
      <SectionHeading
        eyebrow="Our process"
        title="Four steps. No guesswork."
        description="The same workflow whether you arrive for a paint correction, a battery diagnosis or a pre-purchase inspection."
      />

      <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-electric/20 via-electric/40 to-eco/40 lg:block"
          aria-hidden="true"
        />

        {processSteps.map((step, index) => (
          <Reveal as="li" key={step.step} delay={index * 90} className="relative">
            <div className="relative flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-eco">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-3xl font-bold text-navy-100">{step.step}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
