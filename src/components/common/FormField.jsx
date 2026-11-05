import { cn } from "../../utils/cn";

export const Field = ({ id, label, error, hint, required = false, className, children }) => (
  <div className={className}>
    <label htmlFor={id} className="form-label">
      {label}
      {required ? <span className="ml-1 text-electric">*</span> : null}
    </label>
    {children}
    {error ? (
      <p id={`${id}-error`} className="form-error" role="alert">
        {error}
      </p>
    ) : hint ? (
      <p className="mt-1.5 text-xs text-navy-400">{hint}</p>
    ) : null}
  </div>
);

const fieldClasses = (error) =>
  cn("form-input", error && "border-rose-400 focus:border-rose-500 focus:ring-rose-100");

const describedBy = (id, error) => (error ? `${id}-error` : undefined);

export const TextInput = ({ id, error, className, ...props }) => (
  <input
    id={id}
    aria-invalid={Boolean(error)}
    aria-describedby={describedBy(id, error)}
    className={cn(fieldClasses(error), className)}
    {...props}
  />
);

export const TextArea = ({ id, error, className, ...props }) => (
  <textarea
    id={id}
    aria-invalid={Boolean(error)}
    aria-describedby={describedBy(id, error)}
    className={cn(fieldClasses(error), "min-h-[130px] resize-y", className)}
    {...props}
  />
);

export const Select = ({ id, error, className, children, ...props }) => (
  <select
    id={id}
    aria-invalid={Boolean(error)}
    aria-describedby={describedBy(id, error)}
    className={cn(fieldClasses(error), "appearance-none bg-[length:16px] pr-10", className)}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7C8F' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 14px center",
    }}
    {...props}
  >
    {children}
  </select>
);
