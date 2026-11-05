import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";

const ServicesSection = () => (
  <section className="section-padding bg-mist">
    <div className="container">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          eyebrow="What we do"
          title="Six services, one specialisation."
          description="Everything an electric or hybrid vehicle needs in Rwanda — from a paint correction to a full battery diagnostic — under one roof in Niboyi, Kicukiro."
        />
        <Button to="/services" variant="outline" iconRight={ArrowRight} className="shrink-0">
          All services
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 60} className="h-full">
            <ServiceCard service={service} index={index} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
