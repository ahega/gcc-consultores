import { CalendarDays, Building2, Users, FileCheck } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: CalendarDays, value: 10, suffix: "+", label: "Años de Experiencia" },
  { icon: Building2, value: 10, suffix: "+", label: "Sectores Atendidos" },
  { icon: Users, value: 20, suffix: "+", label: "Profesionales Certificados" },
  { icon: FileCheck, value: 100, suffix: "%", label: "Normatividad DIAN Actualizada" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-navy-mid py-16" ref={ref}>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => {
          const count = useCountUp(s.value, 1500, isVisible);
          return (
            <div key={i} className="text-center space-y-2">
              <s.icon className="size-8 text-electric mx-auto" />
              <div className="font-sora font-bold text-4xl md:text-5xl text-electric">
                {count}{s.suffix}
              </div>
              <p className="text-sm text-primary-foreground/70 font-jakarta">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
