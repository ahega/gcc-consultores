import { Button } from "@/components/ui/button";
import { CalendarDays, FileText, ChevronDown, CheckCircle, BarChart3, TrendingUp, PieChart } from "lucide-react";
import heroConsulting from "@/assets/hero-consulting.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-navy-deep overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--electric-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--electric-blue)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-4 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left */}
        <div className="lg:w-[60%] space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm text-blue-light animate-fade-up" style={{ animationDelay: "0s" }}>
            <BarChart3 className="size-4" />
            Firma Especializada en Colombia
          </div>

          <h1 className="font-sora text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-primary-foreground animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Tu Empresa Merece una{" "}
            <br className="hidden md:block" />
            <span className="text-electric">Gestión Financiera</span>
            <br />
            de Alto Nivel
          </h1>

          <p className="text-lg text-steel max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Asesoría contable, tributaria y consultoría financiera para empresas en Colombia. Un equipo experto que te permite enfocarte en crecer mientras nosotros cuidamos tus números.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <Button variant="electric" size="xl" onClick={() => scrollTo("#contacto")}>
              <CalendarDays className="size-5" />
              Agendar Consulta Gratis
            </Button>
            <Button variant="heroGhost" size="xl" onClick={() => scrollTo("#servicios")}>
              <FileText className="size-5" />
              Ver Nuestros Servicios
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel/80 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-electric" /> +10 Años de experiencia</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-electric" /> Equipo multidisciplinar certificado</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-electric" /> Cobertura nacional en Colombia</span>
          </div>
        </div>

        {/* Right - decorative */}
        <div className="hidden lg:flex lg:w-[40%] justify-center">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-electric/10 rounded-2xl blur-2xl" />
            <div className="relative bg-navy-mid rounded-2xl border border-navy-light/30 p-6 shadow-2xl">
              <img
                src={heroDashboard}
                alt="Panel de gestión financiera corporativa - GCC Consultores"
                className="rounded-lg w-80 h-80 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-navy-light/90 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2 border border-navy-light/50">
                <TrendingUp className="size-4 text-electric" />
                <span className="text-sm text-primary-foreground font-medium">+32% Optimización</span>
              </div>
              <div className="absolute -top-3 -right-3 bg-electric rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                <PieChart className="size-3.5 text-primary-foreground" />
                <span className="text-xs text-primary-foreground font-semibold">NIIF Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#sectores")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel/50 animate-bounce"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
