import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573175507313?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white rounded-full shadow-xl flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 hover:brightness-110 transition-all animate-pulse-glow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="size-5" />
      <span className="hidden md:inline font-sora font-semibold text-sm">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
