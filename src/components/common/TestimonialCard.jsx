import { Quote, Star } from "lucide-react";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const TestimonialCard = ({ testimonial }) => (
  <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
    <div className="flex items-center justify-between">
      <div className="flex gap-0.5" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            className={
              index < testimonial.rating ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-navy-200"
            }
          />
        ))}
      </div>
      <Quote className="h-7 w-7 text-navy-100" aria-hidden="true" />
    </div>

    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">“{testimonial.quote}”</blockquote>

    <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-50 pt-5">
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-electric text-sm font-bold text-white"
        aria-hidden="true"
      >
        {initials(testimonial.name)}
      </span>
      <div>
        <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
        <p className="text-xs text-navy-400">
          {testimonial.role} · {testimonial.location}
        </p>
      </div>
    </figcaption>
  </figure>
);

export default TestimonialCard;
