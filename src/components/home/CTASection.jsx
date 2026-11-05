import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { images } from "../../assets";
import { site, whatsappLink } from "../../data/site";
import Button from "../common/Button";

const CTASection = () => (
  <section className="relative overflow-hidden bg-white pb-16 pt-4 sm:pb-20">
    <div className="container">
      <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-12 shadow-lift sm:px-10 sm:py-14 lg:px-14">
        <img
          src={images.evCharging}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow text-eco-300">Ready when you are</span>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl leading-tight text-white sm:text-4xl">
              Book a diagnostic, a test drive or a free EV consultation.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-200 sm:text-base">
              Tell us what you drive and what you need. Most bookings are confirmed within one working hour on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4">
            <Button to="/contact" size="lg" iconRight={ArrowRight}>
              Book a service
            </Button>
            <Button href={whatsappLink()} variant="secondary" size="lg" icon={MessageCircle}>
              WhatsApp us
            </Button>
            <a
              href={site.phoneHref}
              className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-navy-200 transition hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
