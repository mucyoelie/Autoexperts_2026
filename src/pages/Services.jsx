import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { images } from "../assets";
import { services } from "../data/services";
import { processSteps } from "../data/company";
import { site, whatsappLink } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import ServiceCard from "../components/common/ServiceCard";

const Services = () => {
  useDocumentTitle("Services");

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything your EV or hybrid needs, in one place."
        description="Painting, repair and maintenance, rentals, sales, mechanic training and independent consultation — delivered by one specialist team in Remera, Kigali."
        image={images.painting}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      >
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-medium text-white backdrop-blur transition hover:border-eco hover:text-eco"
            >
              {service.shortTitle}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Six specialisms"
            title="Choose a service, or ask us where to start."
            description="Not sure what your car needs? Send us the symptoms on WhatsApp — we will tell you honestly whether it needs a workshop visit."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60} className="h-full">
                <div id={service.slug} className="h-full scroll-mt-28">
                  <ServiceCard service={service} index={index} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                align="left"
                eyebrow="How we work"
                title="A fixed process, every time."
                description="No open-ended labour estimates and no work started without your approval."
              />
              <Button to="/contact" className="mt-6" iconRight={ArrowRight}>
                Book a service
              </Button>
            </div>

            <div className="lg:col-span-8">
              <ol className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step) => (
                  <li key={step.step} className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-eco">
                        <Icon name={step.icon} className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm font-bold text-navy-300">Step {step.step}</span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-navy">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{step.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-navy p-5 text-white sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm">
                  Need a quote today? Send a photo of the issue on WhatsApp —{" "}
                  <span className="font-semibold text-eco">reply within one working hour.</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button href={whatsappLink()} variant="secondary" size="sm" icon={MessageCircle}>
                    WhatsApp
                  </Button>
                  <Button href={site.phoneHref} variant="light" size="sm" icon={Phone}>
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
