import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Para qué tipo de empresas trabajan?", a: "Atendemos empresas de todos los tamaños y sectores: desde microempresas, emprendedores y personas naturales con actividad económica, hasta medianas y grandes compañías en sectores como manufactura, comercio, servicios, tecnología, minero-energético y más." },
  { q: "¿Qué incluye el outsourcing contable?", a: "Incluye la totalidad del proceso contable: registro de operaciones, elaboración de estados financieros, conciliaciones bancarias, informes para entes de control (Cámara de Comercio, Superintendencias, Municipios), cumplimiento tributario y reportes gerenciales periódicos." },
  { q: "¿Cómo garantizan la confidencialidad de mi información financiera?", a: "Trabajamos bajo estrictos protocolos de confidencialidad y seguridad de datos. Todos nuestros profesionales firman acuerdos de no divulgación, y manejamos la información en plataformas seguras y encriptadas." },
  { q: "¿Ofrecen servicios de forma remota?", a: "Sí. Prestamos servicios de manera presencial en nuestras oficinas o en las instalaciones del cliente, y también de forma completamente remota para empresas en cualquier ciudad de Colombia, utilizando herramientas digitales seguras." },
  { q: "¿Trabajan con la reforma tributaria más reciente?", a: "Absolutamente. Nuestro equipo se actualiza permanentemente con cada reforma tributaria, circular DIAN y cambio normativo (incluida la Ley 2277 de 2022 y sus decretos reglamentarios), garantizando que tu empresa esté siempre en pleno cumplimiento legal." },
  { q: "¿Cómo funciona la primera consulta?", a: "La primera consulta es completamente gratuita y sin compromiso. Agendamos una reunión (presencial o virtual) para conocer tu empresa, diagnosticar tu situación actual y presentarte una propuesta de servicio personalizada y transparente." },
  { q: "¿Pueden acompañarnos en procesos de revisión o requerimientos de la DIAN?", a: "Sí. Contamos con especialistas tributarios que atienden requerimientos ordinarios, pliegos de cargos, recursos y procedimientos de fiscalización ante la DIAN y la UGPP, defendiendo siempre los intereses de tu empresa." },
];

const FAQSection = () => (
  <section id="faq" className="bg-navy-deep py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-sora text-3xl md:text-4xl font-bold text-primary-foreground text-center">Preguntas Frecuentes</h2>
      <div className="section-divider mb-12" />

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-off-white rounded-lg border-none px-6 overflow-hidden">
            <AccordionTrigger className="font-jakarta font-semibold text-foreground text-left hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-steel leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
