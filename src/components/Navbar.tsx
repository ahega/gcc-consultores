import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Clientes", href: "#clientes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg border-b border-navy-light/20"
          : "bg-transparent"
      }`}
      aria-label="Navegación principal"
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <button onClick={() => scrollTo("#inicio")} className="flex flex-col items-start" aria-label="Ir al inicio">
          <div className="flex items-baseline gap-0.5">
            <span className="font-sora font-bold text-xl text-electric">GCC</span>
            <span className="font-sora font-normal text-xl text-primary-foreground">Consultores</span>
          </div>
          <span className="text-[10px] text-steel tracking-wider">Consultoría & Asesoría</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-jakarta text-sm text-primary-foreground/80 hover:text-electric transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button variant="electric" size="default" onClick={() => scrollTo("#contacto")}>
            <CalendarDays className="size-4" />
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-navy-deep/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-40">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-jakarta text-xl text-primary-foreground hover:text-electric transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button variant="electric" size="lg" onClick={() => scrollTo("#contacto")}>
            <CalendarDays className="size-5" />
            Agendar Consulta
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
