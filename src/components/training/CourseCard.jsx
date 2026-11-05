import { useId, useState } from "react";
import { ArrowRight, Award, CalendarClock, ChevronDown, Clock, Users } from "lucide-react";
import { formatRWF } from "../../utils/format";
import Badge from "../common/Badge";

const CourseCard = ({ course, onRegister }) => {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition duration-300 hover:shadow-lift">
      <div className="relative h-44 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" aria-hidden="true" />
        <Badge variant="solid" className="absolute left-3 top-3 bg-navy/80">
          {course.level}
        </Badge>
        <p className="absolute inset-x-4 bottom-3 font-display text-sm font-semibold text-white">{course.title}</p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-ink/70">{course.summary}</p>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-xl bg-mist px-3 py-2">
            <dt className="flex items-center gap-1 text-navy-400">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Duration
            </dt>
            <dd className="mt-0.5 font-semibold text-navy">{course.duration}</dd>
          </div>
          <div className="rounded-xl bg-mist px-3 py-2">
            <dt className="flex items-center gap-1 text-navy-400">
              <Users className="h-3.5 w-3.5" aria-hidden="true" />
              Class size
            </dt>
            <dd className="mt-0.5 font-semibold text-navy">Max {course.seats}</dd>
          </div>
          <div className="rounded-xl bg-mist px-3 py-2">
            <dt className="flex items-center gap-1 text-navy-400">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
              Next intake
            </dt>
            <dd className="mt-0.5 font-semibold text-navy">{course.startDate}</dd>
          </div>
          <div className="rounded-xl bg-mist px-3 py-2">
            <dt className="flex items-center gap-1 text-navy-400">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Course fee
            </dt>
            <dd className="mt-0.5 font-semibold text-navy">{formatRWF(course.price)}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="mt-4 inline-flex items-center justify-between gap-2 rounded-xl border border-navy-100 px-4 py-2.5 text-xs font-semibold text-navy transition hover:border-electric hover:text-electric"
        >
          {open ? "Hide course details" : "Course details & requirements"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        <div id={detailsId} hidden={!open} className="mt-4 space-y-4 border-t border-navy-50 pt-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">What you will learn</h3>
            <ul className="mt-2 space-y-1.5 text-xs text-navy-600">
              {course.modules.map((module) => (
                <li key={module} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" aria-hidden="true" />
                  {module}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">Requirements</h3>
              <ul className="mt-2 space-y-1.5 text-xs text-navy-600">
                {course.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">Outcomes</h3>
              <ul className="mt-2 space-y-1.5 text-xs text-navy-600">
                {course.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="rounded-lg bg-eco-50 px-3 py-2 text-xs font-medium text-eco-800">
            Certificate: {course.certification}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <p className="text-xs text-navy-400">{course.format}</p>
          <button
            type="button"
            onClick={() => onRegister?.(course)}
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-electric"
          >
            Register interest
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
