const sectors = [
  "Manufactura", "Comercio", "Servicios", "Seguros", "Tecnología",
  "Minero-Energético", "Salud", "Construcción", "Bursátil", "Agroindustria",
];

const TrustBar = () => (
  <section id="sectores" className="bg-off-white py-6 overflow-hidden">
    <div className="container mx-auto px-4 flex items-center gap-6">
      <span className="hidden md:block text-xs font-jakarta font-semibold text-steel uppercase tracking-widest whitespace-nowrap">
        Sectores que Atendemos
      </span>
      <div className="flex-1 overflow-hidden relative">
        <div className="flex animate-marquee gap-6 w-max">
          {[...sectors, ...sectors].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-jakarta text-foreground whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustBar;
