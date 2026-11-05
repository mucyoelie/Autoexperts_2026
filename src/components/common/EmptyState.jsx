import { SearchX } from "lucide-react";
import Button from "./Button";

const EmptyState = ({ title, description, actionLabel, onAction }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-navy-200 bg-mist px-6 py-16 text-center">
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy-300 shadow-card">
      <SearchX className="h-6 w-6" aria-hidden="true" />
    </span>
    <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
    <p className="mt-2 max-w-md text-sm text-ink/70">{description}</p>
    {onAction ? (
      <Button variant="outline" size="sm" className="mt-6" onClick={onAction}>
        {actionLabel}
      </Button>
    ) : null}
  </div>
);

export default EmptyState;
