import { useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { images } from "../assets";
import { services } from "../data/services";
import { site, whatsappLink } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Button from "../components/common/Button";
import ContactForm from "../components/common/ContactForm";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import ContactInfo from "../components/contact/ContactInfo";
import FaqAccordion from "../components/contact/FaqAccordion";
import MapSection from "../components/contact/MapSection";

const Contact = () => {
  useDocumentTitle("Contact Us");
  const [searchParams] = useSearchParams();
  const serviceSlug = searchParams.get("service");
  const preselected = services.find((service) => service.slug === serviceSlug);

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to someone who actually works on EVs."
        description="Book a service, ask for a quote, arrange a test drive or plan a fleet conversion. We answer WhatsApp fastest, and the phone is always picked up during workshop hours."
        image={images.consultTwo}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappLink()} variant="secondary" icon={MessageCircle}>
            WhatsApp us now
          </Button>
          <Button href={site.phoneHref} variant="outline" className="border-white/25 bg-white/5 text-white hover:border-eco hover:text-eco" icon={Phone}>
            {site.phone}
          </Button>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">Send an inquiry</span>
            <h2 className="mt-4 text-balance font-display text-2xl leading-tight sm:text-3xl">
              {preselected ? `Tell us about your ${preselected.shortTitle.toLowerCase()} needs` : "How can we help?"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Complete the form and we will come back with next steps, a price range and the earliest available slot.
              Fields marked with an asterisk are required.
            </p>

            <div className="mt-7 rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <ContactForm defaultTopic={preselected?.shortTitle ?? ""} />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-6">
              <ContactInfo />

              <div className="relative overflow-hidden rounded-2xl bg-navy p-6 text-white">
                <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full bg-eco/15 px-3 py-1 text-xs font-semibold text-eco">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Fastest reply
                  </span>
                  <h2 className="mt-4 font-display text-xl text-white">WhatsApp the workshop</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">
                    Send a photo of the dashboard warning, your vehicle details or the dates you need. A technician — not
                    a bot — replies, usually within the hour.
                  </p>
                  <Button href={whatsappLink()} variant="secondary" className="mt-5" iconRight={ArrowRight}>
                    Open WhatsApp
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-mist p-5">
                <h3 className="text-sm font-semibold text-navy">What to bring</h3>
                <ul className="mt-3 space-y-2 text-sm text-navy-600">
                  {["Vehicle logbook or registration", "Any service or battery history you have", "The charging cable you normally use", "A list of symptoms, with photos if possible"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <MapSection />

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Questions"
            title="Answers before you call."
            description="The things customers ask us most often at the front desk."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
