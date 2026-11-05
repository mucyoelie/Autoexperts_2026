export const site = {
  name: "AutoExperts Rwanda",
  shortName: "AutoExperts",
  tagline: "Rwanda's electric & hybrid vehicle specialists",
  description:
    "AutoExperts Rwanda is a Kigali-based workshop and dealership dedicated exclusively to electric and hybrid vehicles. We diagnose, repair, refinish, rent, sell and train — all under one roof.",
  founded: 2018,
  phone: "+250 785 569 180",
  phoneHref: "tel:+250785569180",
  whatsappNumber: "250785569180",
  whatsappMessage:
    "Hello AutoExperts Rwanda! I would like to know more about your electric and hybrid vehicle services.",
  email: "auto.experts.rwanda@gmail.com",
  emailHref: "mailto:auto.experts.rwanda@gmail.com",
  address: {
    line1: "Niboyi, Kicukiro",
    line2: "Kigali, Rwanda",
    full: "Niboyi, Kicukiro, Kigali, Rwanda",
  },
  mapQuery: "Niboyi, Kicukiro, Kigali, Rwanda",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Niboyi%2C+Kicukiro%2C+Kigali%2C+Rwanda",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed (WhatsApp support)" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com", handle: "@autoexperts.rw" },
    { label: "LinkedIn", href: "https://linkedin.com", handle: "AutoExperts Rwanda" },
    { label: "Facebook", href: "https://facebook.com", handle: "AutoExperts Rwanda" },
    { label: "YouTube", href: "https://youtube.com", handle: "AutoExperts Rwanda" },
  ],
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Marketplace", to: "/vehicles" },
  { label: "Rentals", to: "/rentals" },
  { label: "Training", to: "/training" },
  { label: "Contact", to: "/contact" },
];

export const demoFormNotice =
  "Demo form: your inquiry is validated in the browser but is not stored or transmitted. Use WhatsApp, phone or email to reach us for real.";
