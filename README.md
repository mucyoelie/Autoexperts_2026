# AutoExperts Rwanda — Electric & Hybrid Vehicle Website

A complete, responsive frontend website for **AutoExperts Rwanda**, a fictional Kigali-based business that services, sells, rents and trains on electric and hybrid vehicles only.

Built with **React 19**, **Vite**, **Tailwind CSS**, **React Router DOM**, **Lucide React** and **React Toastify**. No backend, database or authentication — all content comes from mock data files, and every form is a validated frontend demonstration.

---

## Quick start

```bash
npm install
npm run dev
```

Vite prints a local URL (usually <http://localhost:5173>). Open it in your browser.

### Other scripts

| Command           | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload        |
| `npm run build`   | Create an optimised production build in `dist/`     |
| `npm run preview` | Serve the production build locally                  |
| `npm run lint`    | Run Oxlint over the source                          |

**Requirements:** Node.js 20.19+ (or 22.12+) and npm 10+. Tested on Node 24 with npm 11.

---

## Pages and routes

| Route                     | Page                                                                        |
| ------------------------- | --------------------------------------------------------------------------- |
| `/`                       | Home — hero, intro, services, featured EVs & hybrids, why us, process, testimonials, contact |
| `/about`                  | About — story, mission, vision, values, EV focus, commitment to Rwanda       |
| `/services`               | All six services                                                            |
| `/services/:slug`         | Service detail (`car-painting`, `repair-maintenance`, `car-rental`, `car-selling`, `mechanic-training`, `ev-consultation`) |
| `/vehicles`               | Marketplace — search, category, brand, price filters and sorting            |
| `/vehicles/:slug`         | Vehicle detail — gallery, specifications, financing estimate, inquiry form  |
| `/rentals`                | Rental fleet, availability filter and rental inquiry form                   |
| `/training`               | Mechanic training programme, courses, benefits and registration form        |
| `/contact`                | Contact form, details, opening hours, Google Maps embed and FAQs            |
| `*`                       | Branded 404 page                                                            |

`/vehicles?type=electric` and `/vehicles?type=hybrid` are shareable filtered views. `/contact?service=car-painting` pre-selects that service in the contact form.

---

## Features

- **Responsive layout** verified at 390 px, 768 px and 1440 px with no horizontal scrolling.
- **Reusable components** — `Button`, `SectionHeading`, `ServiceCard`, `VehicleCard`, `TestimonialCard`, `Badge`, `PageHero`, `Reveal`, `PageLoader`, `EmptyState`, form primitives, `ContactInfo`, `MapSection`, `FaqAccordion`, newsletter, WhatsApp button.
- **Working marketplace** — live search across brand/model/colour, EV vs hybrid tabs, brand filter, price bands, sorting, result counts, empty state and one-click reset.
- **Validated forms** — contact, vehicle inquiry, rental inquiry (with date logic and live price estimate) and training registration. Errors are announced, focused and cleared as you type; successful submissions raise a toast.
- **Accessibility** — skip link, semantic landmarks, labelled inputs, `aria-invalid`/`aria-describedby`, `aria-expanded` for menus and accordions, keyboard-dismissible mobile menu, visible focus rings and reduced-motion support.
- **Performance** — route-level code splitting, lazy-loaded images, locally bundled imagery (no runtime image CDN) and an optimised production build.
- **Toast feedback** via React Toastify for every form and the newsletter.

### Demo forms (important)

All forms are frontend demonstrations. Submissions are validated in the browser and then discarded — nothing is stored or transmitted anywhere. Each form shows a notice explaining this. Real contact happens through the phone, email and WhatsApp links, which are real `tel:`, `mailto:` and `wa.me` URLs.

---

## Project structure

```
autoexperts-rwanda/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ assets/
│  │  ├─ index.js            # central image registry
│  │  └─ images/             # locally bundled JPGs
│  ├─ components/
│  │  ├─ common/             # Button, cards, headings, forms, loader, badges…
│  │  ├─ contact/            # ContactInfo, MapSection, FaqAccordion
│  │  ├─ home/               # hero and every home-page section
│  │  ├─ layout/             # Navbar, MobileMenu, Footer, Layout
│  │  ├─ rental/             # RentalCard, RentalInquiryForm
│  │  ├─ training/           # CourseCard, TrainingRegistrationForm
│  │  └─ vehicles/           # VehicleFilters, VehicleInquiryForm
│  ├─ data/                  # mock content (site, services, vehicles, rentals, courses, company)
│  ├─ hooks/                 # useForm, useInView, useVehicleFilters, useDocumentTitle
│  ├─ pages/                 # one component per route
│  ├─ routes/AppRoutes.jsx   # lazy-loaded route table
│  ├─ utils/                 # formatting, validation, classnames
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

### Where to edit content

| What                                  | File                          |
| ------------------------------------- | ----------------------------- |
| Phone, email, address, hours, socials  | `src/data/site.js`            |
| Six services (copy, pricing, process)  | `src/data/services.js`        |
| Vehicle stock (EV & hybrid listings)   | `src/data/vehicles.js`        |
| Rental fleet and rates                 | `src/data/rentals.js`         |
| Training courses and benefits          | `src/data/courses.js`         |
| Values, process, stats, testimonials, FAQs | `src/data/company.js`     |
| Brand colours and fonts                | `tailwind.config.js`, `src/index.css` |

---

## Design system

| Token             | Value     | Tailwind class        |
| ----------------- | --------- | --------------------- |
| Deep navy         | `#0B1F33` | `bg-navy` / `text-navy` |
| Electric blue     | `#007BFF` | `electric`            |
| Electric green    | `#00C853` | `eco`                 |
| Light background  | `#F4F7FA` | `mist`                |
| Body text         | `#263238` | `ink`                 |

Typography: **Sora** for headings, **Inter** for body copy (loaded from Google Fonts with system fallbacks).

---

## Deployment

Any static host works. Build first:

```bash
npm run build
```

Upload the contents of `dist/`. Because the site uses `BrowserRouter`, configure the host to rewrite unknown paths to `index.html` (SPA fallback). Examples:

- **Netlify** — add `public/_redirects` containing `/* /index.html 200`
- **Vercel** — framework preset “Vite”, automatic SPA fallback
- **Nginx** — `try_files $uri /index.html;`

If your host cannot do SPA rewrites, switch `BrowserRouter` to `HashRouter` in `src/App.jsx`.

---

## Credits

- Vehicle and workshop photography is bundled locally and sourced from **Wikimedia Commons** under Creative Commons licences (various authors). Replace with your own brand photography before commercial launch.
- Icons: [Lucide](https://lucide.dev). Toasts: [React Toastify](https://fkhadra.github.io/react-toastify/).
- Company details, prices, testimonials and stock are fictional sample data.

---

## Scope

This is a frontend-only deliverable: no API, database, authentication, payment or persistence layer is included, by design.
