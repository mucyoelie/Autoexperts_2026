import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "../../data/company";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={faq.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-mist sm:px-6 sm:py-5"
              >
                <span className="text-sm font-semibold text-navy sm:text-base">{faq.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                    open ? "bg-navy text-white" : "bg-mist text-navy"
                  }`}
                >
                  {open ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5 text-sm leading-relaxed text-ink/70 sm:px-6"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
