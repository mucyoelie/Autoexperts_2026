import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { getServiceBySlug, services } from "../data/services";
import { site, whatsappLink } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import PageHero from "../components/common/PageHero";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useDocumentTitle(service ? service.title : "Service not found");

  if (!service) return <NotFound />;

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        image={service.image}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.shortTitle },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-navy-200 sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-eco" aria-hidden="true" />
            {service.duration}
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-eco" aria-hidden="true" />
            Written quote before work starts
          </span>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-50 text-electric">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy-400">
                  {service.tagline}
                </p>
                <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">What this service covers</h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink/75 sm:text-base">{service.intro}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {service.sections.map((section) => (
                <div key={section.title} className="rounded-2xl border border-navy-100 bg-mist p-5">
                  <h3 className="font-display text-base font-semibold text-navy">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{section.body}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-lg font-semibold text-navy">Included in this service</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 rounded-xl bg-white text-sm text-navy-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-lg font-semibold text-navy">How it runs</h3>
            <ol className="mt-4 space-y-3">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-navy-100 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm text-navy-600">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-electric-100 bg-electric-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric-700">Indicative pricing</p>
              <p className="mt-2 text-sm font-medium text-navy">{service.priceNote}</p>
              <p className="mt-2 text-xs leading-relaxed text-navy-500">
                Final quotes depend on the vehicle, parts availability and the condition we find. You always approve a
                fixed price before any work starts. Prices include VAT.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-navy">Book this service</h3>
                  <p className="mt-1.5 text-sm text-ink/70">
                    Send an inquiry and we will confirm a slot — usually within one working hour.
                  </p>
                  <div className="mt-4 space-y-2">
                    <Button
                      to={`/contact?service=${service.slug}`}
                      fullWidth
                      iconRight={ArrowRight}
                    >
                      Request a booking
                    </Button>
                    <Button
                      href={whatsappLink(`Hello AutoExperts! I would like to book: ${service.shortTitle}.`)}
                      variant="secondary"
                      fullWidth
                      icon={MessageCircle}
                    >
                      WhatsApp us
                    </Button>
                    <Button href={site.phoneHref} variant="outline" fullWidth icon={Phone}>
                      {site.phone}
                    </Button>
                  </div>
                  <dl className="mt-5 space-y-2 border-t border-navy-50 pt-4 text-xs">
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-navy-400">Typical duration</dt>
                      <dd className="font-semibold text-navy">{service.duration}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-navy-400">Workshop</dt>
                      <dd className="text-right font-semibold text-navy">Remera, Kigali</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-mist p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-400">Other services</h3>
                <ul className="mt-3 space-y-1">
                  {otherServices.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/services/${item.slug}`}
                        className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm font-medium text-navy transition hover:bg-white hover:text-electric"
                      >
                        {item.shortTitle}
                        <ArrowRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
