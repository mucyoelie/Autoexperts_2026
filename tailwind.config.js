/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F33",
          50: "#F1F5F9",
          100: "#E2E9F1",
          200: "#B9C7D6",
          300: "#8399B0",
          400: "#4C6580",
          500: "#274461",
          600: "#16324C",
          700: "#0F2639",
          800: "#0B1F33",
          900: "#071523",
          950: "#040D16",
        },
        electric: {
          DEFAULT: "#007BFF",
          50: "#E7F2FF",
          100: "#CFE6FF",
          200: "#9FCFFF",
          300: "#6FB6FF",
          400: "#3F9DFF",
          500: "#007BFF",
          600: "#0067D6",
          700: "#0052AD",
          800: "#003E84",
          900: "#002A5B",
        },
        eco: {
          DEFAULT: "#00C853",
          50: "#E6FAEE",
          100: "#C6F4D9",
          200: "#8BE9B3",
          300: "#50DE8D",
          400: "#22D26F",
          500: "#00C853",
          600: "#00A344",
          700: "#007F35",
          800: "#005B26",
          900: "#003817",
        },
        mist: "#F4F7FA",
        ink: "#263238",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,31,51,0.04), 0 12px 32px -12px rgba(11,31,51,0.14)",
        lift: "0 24px 60px -24px rgba(11,31,51,0.35)",
        glow: "0 18px 45px -18px rgba(0,123,255,0.55)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
