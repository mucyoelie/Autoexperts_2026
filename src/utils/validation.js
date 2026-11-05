const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_RE = /^\+?[0-9][0-9\s()-]{7,17}$/;
const NAME_RE = /^[a-z\u00C0-\u024F' -]{2,60}$/i;

export const isRequired = (value) => {
  if (value === undefined || value === null) return false;
  return String(value).trim().length > 0;
};

export const isValidEmail = (value) => EMAIL_RE.test(String(value).trim());

export const isValidPhone = (value) => PHONE_RE.test(String(value).trim());

export const isValidName = (value) => NAME_RE.test(String(value).trim());

export const isFutureOrToday = (value) => {
  if (!value) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(value) >= today;
};

export const minLength = (value, length) => String(value).trim().length >= length;

/**
 * Validate a values object against a rules map.
 * Each rule receives the value and full values object and returns an error string or "".
 */
export const validateValues = (values, rules) => {
  const errors = {};
  Object.entries(rules).forEach(([field, rule]) => {
    const message = rule(values[field], values);
    if (message) errors[field] = message;
  });
  return errors;
};

/** Shared field rules so every form validates the same way. */
export const rules = {
  name: (value) => {
    if (!isRequired(value)) return "Please enter your full name.";
    if (!isValidName(value)) return "Names can only contain letters, spaces, hyphens and apostrophes.";
    return "";
  },
  email: (value) => {
    if (!isRequired(value)) return "Please enter your email address.";
    if (!isValidEmail(value)) return "Enter a valid email, e.g. name@example.com.";
    return "";
  },
  phone: (value) => {
    if (!isRequired(value)) return "Please enter a phone or WhatsApp number.";
    if (!isValidPhone(value)) return "Use digits with an optional country code, e.g. +250 788 123 456.";
    return "";
  },
  message: (value) => {
    if (!isRequired(value)) return "Please tell us a little about what you need.";
    if (!minLength(value, 15)) return "Please add at least 15 characters so we can help properly.";
    return "";
  },
  shortMessage: (value) => {
    if (!isRequired(value)) return "Please add a message.";
    if (!minLength(value, 10)) return "Please add at least 10 characters.";
    return "";
  },
  select: (label) => (value) => (isRequired(value) ? "" : `Please choose ${label}.`),
  date: (label) => (value) => {
    if (!isRequired(value)) return `Please choose ${label}.`;
    if (!isFutureOrToday(value)) return `${label} cannot be in the past.`;
    return "";
  },
};
