import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm } from "../../hooks/useForm";
import { rules } from "../../utils/validation";
import { demoFormNotice, site } from "../../data/site";
import { formatRWF } from "../../utils/format";
import Button from "../common/Button";
import { Field, Select, TextArea, TextInput } from "../common/FormField";

const VehicleInquiryForm = ({ vehicle }) => {
  const initialValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      intent: "Test drive",
      message: `I am interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model} listed at ${formatRWF(vehicle.price)}. Is it still available?`,
    }),
    [vehicle],
  );

  const formRules = useMemo(
    () => ({
      name: rules.name,
      email: rules.email,
      phone: rules.phone,
      intent: rules.select("what you would like to do"),
      message: rules.shortMessage,
    }),
    [],
  );

  const handleValidSubmit = useCallback(
    (values) => {
      toast.success(
        `Inquiry validated, ${values.name.split(" ")[0]}! In a live deployment our sales team would reply within one working hour. (Demo — nothing was sent.)`,
        { icon: <CheckCircle2 className="h-4 w-4" />, autoClose: 6500 },
      );
    },
    [],
  );

  const { values, errors, submitting, submitted, handleChange, handleBlur, handleSubmit } = useForm({
    initialValues,
    rules: formRules,
    onSubmit: handleValidSubmit,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="inquiry-name" label="Full name" required error={errors.name}>
          <TextInput
            id="inquiry-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
          />
        </Field>

        <Field id="inquiry-email" label="Email address" required error={errors.email}>
          <TextInput
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />
        </Field>

        <Field id="inquiry-phone" label="Phone / WhatsApp" required error={errors.phone}>
          <TextInput
            id="inquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+250 788 000 000"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
          />
        </Field>

        <Field id="inquiry-intent" label="I would like to" required error={errors.intent}>
          <Select
            id="inquiry-intent"
            name="intent"
            value={values.intent}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.intent}
          >
            <option value="Test drive">Book a test drive</option>
            <option value="Battery report">See the full battery report</option>
            <option value="Financing">Ask about financing</option>
            <option value="Trade-in">Discuss a trade-in</option>
            <option value="Availability">Confirm availability</option>
          </Select>
        </Field>
      </div>

      <Field id="inquiry-message" label="Message" required error={errors.message}>
        <TextArea
          id="inquiry-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          icon={submitting ? Loader2 : submitted ? CheckCircle2 : Send}
          iconClassName={submitting ? "animate-spin" : undefined}
        >
          {submitting ? "Sending…" : submitted ? "Inquiry validated" : "Send inquiry"}
        </Button>
        <p className="text-xs text-navy-400">
          Or call{" "}
          <a href={site.phoneHref} className="font-semibold text-electric hover:underline">
            {site.phone}
          </a>
        </p>
      </div>

      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
        {demoFormNotice}
      </p>
    </form>
  );
};

export default VehicleInquiryForm;
