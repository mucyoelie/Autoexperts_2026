import { Star } from "lucide-react";
import { testimonials } from "../../data/company";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../common/TestimonialCard";

const TestimonialsSection = () => (
  <section className="section-padding bg-white">
    <div className="container">
      <SectionHeading
        eyebrow="Customer stories"
        title="Trusted by drivers, fleets and workshops."
        description="Reviews from people who bought, rented, serviced or trained with us in Kigali."
      />

      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-sm font-medium text-navy-600">
          <span className="font-bold text-navy">4.9 / 5</span> average from 380+ reviews
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 70} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
