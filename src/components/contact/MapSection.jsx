import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { site } from "../../data/site";

const MapSection = () => (
  <section aria-labelledby="map-heading" className="section-padding bg-mist">
    <div className="container">
      <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
        <div className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-center gap-4 p-7 sm:p-9 lg:col-span-4">
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Find us
            </span>
            <h2 id="map-heading" className="text-2xl sm:text-3xl">
              Remera, Kigali
            </h2>
            <p className="text-sm leading-relaxed text-ink/70">
              {site.address.full}. We are five minutes from Kigali International Airport, on the KG 11 Avenue service
              road with parking for eight vehicles and a dedicated EV charging bay.
            </p>
            <ul className="space-y-2 text-sm text-navy-600">
              <li className="flex items-start gap-2">
                <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                Free on-site parking and charging while you wait
              </li>
              <li className="flex items-start gap-2">
                <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                Airport pickup for rental handovers
              </li>
            </ul>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-2 w-fit text-sm"
            >
              Open in Google Maps
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative min-h-[320px] lg:col-span-8">
            <iframe
              title={`Map showing ${site.name} in ${site.address.full}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
