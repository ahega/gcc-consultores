import { Target, RefreshCw, Wrench, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Target, title: "Consultor Dedicado", desc: "Cada cliente tiene un profesional asignado que conoce su negocio en profundidad." },
  { icon: RefreshCw, title: "Actualización Permanente", desc: "Equipo al día con reformas tributarias, circulares DIAN y normatividad vigente." },
  { icon: Wrench, title: "Soluciones a la Medida", desc: "Diseñamos procedimientos centrados en los objetivos específicos de tu empresa." },
  { icon: Globe, title: "Cobertura Nacional", desc: "Atendemos empresas en todo el territorio colombiano de forma presencial y remota." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="bg-off-white py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground text-center">¿Quiénes Somos?</h2>
        <div className="section-divider mb-12" />

        <div className={`grid lg:grid-cols-2 gap-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Left */}
          <div className="space-y-6">
            <blockquote className="font-sora text-xl md:text-2xl italic text-navy-deep leading-relaxed border-l-4 border-electric pl-6">
              "Somos tu aliado estratégico para que tus decisiones empresariales se basen en información financiera confiable, oportuna y precisa."
            </blockquote>
            <p className="text-steel leading-relaxed">
              GCC Consultores SAS es una firma colombiana de Contadores Públicos Titulados, Especialistas Tributarios, Abogados y Consultores Financieros. Prestamos servicios profesionales integrales en contaduría pública, asesoría tributaria y consultoría empresarial para organizaciones de todos los sectores y tamaños en Colombia.
            </p>
            <p className="text-steel leading-relaxed">
              Nuestro enfoque va más allá del simple registro contable: somos aliados estratégicos que generan valor real, optimizan la carga tributaria y fortalecen los controles internos de cada empresa.
            </p>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="bg-card rounded-lg p-5 border border-border hover:border-electric/30 transition-colors space-y-3">
                <v.icon className="size-8 text-electric" />
                <h3 className="font-sora font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-steel">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
