import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm } from "../../hooks/useForm";
import { rules } from "../../utils/validation";
import { demoFormNotice, site } from "../../data/site";
import { services } from "../../data/services";
import { Field, Select, TextArea, TextInput } from "./FormField";
import Button from "./Button";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const ContactForm = ({ defaultTopic = "" }) => {
  const formRules = useMemo(
    () => ({
      name: rules.name,
      email: rules.email,
      phone: rules.phone,
      topic: rules.select("a service"),
      message: rules.message,
    }),
    [],
  );

  const handleValidSubmit = useCallback(
    (values) => {
      toast.success(
        `Thanks ${values.name.split(" ")[0]}! Your ${values.topic} inquiry was validated locally — this demo does not send messages.`,
        { icon: <CheckCircle2 className="h-4 w-4" />, autoClose: 6000 },
      );
    },
    [],
  );

  const { values, errors, submitting, submitted, handleChange, handleBlur, handleSubmit } = useForm({
    initialValues: { ...initialValues, topic: defaultTopic },
    rules: formRules,
    onSubmit: handleValidSubmit,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Full name" required error={errors.name}>
          <TextInput
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Aline Uwase"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
          />
        </Field>

        <Field id="contact-email" label="Email address" required error={errors.email}>
          <TextInput
            id="contact-email"
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

        <Field id="contact-phone" label="Phone / WhatsApp" required error={errors.phone}>
          <TextInput
            id="contact-phone"
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

        <Field id="contact-topic" label="What do you need?" required error={errors.topic}>
          <Select
            id="contact-topic"
            name="topic"
            value={values.topic}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.topic}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.shortTitle}>
                {service.shortTitle}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </Select>
        </Field>
      </div>

      <Field id="contact-message" label="Message" required error={errors.message}>
        <TextArea
          id="contact-message"
          name="message"
          placeholder="Tell us about your vehicle, the symptoms, or the dates you need…"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={submitting} icon={submitting ? Loader2 : submitted ? CheckCircle2 : Send}>
          {submitting ? "Sending…" : submitted ? "Message validated" : "Send inquiry"}
        </Button>
        <p className="text-xs text-navy-400">
          Prefer to talk?{" "}
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

export default ContactForm;
