import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navLinks, site, whatsappLink } from "../../data/site";
import { services } from "../../data/services";
import Logo from "../common/Logo";
import Newsletter from "../common/Newsletter";
import SocialIcon from "../common/SocialIcon";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-electric/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative border-b border-white/10">
        <div className="container flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
              EV intelligence, once a month.
            </h2>
            <p className="mt-2 text-sm text-navy-300">
              New arrivals, battery care tips and training dates for Rwanda's electric transition.
            </p>
          </div>
          <Newsletter light />
        </div>
      </div>

      <div className="relative container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-300">
            Kigali's specialist workshop, dealership and training centre for electric and hybrid vehicles. Since{" "}
            {site.founded}, we have kept {`Rwanda's`} EV fleet safely on the road.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${social.label}`}
                title={social.handle}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-200 transition hover:border-eco hover:bg-eco/10 hover:text-eco"
              >
                <SocialIcon name={social.label} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer services">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-block text-navy-300 transition hover:translate-x-0.5 hover:text-eco"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer pages">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-block text-navy-300 transition hover:translate-x-0.5 hover:text-eco"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/vehicles" className="inline-block text-navy-300 transition hover:text-eco">
                Buy a vehicle
              </Link>
            </li>
            <li>
              <Link to="/rentals" className="inline-block text-navy-300 transition hover:text-eco">
                Rent a vehicle
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Visit us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
              <span className="text-navy-300">
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 text-navy-300 transition hover:text-eco">
                <Phone className="h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-3 text-navy-300 transition hover:text-eco">
                <Mail className="h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-navy-300 transition hover:text-eco"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-eco" aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
              <span className="text-navy-300">
                {site.hours.map((slot) => (
                  <span key={slot.days} className="block">
                    {slot.days}: {slot.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved. Demo website — content is illustrative.
          </p>
          <p className="text-navy-500">
            Photos: Wikimedia Commons contributors · Built with React, Tailwind CSS &amp; Lucide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
