export default function Pillars() {
  const pillars = [
    {
      icon: "🍬",
      title: "Variedad garantizada",
      text: "Golosinas, chocolates, chicles, caramelos, snacks y más. Surtido pensado para que tu local siempre tenga lo que tus clientes buscan.",
    },
    {
      icon: "🚐",
      title: "Autoventa en ruta",
      text: "Llegamos directamente a tu puerta. Rutas regulares en Chamiza y la región para que nunca te falte mercadería en el momento justo.",
    },
    {
      icon: "💲",
      title: "Precios competitivos",
      text: "Bueno, rico y barato no es solo un slogan. Trabajamos con márgenes reales para que tu negocio gane y tus clientes vuelvan.",
    },
  ];

  return (
    <section id="nosotros" className="bg-[var(--off-white)] py-24">
      <div className="max-w-[1140px] mx-auto px-7">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--orange)] mb-3 justify-center">
            <span className="w-5 h-[2px] bg-[var(--orange)] rounded-sm" />
            ¿Qué ofrecemos?
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.9rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--navy)] mb-3">
            El sabor que llega a tu negocio
          </h2>
          <p className="text-[0.96rem] leading-[1.76] text-[var(--muted)] max-w-[550px] mx-auto">
            Autoventa directa. Sin intermediarios, con productos frescos y
            precios que convienen desde el primer pedido.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group bg-white border-[1.5px] border-[var(--slate)] rounded-[20px] p-10 relative overflow-hidden transition-all duration-300 hover:border-[rgba(244,121,32,0.38)] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(28,43,58,0.1)] reveal"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--orange)] scale-x-0 origin-left transition-transform duration-350 group-hover:scale-x-100" />
              <div className="w-[54px] h-[54px] rounded-[13px] bg-[rgba(244,121,32,0.08)] flex items-center justify-center text-[1.55rem] mb-5">
                {p.icon}
              </div>
              <h3 className="text-[1.12rem] font-bold text-[var(--navy)] mb-2">
                {p.title}
              </h3>
              <p className="text-[0.88rem] leading-[1.76] text-[#607080]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
