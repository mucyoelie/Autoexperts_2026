import { useCallback, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Wrench } from "lucide-react";
import { images } from "../assets";
import { courses, trainingBenefits } from "../data/courses";
import { site, whatsappLink } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import CourseCard from "../components/training/CourseCard";
import TrainingRegistrationForm from "../components/training/TrainingRegistrationForm";

const trainingStats = [
  { value: "320+", label: "Technicians trained" },
  { value: "4", label: "Accredited courses" },
  { value: "12", label: "Max trainees per class" },
  { value: "60%", label: "Hands-on workshop time" },
];

const whoFor = [
  {
    title: "Working mechanics",
    body: "You already fix cars and want the certification employers now ask for. Evening and Saturday cohorts fit around your job.",
  },
  {
    title: "Workshop owners",
    body: "Train your team together and we will tailor the practical work to the vehicles you actually see.",
  },
  {
    title: "Career changers",
    body: "Start at Level 1, then join a short internship in our workshop if you perform well on assessment.",
  },
  {
    title: "Fleet technicians",
    body: "We run in-house cohorts for companies electrifying their fleets, including charger troubleshooting.",
  },
];

const Training = () => {
  useDocumentTitle("Mechanic Training");
  const [selectedCourse, setSelectedCourse] = useState(courses[0].slug);
  const formRef = useRef(null);

  const handleRegister = useCallback((course) => {
    setSelectedCourse(course.slug);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Training for mechanics"
        title="The skills Rwanda's EV workshops are hiring for."
        description="High-voltage safety, battery diagnostics and hybrid repair — taught on live vehicles by the team that services them every day."
        image={images.trainingThree}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Training" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#courses" iconRight={ArrowRight}>
            See the courses
          </Button>
          <Button
            href={whatsappLink("Hello AutoExperts! I am interested in the mechanic training courses.")}
            variant="outline"
            size="lg"
            className="border-white/25 bg-white/5 text-white hover:border-eco hover:text-eco"
            icon={MessageCircle}
          >
            Ask about intake dates
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-navy-100 bg-white py-10">
        <div className="container grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trainingStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold text-navy sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-navy-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={images.trainingTwo}
                alt="Trainees working on an electric vehicle in the AutoExperts training workshop"
                className="h-[320px] w-full object-cover sm:h-[420px]"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-navy">Training workshop, Niboyi, Kicukiro</p>
                <p className="mt-1 text-xs text-navy-500">
                  Live packs, motors, inverters and chargers on the bench — the same equipment we use on customer cars.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Programme overview"
              title="Built by technicians who work on these cars daily."
              description="Our curriculum follows a simple progression: understand the system, make it safe, then diagnose and repair. Every level ends with a practical assessment, not a multiple-choice test."
            />

            <ul className="mt-6 space-y-3 text-sm text-navy-600">
              {[
                "Accredited curriculum updated with every new model year we service",
                "40% classroom theory, 60% hands-on with live vehicles and components",
                "Insulated tools, PPE and diagnostic software included during training",
                "Certificate and high-voltage safety card issued on completion",
                "Job placement introductions to partner workshops and fleets",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-navy-100 bg-mist p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Wrench className="h-4 w-4 text-electric" aria-hidden="true" />
                Payment plans available
              </p>
              <p className="mt-2 text-xs leading-relaxed text-navy-500">
                Pay 50% to reserve your seat and the balance before the first session. Workshop teams sending three or
                more trainees receive a 10% group discount.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="section-padding scroll-mt-20 bg-mist">
        <div className="container">
          <SectionHeading
            eyebrow="Available courses"
            title="Four courses. One clear career path."
            description="Level 1 opens the door, Level 2 makes you employable, Level 3 makes you the specialist your region calls."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {courses.map((course, index) => (
              <Reveal key={course.id} delay={index * 60} className="h-full">
                <CourseCard course={course} onRegister={handleRegister} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Why train with us"
            title="What you get beyond the certificate."
            description="Small cohorts, real equipment and a team that wants you to succeed in the trade."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainingBenefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 50}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-electric/30 hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50 text-electric">
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whoFor.map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy-100 bg-mist p-5">
                <h3 className="font-display text-sm font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={formRef} id="register" className="section-padding scroll-mt-20 bg-navy-950">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              light
              eyebrow="Registration"
              title="Reserve a seat in the next cohort."
              description="Send your details and our training coordinator will call to confirm your level, funding option and start date."
            />

            <div className="mt-7 space-y-3 text-sm text-navy-200">
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                Seats are limited to 12 per cohort
              </p>
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                Free 15-minute call to check the right level
              </p>
              <p className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                Group discounts for workshops
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">Talk to a human</p>
              <a href={site.phoneHref} className="mt-2 block font-display text-lg font-semibold text-white hover:text-eco">
                {site.phone}
              </a>
              <a href={site.emailHref} className="mt-1 block text-sm text-navy-300 hover:text-eco">
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 shadow-lift sm:p-8">
              <TrainingRegistrationForm selectedCourse={selectedCourse} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
