import { ClipboardList, FileText, Settings, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: ClipboardList, num: "01", title: "Diagnóstico Inicial", desc: "Realizamos un análisis gratuito de tu situación contable y tributaria actual para identificar necesidades, riesgos y oportunidades de mejora." },
  { icon: FileText, num: "02", title: "Propuesta a la Medida", desc: "Diseñamos un plan de trabajo personalizado con alcances, entregables, tiempos y tarifa transparente, ajustado al tamaño y sector de tu empresa." },
  { icon: Settings, num: "03", title: "Ejecución & Acompañamiento", desc: "Nuestro equipo ejecuta el servicio con reportes periódicos, comunicación directa con tu consultor asignado y respuesta ágil a cada consulta." },
  { icon: BarChart3, num: "04", title: "Informes & Resultados", desc: "Entregamos informes detallados, dictámenes y recomendaciones estratégicas para que tomes decisiones con información sólida y confiable." },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-off-white py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground text-center">¿Cómo Trabajamos?</h2>
        <p className="text-steel text-center mt-3">Un proceso claro y transparente desde el primer día</p>
        <div className="section-divider mb-12" />

        <div className={`relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-electric/20">
            <div className={`h-full bg-electric transition-all duration-1000 ${isVisible ? "w-full" : "w-0"}`} />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center space-y-4">
                <div className="relative z-10 mx-auto w-14 h-14 rounded-full bg-electric flex items-center justify-center shadow-lg shadow-electric/20">
                  <s.icon className="size-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-sora font-bold text-electric tracking-widest">PASO {s.num}</span>
                <h3 className="font-sora font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
