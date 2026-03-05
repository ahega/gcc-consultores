import { Factory, ShoppingCart, Briefcase, Shield, TrendingUp, Pickaxe, Monitor, HeartPulse, HardHat, Wheat } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { icon: Factory, name: "Manufactura", note: "Costos industriales y activos fijos" },
  { icon: ShoppingCart, name: "Comercio", note: "Inventarios y tributación comercial" },
  { icon: Briefcase, name: "Servicios", note: "BPO contable y facturación electrónica" },
  { icon: Shield, name: "Seguros", note: "Regulación Superseguros y reservas técnicas" },
  { icon: TrendingUp, name: "Bursátil", note: "Inversiones y normativa financiera" },
  { icon: Pickaxe, name: "Minero-Energético", note: "Regalías y EITI Colombia" },
  { icon: Monitor, name: "Tecnología", note: "SaaS, activos intangibles y I+D+i" },
  { icon: HeartPulse, name: "Salud", note: "Normativa IPS/EPS y glosas" },
  { icon: HardHat, name: "Construcción", note: "POC y activos inmobiliarios" },
  { icon: Wheat, name: "Agroindustria", note: "Incentivos y política agropecuaria" },
];

const IndustriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="industrias" className="bg-navy-deep py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-primary-foreground text-center">Industrias que Atendemos</h2>
        <p className="text-steel text-center mt-3">Experiencia sectorial que marca la diferencia</p>
        <div className="section-divider mb-12" />

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {industries.map((ind, i) => (
            <div
              key={i}
              className="bg-navy-mid rounded-xl p-5 border border-navy-light/20 hover:border-electric/40 transition-all text-center space-y-2 group hover:-translate-y-1 duration-300"
            >
              <ind.icon className="size-8 text-electric mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-sora font-semibold text-sm text-primary-foreground">{ind.name}</h3>
              <p className="text-xs text-steel">{ind.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
