import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { navLinks, site } from "../../data/site";
import { cn } from "../../utils/cn";
import Button from "../common/Button";
import Logo from "../common/Logo";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-navy-100 bg-white/90 shadow-[0_10px_30px_-24px_rgba(11,31,51,0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-white",
        )}
      >
        <div className="container flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-electric" : "text-navy-600 hover:text-navy",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-electric to-eco transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-navy-100 px-3.5 py-2 text-sm font-semibold text-navy transition hover:border-electric hover:text-electric xl:inline-flex"
            >
              <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
              {site.phone}
            </a>
            <Button to="/contact" size="sm" className="hidden sm:inline-flex" iconRight={ArrowRight}>
              Book a service
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 text-navy transition hover:border-electric hover:text-electric lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
