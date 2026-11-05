import { images } from "../assets";

export const services = [
  {
    slug: "car-painting",
    title: "Car Painting & Body Refinishing",
    shortTitle: "Car Painting",
    icon: "Paintbrush",
    tagline: "Showroom-grade finishes, formulated for EV and hybrid body panels",
    summary:
      "Dust-controlled refinishing for electric and hybrid vehicles — from a single scratch to a full colour change, matched to factory paint codes.",
    image: images.painting,
    accent: "electric",
    features: [
      "Full body respray and panel blending",
      "Scratch, dent and paint damage repair",
      "Factory colour matching and custom colours",
      "EV-safe, low-VOC waterborne paint systems",
      "Headlight restoration and trim refurbishing",
    ],
    intro:
      "EV and hybrid bodies are built around lightweight materials, sensor arrays and high-voltage components. Our paint bay is configured for that reality: we mask and isolate high-voltage systems, use low-temperature curing that protects battery packs, and calibrate driver-assistance sensors whenever a bumper or panel is refinished.",
    sections: [
      {
        title: "Body refinishing",
        body: "Panel-by-panel preparation, primer, base coat and clear coat applied in a dust-controlled booth. We blend into adjacent panels so repairs disappear under daylight and showroom lighting.",
      },
      {
        title: "Damage repair",
        body: "Scratches, scuffs, stone chips and minor dents are repaired with aluminium-safe fillers and panel-bonding techniques. We photograph every stage and share progress on WhatsApp.",
      },
      {
        title: "Colour customisation",
        body: "Bring a reference or choose from our curated palette of satin, gloss and two-tone finishes. We test-spray a sample panel so you approve the exact shade before we touch the car.",
      },
    ],
    process: [
      "Free damage assessment and written quote",
      "Colour match and sample panel approval",
      "Preparation, masking and high-voltage isolation",
      "Booth application with controlled curing",
      "Quality inspection, polishing and handover",
    ],
    priceNote: "Panel repairs from RWF 45,000 · Full respray from RWF 650,000",
    duration: "1 – 5 working days",
    ctaLabel: "Request a painting quote",
  },
  {
    slug: "repair-maintenance",
    title: "Repair & Maintenance",
    shortTitle: "Repair & Maintenance",
    icon: "Wrench",
    tagline: "High-voltage certified diagnostics and scheduled servicing",
    summary:
      "Manufacturer-level diagnostics, battery health checks and drivetrain servicing for battery electric and hybrid vehicles.",
    image: images.mechanic,
    accent: "eco",
    features: [
      "EV and hybrid system diagnostics",
      "Battery pack inspection and health reports",
      "Electric motor and drivetrain maintenance",
      "Regenerative brake servicing",
      "Coolant, cabin filter and general servicing",
    ],
    intro:
      "Our technicians are trained on high-voltage safety and work with insulated tools, PPE and lock-out procedures on every job. We read live data from the battery management system, inverter, motor controller and hybrid transaxle, then explain what we found in plain language before any work begins.",
    sections: [
      {
        title: "Diagnostics",
        body: "Multi-brand scan tools read battery state of health, cell balance, insulation resistance and fault history. You receive a written report with the current state of health percentage and recommended actions.",
      },
      {
        title: "Battery system inspection",
        body: "Visual inspection of the pack, cooling circuit and connectors, plus capacity testing and software updates where supported. We flag degradation early, before it becomes an expensive failure.",
      },
      {
        title: "Motor, drivetrain and brakes",
        body: "Reduction gear oil service, motor mount checks, inverter coolant flush and brake caliper servicing — regenerative braking means friction brakes need different attention than on a petrol car.",
      },
    ],
    process: [
      "Book a slot and describe the symptoms",
      "High-voltage safety check and system scan",
      "Written diagnosis with photos and priorities",
      "Approved repair with genuine or OEM-grade parts",
      "Road test, report and next-service reminder",
    ],
    priceNote: "Diagnostic scan from RWF 35,000 · Full service from RWF 120,000",
    duration: "Same day for most services",
    ctaLabel: "Book a service",
  },
  {
    slug: "car-rental",
    title: "Car Rental",
    shortTitle: "Car Rental",
    icon: "KeyRound",
    tagline: "Silent, clean and ready to charge",
    summary:
      "Rent a fully charged electric or hybrid vehicle by the day or week, with charging guidance and roadside support included.",
    image: images.charging,
    accent: "electric",
    features: [
      "Electric and hybrid fleet, fully charged on handover",
      "Daily, weekly and corporate rates",
      "Airport and hotel delivery in Kigali",
      "Charging card and route guidance included",
      "24/7 roadside assistance",
    ],
    intro:
      "Visiting Kigali or need a car while yours is with us? Our rental fleet covers city runabouts and long-distance hybrids. Every handover includes a walkthrough of the charging setup, a charging card where available, and a WhatsApp line to our team.",
    sections: [
      {
        title: "For visitors",
        body: "Airport pickup, a fully charged battery and a short briefing on Kigali charging points. Ideal for consultants, NGO teams and tourists who want a quiet, zero-tailpipe journey.",
      },
      {
        title: "For businesses",
        body: "Monthly corporate rates, consolidated invoicing and driver briefings for sustainability reporting. We can also supply a hybrid for upcountry trips where charging is less dense.",
      },
      {
        title: "Included with every rental",
        body: "Comprehensive insurance, unlimited mileage on weekly rentals, charging cable, phone mount and a 24/7 support number.",
      },
    ],
    process: [
      "Choose a vehicle and dates",
      "Send an inquiry — we confirm availability",
      "Upload licence and ID, sign the agreement",
      "Handover with charging walkthrough",
      "Return, inspection and deposit refund",
    ],
    priceNote: "From RWF 55,000 per day · Weekly discounts available",
    duration: "Minimum 1 day rental",
    ctaLabel: "Check availability",
  },
  {
    slug: "car-selling",
    title: "Vehicle Sales",
    shortTitle: "Car Selling",
    icon: "CarFront",
    tagline: "Inspected EV and hybrid stock, transparently priced",
    summary:
      "Browse curated electric and hybrid vehicles, each with a documented battery health report and a 30-day drivetrain warranty.",
    image: images.chargingForecourt,
    accent: "eco",
    features: [
      "Battery health report on every listing",
      "Trade-in valuation for your current vehicle",
      "Financing introductions with local banks",
      "Registration and insurance support",
      "30-day drivetrain warranty",
    ],
    intro:
      "We only stock vehicles we would put our own families in. Every car passes a 92-point inspection covering battery state of health, charging behaviour, thermal management and structural integrity before it reaches the marketplace.",
    sections: [
      {
        title: "Buy with confidence",
        body: "Each listing shows real mileage, battery capacity, state of health and charging speed. Ask for the full inspection PDF — we share it before you commit.",
      },
      {
        title: "Sell or trade in",
        body: "Bring your EV or hybrid for a free valuation. We handle the paperwork, settle outstanding finance where possible and can list your car on consignment.",
      },
      {
        title: "After-sales",
        body: "Buyers get a discounted first service, priority workshop booking and a 30-day drivetrain warranty.",
      },
    ],
    process: [
      "Browse the marketplace or tell us your brief",
      "Book a viewing and test drive",
      "Review the battery and inspection report",
      "Agree price, financing and trade-in",
      "Handover, registration and warranty",
    ],
    priceNote: "Listings from RWF 21,500,000",
    duration: "Viewings within 24 hours",
    ctaLabel: "Explore vehicles",
  },
  {
    slug: "mechanic-training",
    title: "Training for Mechanics",
    shortTitle: "Mechanic Training",
    icon: "GraduationCap",
    tagline: "Build a career in high-voltage automotive technology",
    summary:
      "Hands-on courses that take working mechanics from 12V systems to safe high-voltage diagnostics, battery service and hybrid repair.",
    image: images.trainingThree,
    accent: "electric",
    features: [
      "Accredited EV and hybrid curriculum",
      "Live vehicles and battery modules in class",
      "High-voltage safety certification",
      "Small groups, maximum 12 trainees",
      "Job placement support for top graduates",
    ],
    intro:
      "Rwanda's workshop floors are changing fast, and too few technicians are trained to work safely on them. Our programme is built with practising EV engineers: 40% classroom theory, 60% hands-on work with live packs, chargers and hybrid transaxles.",
    sections: [
      {
        title: "For working mechanics",
        body: "Evening and Saturday cohorts so you can keep earning while you upskill. Prior 12V experience is expected; no EV experience is required for level 1.",
      },
      {
        title: "For workshops",
        body: "Send a team and we will tailor the syllabus to your fleet — including charging infrastructure troubleshooting and customer explanation skills.",
      },
      {
        title: "Certification",
        body: "Graduates receive an AutoExperts Rwanda competency certificate, a high-voltage safety card and a toolkit checklist to take back to the workshop.",
      },
    ],
    process: [
      "Pick a course and submit the registration inquiry",
      "Short call to confirm your experience level",
      "Confirm your seat and payment plan",
      "Attend theory and hands-on sessions",
      "Assessment, certificate and placement support",
    ],
    priceNote: "Courses from RWF 120,000",
    duration: "2 – 4 weeks per course",
    ctaLabel: "View training courses",
  },
  {
    slug: "ev-consultation",
    title: "EV & Hybrid Consultation",
    shortTitle: "EV Consultation",
    icon: "MessagesSquare",
    tagline: "Independent advice before you spend",
    summary:
      "One-to-one guidance on choosing, charging, insuring and owning an electric or hybrid vehicle in Rwanda.",
    image: images.consultTwo,
    accent: "eco",
    features: [
      "Vehicle shortlisting for your route and budget",
      "Charging plan for home, office or fleet",
      "Total cost of ownership comparison",
      "Battery health second opinions",
      "Fleet electrification roadmaps",
    ],
    intro:
      "Buying an EV in Rwanda raises practical questions: will it handle Kigali hills, where do I charge, what does a replacement pack cost, and how do I explain it to my insurer? We answer those with data rather than sales talk.",
    sections: [
      {
        title: "For private buyers",
        body: "A 60-minute session covering your daily route, charging options, budget and the three vehicles that fit best. You leave with a written shortlist and cost comparison.",
      },
      {
        title: "For fleets and institutions",
        body: "We model charging load, duty cycles and total cost of ownership, then recommend a phased electrification plan with milestones you can budget for.",
      },
      {
        title: "Battery second opinions",
        body: "Buying privately? Bring the car or the scan report and we will independently verify battery health before you pay.",
      },
    ],
    process: [
      "Book a free 20-minute discovery call",
      "Share your routes, budget and charging access",
      "Receive a written recommendation",
      "Follow-up session after you shortlist",
      "Optional ongoing fleet advisory",
    ],
    priceNote: "First consultation free · Fleet studies from RWF 250,000",
    duration: "60 – 90 minutes",
    ctaLabel: "Book a consultation",
  },
];

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);
