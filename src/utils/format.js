const number = new Intl.NumberFormat("en-US");

/** 42500000 -> "RWF 42,500,000" */
export const formatRWF = (value) => `RWF ${number.format(value)}`;

/** 42500000 -> "RWF 42.5M" (used in tight card spaces) */
export const formatRWFCompact = (value) => {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return `RWF ${Number.isInteger(millions) ? millions : millions.toFixed(1)}M`;
  }
  return formatRWF(value);
};

/** 34500 -> "34,500 km" */
export const formatMileage = (km) => `${number.format(km)} km`;

export const formatBattery = (kwh) => `${kwh} kWh`;

/** "491" (km) -> "491 km"; null -> "Self-charging" */
export const formatRange = (range) => (range ? `${number.format(range)} km` : "Self-charging");

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

/** Days between two ISO dates, inclusive floor of 1. */
export const daysBetween = (start, end) => {
  if (!start || !end) return 0;
  const diff = new Date(end) - new Date(start);
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

export const todayISO = () => new Date().toISOString().split("T")[0];
