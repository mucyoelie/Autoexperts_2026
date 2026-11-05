import { useCallback, useState } from "react";
import { validateValues } from "../utils/validation";

/**
 * Small form engine shared by every form on the site.
 * Validation runs on blur and on submit; the submit handler is only called when valid.
 */
export const useForm = ({ initialValues, rules, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
  }, []);

  const handleBlur = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (!rules?.[name]) return;
      const message = rules[name](value, values);
      setErrors((prev) => ({ ...prev, [name]: message }));
    },
    [rules, values],
  );

  const validate = useCallback(() => {
    const nextErrors = validateValues(values, rules ?? {});
    setErrors(nextErrors);
    requestAnimationFrame(() => {
      const firstInvalid = document.querySelector('[aria-invalid="true"]');
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
    });
    return Object.keys(nextErrors).length === 0;
  }, [values, rules]);

  const handleSubmit = useCallback(
    async (event) => {
      event?.preventDefault?.();
      const valid = validate();
      if (!valid) return false;

      setSubmitting(true);
      // Simulated network latency so the UI shows a realistic pending state.
      await new Promise((resolve) => setTimeout(resolve, 700));
      onSubmit?.(values);
      setSubmitting(false);
      setSubmitted(true);
      return true;
    },
    [validate, onSubmit, values],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  }, [initialValues]);

  return {
    values,
    errors,
    submitting,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  };
};

export default useForm;
