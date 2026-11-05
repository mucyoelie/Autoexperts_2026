import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/site";

const WhatsAppButton = () => (
  <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 sm:bottom-7 sm:right-7">
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AutoExperts Rwanda on WhatsApp"
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-eco text-white shadow-[0_16px_40px_-12px_rgba(0,200,83,0.8)] transition-transform duration-300 hover:scale-105 focus-visible:ring-4 focus-visible:ring-eco/30"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-eco/30" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  </div>
);

export default WhatsAppButton;
