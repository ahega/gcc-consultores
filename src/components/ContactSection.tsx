import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Globe, Clock, CheckCircle, Lock, Loader2 } from "lucide-react";

const servicios = [
  "Outsourcing Contable", "Asesoría Tributaria", "Auditoría Financiera",
  "Revisoría Fiscal", "Implementación NIIF", "Gestión de Nómina",
  "Consultoría Financiera", "Constitución de Empresa", "Otro",
];

const tamanos = [
  "Persona natural / Freelance", "Microempresa (1–10 empleados)",
  "Pequeña empresa (11–50 empleados)", "Mediana empresa (51–200 empleados)",
  "Gran empresa (200+ empleados)",
];

const sectoresEcon = [
  "Manufactura", "Comercio", "Servicios", "Tecnología", "Salud",
  "Construcción", "Minero-Energético", "Seguros", "Agroindustria", "Otro",
];

const fuentes = ["Facebook", "Google", "Recomendación", "LinkedIn", "Otro"];

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: "", cargo: "", empresa: "", telefono: "", email: "",
    tamano: "", serviciosInteres: [] as string[], sector: "",
    desafio: "", fuente: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (field: string, value: string) => {
    const e: Record<string, string> = {};
    if (field === "nombre" && !value.trim()) e.nombre = "Nombre requerido";
    if (field === "empresa" && !value.trim()) e.empresa = "Empresa requerida";
    if (field === "telefono" && !value.trim()) e.telefono = "Teléfono requerido";
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) e.email = "Email inválido";
    setErrors((prev) => ({ ...prev, ...e, ...(Object.keys(e).length === 0 ? { [field]: "" } : {}) }));
  };

  const handleChange = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const toggleServicio = (s: string) => {
    setForm((p) => ({
      ...p,
      serviciosInteres: p.serviciosInteres.includes(s)
        ? p.serviciosInteres.filter((x) => x !== s)
        : [...p.serviciosInteres, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = { nombre: form.nombre, empresa: form.empresa, telefono: form.telefono, email: form.email };
    const newErrors: Record<string, string> = {};
    if (!form.nombre.trim()) newErrors.nombre = "Nombre requerido";
    if (!form.empresa.trim()) newErrors.empresa = "Empresa requerida";
    if (!form.telefono.trim()) newErrors.telefono = "Teléfono requerido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Email inválido";
    if (Object.keys(newErrors).length) { setErrors(newErrors); return; }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <section id="contacto" className="bg-off-white py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-4">
          <CheckCircle className="size-16 text-electric mx-auto" />
          <h2 className="font-sora text-3xl font-bold text-foreground">¡Solicitud Recibida!</h2>
          <p className="text-steel text-lg">Un experto de GCC Consultores te contactará en menos de 24 horas hábiles. ¡Gracias por confiar en nosotros!</p>
        </div>
      </section>
    );
  }

  const inputClass = (field: string) =>
    `w-full rounded-lg border ${errors[field] ? "border-destructive" : "border-border"} bg-card px-4 py-3 text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all`;

  return (
    <section id="contacto" className="bg-off-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground text-center">Agenda Tu Consulta Gratuita</h2>
        <p className="text-steel text-center mt-3">Sin compromiso. Un experto te contactará en menos de 24 horas hábiles.</p>
        <div className="section-divider mb-12" />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left info */}
          <div className="bg-navy-deep rounded-2xl p-8 text-primary-foreground space-y-6 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Facebook className="size-5 text-electric" />
                <span className="text-sm">facebook.com/GCCConsultoressas</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="size-5 text-electric" />
                <span className="text-sm">gccconsultores.com.co</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-electric mt-0.5" />
                <div className="text-sm">
                  <p>Lunes a Viernes 8:00 AM – 6:00 PM</p>
                  <p>Sábados 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-navy-light" />
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm"><CheckCircle className="size-4 text-electric" /> Primera consulta 100% gratuita</div>
              <div className="flex items-center gap-2 text-sm"><CheckCircle className="size-4 text-electric" /> Respuesta en menos de 24 horas</div>
              <div className="flex items-center gap-2 text-sm"><CheckCircle className="size-4 text-electric" /> Propuesta personalizada sin costo</div>
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input className={inputClass("nombre")} placeholder="Nombre completo *" value={form.nombre} onChange={(e) => handleChange("nombre", e.target.value)} onBlur={() => validate("nombre", form.nombre)} />
                {errors.nombre && <p className="text-xs text-destructive mt-1">{errors.nombre}</p>}
              </div>
              <input className={inputClass("")} placeholder="Cargo / Rol" value={form.cargo} onChange={(e) => handleChange("cargo", e.target.value)} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input className={inputClass("empresa")} placeholder="Empresa / Razón Social *" value={form.empresa} onChange={(e) => handleChange("empresa", e.target.value)} onBlur={() => validate("empresa", form.empresa)} />
                {errors.empresa && <p className="text-xs text-destructive mt-1">{errors.empresa}</p>}
              </div>
              <div>
                <input className={inputClass("telefono")} placeholder="Teléfono / WhatsApp *" value={form.telefono} onChange={(e) => handleChange("telefono", e.target.value)} onBlur={() => validate("telefono", form.telefono)} />
                {errors.telefono && <p className="text-xs text-destructive mt-1">{errors.telefono}</p>}
              </div>
            </div>
            <div>
              <input className={inputClass("email")} placeholder="Correo electrónico corporativo *" value={form.email} onChange={(e) => handleChange("email", e.target.value)} onBlur={() => validate("email", form.email)} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <select className={inputClass("")} value={form.tamano} onChange={(e) => handleChange("tamano", e.target.value)}>
                <option value="">Tamaño de empresa</option>
                {tamanos.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <select className={inputClass("")} value={form.sector} onChange={(e) => handleChange("sector", e.target.value)}>
                <option value="">Sector económico</option>
                {sectoresEcon.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <p className="text-sm text-steel mb-2">Servicio de interés</p>
              <div className="flex flex-wrap gap-2">
                {servicios.map((s) => (
                  <label key={s} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs cursor-pointer transition-colors ${form.serviciosInteres.includes(s) ? "bg-electric/10 border-electric text-electric" : "border-border text-steel hover:border-steel"}`}>
                    <input type="checkbox" className="sr-only" checked={form.serviciosInteres.includes(s)} onChange={() => toggleServicio(s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <textarea className={inputClass("")} rows={3} placeholder="¿Cuál es tu principal desafío o necesidad?" value={form.desafio} onChange={(e) => handleChange("desafio", e.target.value)} />

            <select className={inputClass("")} value={form.fuente} onChange={(e) => handleChange("fuente", e.target.value)}>
              <option value="">¿Cómo nos conociste?</option>
              {fuentes.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>

            <Button variant="electric" size="xl" className="w-full font-sora" type="submit" disabled={submitting}>
              {submitting ? <Loader2 className="size-5 animate-spin" /> : "Agendar Mi Consulta Gratuita →"}
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-steel">
              <Lock className="size-3" /> Tu información es 100% confidencial. Nunca compartimos tus datos con terceros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
