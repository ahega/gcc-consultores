import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { text: "GCC Consultores transformó nuestra gestión financiera. Gracias a su asesoría tributaria logramos optimizar significativamente nuestra carga de impuestos y hoy operamos con total tranquilidad ante la DIAN.", name: "Ricardo González", role: "CEO, Empresa de Servicios" },
  { text: "El acompañamiento de GCC en la implementación de NIIF fue clave para la reestructuración de nuestras áreas corporativas. Su equipo es profesional, oportuno y siempre disponible.", name: "Marlene Muñoz", role: "Gerente General, CallMarketing SAS" },
  { text: "Llevamos más de 3 años con GCC como nuestros revisores fiscales. La confianza que genera su trabajo independiente y sus dictámenes nos ha abierto puertas con entidades financieras y socios estratégicos.", name: "Director Financiero", role: "Empresa Sector Comercio, Colombia" },
  { text: "Buscábamos una firma que entendiera las particularidades de nuestro sector. GCC no solo conoce la normatividad, sino que la convierte en una ventaja competitiva real para nuestro negocio.", name: "Gerente Administrativo", role: "Empresa Sector Tecnología" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="clientes" className="bg-off-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground text-center">Lo que Dicen Nuestros Clientes</h2>
        <div className="section-divider mb-12" />

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden">
            <Quote className="absolute top-6 left-6 size-10 text-electric/15" />
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-electric text-electric" />)}
            </div>
            <p className="text-steel text-center text-lg leading-relaxed italic mb-6">
              "{testimonials[current].text}"
            </p>
            <div className="text-center">
              <p className="font-sora font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-steel">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full border border-border hover:border-electric transition-colors" aria-label="Testimonio anterior">
              <ChevronLeft className="size-5 text-steel" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-electric" : "bg-border"}`} aria-label={`Ir al testimonio ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} className="p-2 rounded-full border border-border hover:border-electric transition-colors" aria-label="Siguiente testimonio">
              <ChevronRight className="size-5 text-steel" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
