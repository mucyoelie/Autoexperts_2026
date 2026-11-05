import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm } from "../../hooks/useForm";
import { rules } from "../../utils/validation";
import { demoFormNotice, site } from "../../data/site";
import { courses } from "../../data/courses";
import { formatRWF } from "../../utils/format";
import Button from "../common/Button";
import { Field, Select, TextArea, TextInput } from "../common/FormField";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  course: courses[0].slug,
  experience: "",
  message: "",
};

const TrainingRegistrationForm = ({ selectedCourse }) => {
  const formRules = useMemo(
    () => ({
      name: rules.name,
      email: rules.email,
      phone: rules.phone,
      course: rules.select("a course"),
      experience: rules.select("your experience level"),
      message: rules.message,
    }),
    [],
  );

  const handleValidSubmit = useCallback((values) => {
    const course = courses.find((item) => item.slug === values.course);
    toast.success(
      `Registration interest recorded for ${course?.title ?? "your course"} — this demo does not submit data. Our training team would call ${values.phone} within two days.`,
      { icon: <CheckCircle2 className="h-4 w-4" />, autoClose: 7000 },
    );
  }, []);

  const { values, errors, submitting, submitted, handleChange, handleBlur, handleSubmit, setValues } = useForm({
    initialValues,
    rules: formRules,
    onSubmit: handleValidSubmit,
  });

  useEffect(() => {
    if (selectedCourse) {
      setValues((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse, setValues]);

  const course = courses.find((item) => item.slug === values.course);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="training-name" label="Full name" required error={errors.name}>
          <TextInput
            id="training-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
          />
        </Field>

        <Field id="training-email" label="Email address" required error={errors.email}>
          <TextInput
            id="training-email"
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

        <Field id="training-phone" label="Phone / WhatsApp" required error={errors.phone}>
          <TextInput
            id="training-phone"
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

        <Field id="training-experience" label="Experience level" required error={errors.experience}>
          <Select
            id="training-experience"
            name="experience"
            value={values.experience}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.experience}
          >
            <option value="">Select your experience</option>
            <option value="No EV experience">No EV experience (12V only)</option>
            <option value="1-2 years on EVs">1 – 2 years working on EVs</option>
            <option value="3+ years on EVs">3+ years working on EVs</option>
            <option value="Workshop owner">I own or manage a workshop</option>
          </Select>
        </Field>
      </div>

      <Field id="training-course" label="Course" required error={errors.course}>
        <Select
          id="training-course"
          name="course"
          value={values.course}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.course}
        >
          {courses.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title} — {item.duration} — {formatRWF(item.price)}
            </option>
          ))}
        </Select>
      </Field>

      {course ? (
        <div className="grid gap-3 rounded-2xl border border-navy-100 bg-mist p-4 sm:grid-cols-3">
          <div>
            <p className="text-[0.65rem] uppercase tracking-wide text-navy-400">Next intake</p>
            <p className="mt-0.5 text-sm font-semibold text-navy">{course.startDate}</p>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-wide text-navy-400">Schedule</p>
            <p className="mt-0.5 text-sm font-semibold text-navy">{course.format}</p>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-wide text-navy-400">Seats remaining</p>
            <p className="mt-0.5 text-sm font-semibold text-navy">
              {course.seats} of {course.seats}
            </p>
          </div>
        </div>
      ) : null}

      <Field id="training-message" label="Tell us about your background" required error={errors.message}>
        <TextArea
          id="training-message"
          name="message"
          className="min-h-[110px]"
          placeholder="Where do you work now, what tools do you have access to, and what do you want to be able to do after the course?"
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
          {submitting ? "Sending…" : submitted ? "Interest registered" : "Register interest"}
        </Button>
        <p className="text-xs text-navy-400">
          Questions? Call{" "}
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

export default TrainingRegistrationForm;
