import { Facebook, Linkedin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      {/* Top */}
      <div className="container mx-auto px-4 pt-16 pb-8 text-center space-y-2">
        <div className="flex items-baseline justify-center gap-1">
          <span className="font-sora font-bold text-2xl text-electric">GCC</span>
          <span className="font-sora text-2xl">Consultores</span>
        </div>
        <p className="text-steel text-sm">Inteligencia Financiera para el Crecimiento de tu Empresa</p>
        <div className="w-24 h-0.5 bg-electric mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 pb-12 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-jakarta font-semibold text-sm uppercase tracking-wider mb-4">Navegación</h4>
          <ul className="space-y-2">
            {["Inicio:#inicio", "Nosotros:#nosotros", "Servicios:#servicios", "Industrias:#industrias", "Clientes:#clientes", "FAQ:#faq", "Agendar Consulta:#contacto"].map((l) => {
              const [label, href] = l.split(":");
              return <li key={href}><button onClick={() => scrollTo(href)} className="text-sm text-steel hover:text-electric transition-colors">{label}</button></li>;
            })}
          </ul>
        </div>
        <div>
          <h4 className="font-jakarta font-semibold text-sm uppercase tracking-wider mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-steel">
            {["Outsourcing Contable", "Asesoría Tributaria", "Auditoría Financiera", "Revisoría Fiscal", "Implementación NIIF", "Gestión de Nómina", "Consultoría Financiera"].map((s) => (
              <li key={s}><button onClick={() => scrollTo("#servicios")} className="hover:text-electric transition-colors">{s}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-jakarta font-semibold text-sm uppercase tracking-wider mb-4">Contacto & Redes</h4>
          <div className="space-y-3 text-sm text-steel">
            <a href="https://www.facebook.com/GCCConsultoressas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-electric transition-colors">
              <Facebook className="size-4" /> /GCCConsultoressas
            </a>
            <div className="flex gap-3 mt-3">
              <a href="https://www.facebook.com/GCCConsultoressas/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-navy-light hover:border-electric transition-colors" aria-label="Facebook de GCC Consultores">
                <Facebook className="size-4" />
              </a>
              <a href="#" className="p-2 rounded-full border border-navy-light hover:border-electric transition-colors" aria-label="LinkedIn de GCC Consultores">
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>
          <Button variant="electric" size="default" className="mt-6" onClick={() => scrollTo("#contacto")}>
            <CalendarDays className="size-4" />
            Agendar Consulta Gratis
          </Button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-navy-light/30">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-steel">
          <span>© 2025 GCC Consultores SAS · Colombia · Todos los derechos reservados</span>
          <span>Asesoría Contable | Tributaria | Auditoría | NIIF | Colombia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
