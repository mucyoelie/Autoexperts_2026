import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { CalendarDays, CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm } from "../../hooks/useForm";
import { rules, isFutureOrToday } from "../../utils/validation";
import { demoFormNotice, site } from "../../data/site";
import { rentals } from "../../data/rentals";
import { daysBetween, formatRWF, todayISO } from "../../utils/format";
import Button from "../common/Button";
import { Field, Select, TextArea, TextInput } from "../common/FormField";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  vehicle: rentals[0].slug,
  startDate: "",
  endDate: "",
  message: "",
};

const RentalInquiryForm = ({ selectedVehicle }) => {
  const formRules = useMemo(
    () => ({
      name: rules.name,
      email: rules.email,
      phone: rules.phone,
      vehicle: rules.select("a vehicle"),
      startDate: rules.date("a pick-up date"),
      endDate: (value, values) => {
        if (!value) return "Please choose a return date.";
        if (!isFutureOrToday(value)) return "The return date cannot be in the past.";
        if (values.startDate && new Date(value) <= new Date(values.startDate)) {
          return "The return date must be after the pick-up date.";
        }
        return "";
      },
      message: rules.shortMessage,
    }),
    [],
  );

  const handleValidSubmit = useCallback((values) => {
    const rental = rentals.find((item) => item.slug === values.vehicle);
    const days = daysBetween(values.startDate, values.endDate);
    toast.success(
      `${rental?.name ?? "Vehicle"} requested for ${days} day${days === 1 ? "" : "s"} — demo only, no booking was created. Call ${site.phone} to confirm.`,
      { icon: <CheckCircle2 className="h-4 w-4" />, autoClose: 7000 },
    );
  }, []);

  const { values, errors, submitting, submitted, handleChange, handleBlur, handleSubmit, setValues } = useForm({
    initialValues,
    rules: formRules,
    onSubmit: handleValidSubmit,
  });

  useEffect(() => {
    if (selectedVehicle) {
      setValues((prev) => ({ ...prev, vehicle: selectedVehicle }));
    }
  }, [selectedVehicle, setValues]);

  const selectedRental = rentals.find((item) => item.slug === values.vehicle);
  const days = daysBetween(values.startDate, values.endDate);
  const estimate = selectedRental ? selectedRental.dailyPrice * days : 0;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="rental-name" label="Full name" required error={errors.name}>
          <TextInput
            id="rental-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
          />
        </Field>

        <Field id="rental-email" label="Email address" required error={errors.email}>
          <TextInput
            id="rental-email"
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

        <Field id="rental-phone" label="Phone / WhatsApp" required error={errors.phone}>
          <TextInput
            id="rental-phone"
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

        <Field id="rental-vehicle" label="Vehicle" required error={errors.vehicle}>
          <Select
            id="rental-vehicle"
            name="vehicle"
            value={values.vehicle}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.vehicle}
          >
            {rentals.map((rental) => (
              <option key={rental.slug} value={rental.slug}>
                {rental.name} — {formatRWF(rental.dailyPrice)}/day
                {rental.available ? "" : " (waiting list)"}
              </option>
            ))}
          </Select>
        </Field>

        <Field id="rental-start" label="Pick-up date" required error={errors.startDate}>
          <TextInput
            id="rental-start"
            name="startDate"
            type="date"
            min={todayISO()}
            value={values.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.startDate}
          />
        </Field>

        <Field id="rental-end" label="Return date" required error={errors.endDate}>
          <TextInput
            id="rental-end"
            name="endDate"
            type="date"
            min={values.startDate || todayISO()}
            value={values.endDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.endDate}
          />
        </Field>
      </div>

      <Field id="rental-message" label="Anything we should know?" required error={errors.message}>
        <TextArea
          id="rental-message"
          name="message"
          className="min-h-[110px]"
          placeholder="Flight number, delivery address, driver's licence details, child seat…"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
        />
      </Field>

      <div className="rounded-2xl border border-navy-100 bg-mist p-4">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="inline-flex items-center gap-2 font-semibold text-navy">
            <CalendarDays className="h-4 w-4 text-electric" aria-hidden="true" />
            {days > 0 ? `${days} day${days === 1 ? "" : "s"}` : "Select your dates"}
          </span>
          <span className="font-display text-base font-bold text-navy">{days > 0 ? formatRWF(estimate) : "—"}</span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-navy-400">
          Indicative rental total only. Deposit{selectedRental ? ` of ${formatRWF(selectedRental.deposit)}` : ""},
          insurance and final availability are confirmed by our team.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          icon={submitting ? Loader2 : submitted ? CheckCircle2 : Send}
          iconClassName={submitting ? "animate-spin" : undefined}
        >
          {submitting ? "Sending…" : submitted ? "Request validated" : "Request this vehicle"}
        </Button>
        <p className="text-xs text-navy-400">
          Urgent? Call{" "}
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

export default RentalInquiryForm;
