import { ArrowLeft, Home, Mail, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../assets";
import { navLinks, site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Button from "../components/common/Button";

const NotFound = () => {
  useDocumentTitle("Page not found");

  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <img
        src={images.chargingStation}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" aria-hidden="true" />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

      <div className="container relative flex min-h-[78vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-7xl font-bold text-white/10 sm:text-9xl">404</p>
        <h1 className="mt-2 text-balance font-display text-3xl text-white sm:text-4xl">
          This route doesn&apos;t charge.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-200 sm:text-base">
          The page you were looking for has moved or never existed. Try the marketplace, our services, or send us a
          message and we will point you in the right direction.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/" icon={Home}>
            Back to home
          </Button>
          <Button to="/vehicles" variant="outline" className="border-white/25 bg-white/5 text-white hover:border-eco hover:text-eco" icon={Search}>
            Browse vehicles
          </Button>
          <Button href={site.emailHref} variant="ghost" className="text-white hover:bg-white/10" icon={Mail}>
            Email us
          </Button>
        </div>

        <div className="mt-12 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-300">Popular pages</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-xs font-medium text-white transition hover:border-eco hover:text-eco"
              >
                <ArrowLeft className="h-3 w-3 rotate-180" aria-hidden="true" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
