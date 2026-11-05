import { Zap } from "lucide-react";

const PageLoader = ({ label = "Charging up the page…" }) => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-white px-6 py-24" role="status" aria-live="polite">
    <div className="relative flex h-20 w-20 items-center justify-center">
      <span className="absolute inset-0 rounded-2xl bg-electric/10" aria-hidden="true" />
      <span
        className="absolute inset-0 animate-ping rounded-2xl border border-electric/30"
        aria-hidden="true"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-eco shadow-lift">
        <Zap className="h-6 w-6" aria-hidden="true" />
      </span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-navy">{label}</p>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-navy-100" aria-hidden="true">
        <div className="h-full w-1/2 animate-[fadeUp_1.4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-electric to-eco" />
      </div>
    </div>
  </div>
);

export default PageLoader;
