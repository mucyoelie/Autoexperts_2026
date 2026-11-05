import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "../../data/site";

const items = [
  {
    icon: Phone,
    label: "Call the workshop",
    value: site.phone,
    href: site.phoneHref,
    note: "Mon – Sat, 8:00 – 18:00",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with a technician",
    href: whatsappLink(),
    note: "Fastest response, photos welcome",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.emailHref,
    note: "Quotes and fleet inquiries",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: site.address.full,
    href: site.mapLink,
    note: "Free parking on site",
    external: true,
  },
];

const ContactInfo = ({ compact = false }) => (
  <div className="space-y-6">
    <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-electric/30 hover:shadow-lift"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-50 text-electric transition group-hover:bg-electric group-hover:text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-400">
              {item.label}
            </span>
            <span className="mt-1 text-sm font-semibold text-navy">{item.value}</span>
            <span className="mt-1 text-xs text-navy-400">{item.note}</span>
          </a>
        );
      })}
    </div>

    <div className="rounded-2xl border border-navy-100 bg-mist p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-navy">
        <Clock className="h-4 w-4 text-electric" aria-hidden="true" />
        Opening hours
      </div>
      <dl className="mt-3 space-y-2 text-sm">
        {site.hours.map((slot) => (
          <div key={slot.days} className="flex items-center justify-between gap-4 border-b border-navy-100/70 pb-2 last:border-0 last:pb-0">
            <dt className="text-navy-500">{slot.days}</dt>
            <dd className="text-right font-medium text-navy">{slot.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

export default ContactInfo;
