import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Check, Send } from "lucide-react";
import { isValidEmail } from "../../utils/validation";
import { cn } from "../../utils/cn";

const Newsletter = ({ light = false, className }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const rules = useMemo(
    () => ({
      email: (value) => {
        if (!value.trim()) return "Please enter your email address.";
        if (!isValidEmail(value)) return "Enter a valid email address.";
        return "";
      },
    }),
    [],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = rules.email(email);
    setError(message);
    if (message) return;

    toast.success("You're on the list! (Demo only — nothing was actually sent.)", {
      icon: <Check className="h-4 w-4" />,
    });
    setSubscribed(true);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full max-w-md", className)} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address for the newsletter
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            value={email}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "newsletter-error" : undefined}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError("");
            }}
            className={cn(
              "w-full rounded-full border px-5 py-3 text-sm transition focus:outline-none focus:ring-4",
              light
                ? "border-white/20 bg-white/10 text-white placeholder:text-navy-200 focus:border-eco focus:ring-eco/20"
                : "border-navy-200 bg-white text-ink placeholder:text-navy-300 focus:border-electric focus:ring-electric/10",
              error && "border-rose-400",
            )}
          />
        </div>
        <button
          type="submit"
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
            light
              ? "bg-eco text-white hover:bg-eco-600"
              : "bg-navy text-white hover:bg-navy-700",
          )}
        >
          {subscribed ? <Check className="h-4 w-4" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      {error ? (
        <p id="newsletter-error" className={cn("mt-2 text-xs font-medium", light ? "text-rose-300" : "text-rose-600")}>
          {error}
        </p>
      ) : (
        <p className={cn("mt-2 text-xs", light ? "text-navy-300" : "text-navy-400")}>
          Monthly EV insights for Rwanda. Demo form — no data is stored.
        </p>
      )}
    </form>
  );
};

export default Newsletter;
