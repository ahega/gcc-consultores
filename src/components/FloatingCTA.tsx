import { CalendarDays } from "lucide-react";

const FloatingCTA = () => {
  const scrollTo = () => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <button
      onClick={scrollTo}
      className="fixed bottom-6 right-6 z-50 bg-electric text-primary-foreground rounded-full shadow-xl animate-pulse-glow flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 hover:brightness-110 transition-all"
      aria-label="Agendar consulta gratuita"
    >
      <CalendarDays className="size-5" />
      <span className="hidden md:inline font-sora font-semibold text-sm">Consulta Gratis</span>
    </button>
  );
};

export default FloatingCTA;
