import { ArrowRight, CheckCircle2, Compass, Leaf, Target } from "lucide-react";
import { images } from "../assets";
import { reasons, stats, values } from "../data/company";
import { site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";

const focusPoints = [
  "Electric drivetrains have fewer moving parts, but high-voltage safety demands specific training we invest in every year.",
  "Battery health — not mileage — decides an EV's value. We built our inspection process around that fact.",
  "Hybrid and plug-in hybrid owners in Rwanda need one workshop that understands both the electric and combustion sides.",
  "Charging infrastructure here is growing quickly; advice must be local, not copied from Europe or China.",
];

const About = () => {
  useDocumentTitle("About Us");

  return (
    <>
      <PageHero
        eyebrow="About AutoExperts Rwanda"
        title="We bet on electric early — and built the workshop to prove it."
        description="Founded in Kigali in 2018, AutoExperts Rwanda exists to make electric and hybrid ownership practical, safe and affordable in Rwanda."
        image={images.workshop}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="section-padding bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={images.engineer}
                  alt="AutoExperts engineer testing an electric vehicle system"
                  className="h-[340px] w-full object-cover sm:h-[440px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-navy-100 bg-white p-5 shadow-lift sm:left-10 sm:right-auto sm:w-64">
                <p className="font-display text-2xl font-bold text-navy">7 years</p>
                <p className="mt-1 text-xs leading-relaxed text-navy-400">
                  of dedicated electric and hybrid experience in Rwanda
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="It started with two imported Leafs and a lot of questions."
            />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70 sm:text-base">
              <p>
                In 2018 our founders imported the first two Nissan Leafs into Kigali for family use. Within months,
                both needed attention that no local garage could safely provide: a weak cell module, a charger that
                tripped the house breaker, a brake system that behaved nothing like a petrol car's.
              </p>
              <p>
                Rather than give up, they trained abroad, bought the right insulated tools and diagnostic licences,
                and opened a small two-bay workshop in Niboyi, Kicukiro. Word spread through {`Kigali's`} small but growing EV
                community.
              </p>
              <p>
                Today AutoExperts Rwanda employs 12 people across a six-bay workshop, a curated vehicle marketplace,
                a rental fleet and a training school. More than 320 mechanics have passed through our courses — many
                now running EV-ready workshops of their own.
              </p>
            </div>

            <ul className="mt-7 space-y-3">
              {["Six-bay workshop in Niboyi, Kicukiro", "High-voltage certified technicians", "Marketplace, rentals and training under one roof"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-7 text-white sm:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-eco">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl text-white">Our mission</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-200 sm:text-base">
                  To keep every electric and hybrid vehicle in Rwanda safe, reliable and on the road — through
                  specialist service, honest diagnosis and training that raises the standard of the whole industry.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="font-display text-xl font-bold text-eco">100%</p>
                    <p className="mt-1 text-xs text-navy-300">EV &amp; hybrid focus</p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-eco">48h</p>
                    <p className="mt-1 text-xs text-navy-300">Typical diagnosis turnaround</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-50 text-electric">
                  <Compass className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl">Our vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  A Rwanda where clean transport is normal, not niche — where a family in Kigali can buy a used EV
                  knowing there is a qualified workshop, spare parts and honest advice within reach.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  By 2030 we aim to have trained 1,000 technicians and supported 5,000 electric and hybrid vehicles
                  across the country.
                </p>
                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-mist p-4">
                  <Leaf className="h-5 w-5 shrink-0 text-eco" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-navy-600">
                    Every EV service avoids an estimated 1.8 tonnes of CO₂ per vehicle, per year, compared with an
                    equivalent petrol car.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What we stand for"
            title="Six values we hire, quote and repair by."
            description="They are not posters on the wall — they are the checks we run before a car goes back to its owner."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 50}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-electric/30 hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-electric">
                    <Icon name={value.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="Why electric only"
              title="Focus is the whole product."
              description="A garage that services everything cannot be excellent at high-voltage systems. We chose depth over breadth."
            />

            <ul className="mt-7 space-y-4">
              {focusPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-navy-200">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco/15 text-eco">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src={images.charging}
                alt="Electric vehicle connected to a charger"
                className="h-[300px] w-full object-cover sm:h-[380px]"
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-display text-xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-navy-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid items-center gap-10 rounded-3xl border border-navy-100 bg-mist p-7 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">Our commitment to Rwanda</span>
              <h2 className="mt-4 text-balance font-display text-2xl leading-tight sm:text-3xl">
                Cleaner air in Kigali, and skills that stay in the country.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
                Transport is one of {`Rwanda's`} fastest-growing sources of emissions. Every EV we keep on the road
                instead of scrapping, every technician we train, and every fleet we help electrify moves the country
                closer to its green growth targets. We also offer free battery checks during national environment week
                and run an apprenticeship for young women entering the trade.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button to="/training" iconRight={ArrowRight}>
                  Explore training
                </Button>
                <Button href={site.emailHref} variant="outline">
                  Partner with us
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {reasons.slice(0, 4).map((reason) => (
                  <div key={reason.title} className="rounded-2xl bg-white p-4 shadow-card">
                    <Icon name={reason.icon} className="h-5 w-5 text-electric" />
                    <p className="mt-3 text-xs font-semibold leading-snug text-navy">{reason.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
