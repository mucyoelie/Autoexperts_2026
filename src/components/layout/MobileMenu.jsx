import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, X } from "lucide-react";
import { navLinks, site, whatsappLink } from "../../data/site";
import { cn } from "../../utils/cn";
import Button from "../common/Button";

const MobileMenu = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy-400">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 text-navy transition hover:bg-navy-100"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between border-b border-navy-50 py-3.5 text-base font-medium transition-colors",
                  isActive ? "text-electric" : "text-navy hover:text-electric",
                )
              }
            >
              {link.label}
              <ArrowRight className="h-4 w-4 opacity-40" aria-hidden="true" />
            </NavLink>
          ))}
        </nav>

        <div className="px-5 pb-4">
          <Button to="/contact" onClick={onClose} fullWidth iconRight={ArrowRight}>
            Book a service
          </Button>
        </div>

        <div className="mt-auto space-y-3 border-t border-navy-100 bg-mist px-5 py-5 text-sm">
          <a href={site.phoneHref} className="flex items-center gap-3 text-navy hover:text-electric">
            <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
            {site.phone}
          </a>
          <a href={site.emailHref} className="flex items-center gap-3 text-navy hover:text-electric">
            <Mail className="h-4 w-4 text-electric" aria-hidden="true" />
            {site.email}
          </a>
          <p className="flex items-start gap-3 text-navy">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
            {site.address.full}
          </p>
          <p className="flex items-start gap-3 text-navy">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
            Mon – Fri 8:00 – 18:00 · Sat 9:00 – 16:00
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-eco-700 hover:text-eco"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <Link
            to="/vehicles"
            onClick={onClose}
            className="block pt-2 text-xs font-medium text-navy-400 underline-offset-2 hover:underline"
          >
            Looking for a car? Browse the marketplace →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
