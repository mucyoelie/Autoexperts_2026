import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, PackageCheck, Search } from "lucide-react";
import { sparePartCategories, spareParts } from "../data/spareParts";
import { site, whatsappLink } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { formatRWF } from "../utils/format";
import Button from "../components/common/Button";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import { images } from "../assets";

const SpareParts = () => {
  const [category, setCategory] = useState("All parts");
  const [query, setQuery] = useState("");
  useDocumentTitle("Spare Parts");

  const filteredParts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return spareParts.filter((part) => {
      const matchesCategory = category === "All parts" || part.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${part.name} ${part.category} ${part.description}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow="Parts desk"
        title="The right spare part for the right vehicle."
        description="Shop tested EV, hybrid and service parts from AutoExperts Rwanda. Send us your vehicle details before ordering and our technicians will confirm compatibility."
        image={images.mechanic}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Spare parts" }]}
      >
        <Button href={whatsappLink("Hello AutoExperts Rwanda! I need help finding a spare part for my vehicle.")} variant="secondary" icon={MessageCircle}>
          Ask about a part
        </Button>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Parts catalogue"
            title="Parts for electric, hybrid and everyday service."
            description="Prices are indicative and may vary by vehicle model. We verify the part number and fitment before confirming every order."
          />

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" aria-label="Spare part categories">
              {sparePartCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    category === item
                      ? "border-electric bg-electric text-white"
                      : "border-navy-100 bg-white text-navy-600 hover:border-electric hover:text-electric"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="relative block w-full lg:max-w-xs">
              <span className="sr-only">Search spare parts</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search parts"
                className="w-full rounded-full border border-navy-100 bg-white py-2.5 pl-10 pr-4 text-sm text-navy outline-none transition placeholder:text-navy-400 focus:border-electric focus:ring-2 focus:ring-electric/15"
              />
            </label>
          </div>

          {filteredParts.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredParts.map((part, index) => (
                <Reveal key={part.id} delay={index * 50} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="aspect-[4/3] overflow-hidden bg-mist">
                      <img
                        src={part.image}
                        alt={part.name}
                        loading={index < 4 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-electric">{part.category}</p>
                      <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-navy">{part.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{part.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-eco-700">
                        <PackageCheck className="h-4 w-4" aria-hidden="true" />
                        {part.availability}
                      </div>
                      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                        <p className="font-display text-base font-bold text-navy">{formatRWF(part.price)}</p>
                        <Button
                          href={whatsappLink(`Hello AutoExperts Rwanda! I am interested in the ${part.name}. Please confirm compatibility and availability.`)}
                          size="sm"
                          icon={MessageCircle}
                          aria-label={`Ask about ${part.name}`}
                        >
                          Ask
                        </Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-navy-200 bg-mist p-10 text-center">
              <p className="font-display text-lg font-semibold text-navy">No matching parts found.</p>
              <p className="mt-2 text-sm text-ink/70">Send us your vehicle model and we will help locate the right part.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-mist">
        <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Compatibility first"
              title="Not sure what you need?"
              description="Share your vehicle make, model, year and a photo of the old part on WhatsApp. Our workshop team will check the fitment before you pay."
            />
            <ul className="mt-6 grid gap-3 text-sm text-navy-600 sm:grid-cols-3">
              {["Vehicle fitment check", "Part-number verification", "Workshop installation available"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={whatsappLink("Hello AutoExperts Rwanda! I need help identifying a spare part.")} variant="secondary" icon={MessageCircle}>
              WhatsApp us
            </Button>
            <Button href={site.phoneHref} variant="outline" iconRight={ArrowRight}>
              Call the parts desk
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpareParts;
