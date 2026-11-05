import { images } from "../assets";

export const courses = [
  {
    id: "course-001",
    slug: "ev-fundamentals-safety",
    title: "EV Fundamentals & High-Voltage Safety",
    level: "Level 1 · Foundation",
    duration: "2 weeks",
    format: "Evenings & Saturdays",
    price: 120000,
    seats: 12,
    startDate: "12 January 2027",
    image: images.trainingThree,
    summary:
      "Start safely: how electric drivetrains work, how to isolate a high-voltage system and how to talk to customers about EV ownership.",
    description:
      "Designed for mechanics with 12V experience and no EV background. You will learn the architecture of a battery electric vehicle, safe isolation procedures, PPE and lock-out/tag-out, and the diagnostic mindset that replaces engine fault-finding.",
    modules: [
      "EV vs hybrid vs plug-in hybrid architectures",
      "High-voltage safety, PPE and isolation",
      "Battery, inverter and motor overview",
      "Reading EV fault codes and live data",
      "Charging modes and connector standards",
      "Customer communication and handover",
    ],
    requirements: [
      "At least 1 year of workshop experience",
      "Basic electrical (12V) knowledge",
      "Own multimeter recommended",
    ],
    outcomes: [
      "Safely de-energise a high-voltage system",
      "Perform a basic EV health check",
      "Explain charging options to a customer",
    ],
    certification: "AutoExperts High-Voltage Safety Card (Level 1)",
  },
  {
    id: "course-002",
    slug: "hybrid-maintenance",
    title: "Hybrid Vehicle Maintenance",
    level: "Level 2 · Intermediate",
    duration: "3 weeks",
    format: "Weekdays, 9:00 – 13:00",
    price: 180000,
    seats: 10,
    startDate: "2 February 2027",
    image: images.trainingTwo,
    summary:
      "Service and repair series-parallel hybrid systems with confidence — transaxles, inverters, cooling circuits and regenerative brakes.",
    description:
      "Hybrids are the fastest-growing segment of Rwanda's imported fleet. This course covers Toyota, Honda and Hyundai/Kia hybrid architectures, with live vehicles on the bench for every module.",
    modules: [
      "Power-split and parallel hybrid transmissions",
      "Hybrid battery service and cooling",
      "Inverter and motor-generator testing",
      "Regenerative brake systems",
      "Hybrid-specific service intervals",
      "Road testing and NVH diagnosis",
    ],
    requirements: [
      "Level 1 certificate or equivalent experience",
      "Workshop safety induction",
    ],
    outcomes: [
      "Diagnose common hybrid drivetrain faults",
      "Service hybrid cooling and battery systems",
      "Complete a hybrid pre-purchase inspection",
    ],
    certification: "AutoExperts Hybrid Systems Certificate (Level 2)",
  },
  {
    id: "course-003",
    slug: "ev-battery-diagnostics",
    title: "EV Battery Systems & Diagnostics",
    level: "Level 3 · Advanced",
    duration: "4 weeks",
    format: "Weekdays, 14:00 – 18:00",
    price: 260000,
    seats: 8,
    startDate: "9 March 2027",
    image: images.batteryTwo,
    summary:
      "The highest-value skill in the market: measure, interpret and service high-voltage battery packs safely.",
    description:
      "Work with real battery modules, a cell analyser and manufacturer diagnostic software. You will produce a full state-of-health report, balance cells, replace modules and advise customers on pack repair versus replacement.",
    modules: [
      "Li-ion cell chemistry and degradation",
      "BMS architecture and live data analysis",
      "State of health and state of charge testing",
      "Insulation resistance and isolation faults",
      "Module replacement and pack balancing",
      "Thermal management and fire safety",
    ],
    requirements: [
      "Level 2 certificate or 2+ years EV workshop experience",
      "High-voltage safety card",
    ],
    outcomes: [
      "Produce a professional battery health report",
      "Trace and repair isolation faults",
      "Safely replace battery modules",
    ],
    certification: "AutoExperts Battery Diagnostics Certificate (Level 3)",
  },
  {
    id: "course-004",
    slug: "electric-motor-drivetrain",
    title: "Electric Motor & Drivetrain Systems",
    level: "Level 3 · Advanced",
    duration: "3 weeks",
    format: "Weekdays, 9:00 – 13:00",
    price: 240000,
    seats: 8,
    startDate: "6 April 2027",
    image: images.mechanicThree,
    summary:
      "Motor, inverter and reduction-gear work for the technicians who want to be the go-to specialist in their region.",
    description:
      "Covers permanent-magnet and induction motors, inverter operation, resolver faults, reduction gear servicing and drivetrain NVH. Includes bench testing of motors and inverters with our training rig.",
    modules: [
      "Motor types and torque control",
      "Inverter and power electronics",
      "Resolver and position sensor faults",
      "Reduction gear strip and rebuild",
      "Coolant circuits and thermal faults",
      "Drivetrain NVH and road testing",
    ],
    requirements: [
      "Level 2 certificate or equivalent experience",
      "High-voltage safety card",
    ],
    outcomes: [
      "Bench test motors and inverters",
      "Diagnose drivetrain noise and vibration",
      "Rebuild a reduction gear unit",
    ],
    certification: "AutoExperts Drivetrain Certificate (Level 3)",
  },
];

export const trainingBenefits = [
  {
    icon: "ShieldCheck",
    title: "Safety first, always",
    body: "Insulated tools, PPE and live-pack protocols taught on real hardware — not slides.",
  },
  {
    icon: "Users",
    title: "Small cohorts",
    body: "Maximum 12 trainees per class so every person gets hands-on time with the equipment.",
  },
  {
    icon: "Wrench",
    title: "60% practical",
    body: "Live vehicles, battery modules, motors and chargers on the workshop floor.",
  },
  {
    icon: "Award",
    title: "Recognised certificate",
    body: "Graduate with a competency certificate and a high-voltage safety card employers ask for.",
  },
  {
    icon: "Briefcase",
    title: "Placement support",
    body: "Top graduates are introduced to our partner workshops and fleet operators.",
  },
  {
    icon: "CalendarClock",
    title: "Flexible schedules",
    body: "Evening and Saturday cohorts for mechanics who are already working.",
  },
];

export const getCourseBySlug = (slug) => courses.find((course) => course.slug === slug);
