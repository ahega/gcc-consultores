import { BarChart3, FileText, Search, Scale, Ruler, Users, Briefcase, Building2, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: BarChart3, title: "Outsourcing Contable", desc: "Delegamos el manejo contable integral de tu empresa. Procesamos, supervisamos y entregamos informes con los más altos estándares de calidad y confidencialidad." },
  { icon: FileText, title: "Asesoría & Planeación Tributaria", desc: "Optimización de la carga tributaria, elaboración de declaraciones (renta, IVA, industria y comercio), medios magnéticos e información exógena DIAN." },
  { icon: Search, title: "Auditoría Financiera", desc: "Examen sistemático e independiente de los estados financieros, evaluación del control interno y emisión de dictámenes que generan confianza." },
  { icon: Scale, title: "Revisoría Fiscal", desc: "Ejercemos la función de Revisor Fiscal conforme a la ley colombiana: fiscalización independiente, dictamen de estados financieros y evaluación del cumplimiento normativo." },
  { icon: Ruler, title: "Implementación NIIF", desc: "Acompañamiento completo en convergencia, transición y aplicación de Normas Internacionales de Información Financiera (NIIF/IFRS) para empresas de todos los grupos." },
  { icon: Users, title: "Gestión de Nómina & RR.HH.", desc: "Liquidación de nómina, seguridad social, parafiscales, provisiones contables y cumplimiento laboral. Tranquilidad total en el manejo del recurso humano." },
  { icon: Briefcase, title: "Consultoría Financiera & Gerencial", desc: "Análisis financiero estratégico, valoración de empresas, estructuración de presupuestos, flujos de caja y asesoría para la toma de decisiones directivas." },
  { icon: Building2, title: "Constitución & Formalización Empresarial", desc: "Te acompañamos en la creación formal de tu empresa: trámites ante Cámara de Comercio, DIAN, definición de estructura jurídica óptima y régimen tributario adecuado." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="bg-navy-deep py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-primary-foreground text-center">Nuestros Servicios</h2>
        <p className="text-steel text-center mt-3 max-w-xl mx-auto">Soluciones integrales para la gestión financiera y tributaria de tu empresa</p>
        <div className="section-divider mb-12" />

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-navy-light/40 rounded-xl p-6 border border-navy-light/30 hover:border-electric/50 hover:-translate-y-1 transition-all duration-300 group space-y-4"
            >
              <s.icon className="size-8 text-electric" />
              <h3 className="font-sora font-semibold text-primary-foreground">{s.title}</h3>
              <p className="text-sm text-steel/80 leading-relaxed">{s.desc}</p>
              <a
                href={`https://wa.me/573175507313?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.title)}.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Saber más <ArrowRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
