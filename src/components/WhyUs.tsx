import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink, WHATSAPP_MESSAGES, BRANDS } from "@/lib/constants";

export default function WhyUs() {
  const reasons = [
    {
      title: "Entrega directa en tu local",
      text: "Sin que tengas que moverte. El camión llega hasta vos con todo lo que pediste.",
    },
    {
      title: "Productos frescos, control de vencimiento",
      text: "Sistema FEFO: los productos más próximos a vencer salen primero. Calidad garantizada.",
    },
    {
      title: "Facturación electrónica incluida",
      text: "Boleta o factura electrónica en cada venta. Todo en regla con el SII, sin vueltas.",
    },
    {
      title: "Atención directa por WhatsApp",
      text: "Hablás directo con nosotros. Pedido, consulta o reclamo: respondemos en minutos.",
    },
  ];

  return (
    <section id="porque" className="bg-[var(--off-white)] py-24">
      <div className="max-w-[1140px] mx-auto px-7 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Reasons */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--orange)] mb-3">
            <span className="w-5 h-[2px] bg-[var(--orange)] rounded-sm" />
            ¿Por qué elegirnos?
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.9rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--navy)] mb-3">
            Más que un proveedor,
            <br />
            un socio de tu negocio
          </h2>
          <p className="text-[0.96rem] leading-[1.76] text-[var(--muted)]">
            Trabajamos con negocios de todos los tamaños. Tu pedido es
            importante sin importar si sos un almacén de barrio o una cadena de
            kioscos.
          </p>
          <div className="flex flex-col gap-5 mt-9">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-4 items-start reveal">
                <div className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full bg-[var(--orange)] shadow-[0_0_0_4px_rgba(244,121,32,0.15)]" />
                <div>
                  <h4 className="text-[0.96rem] font-bold text-[var(--navy)] mb-0.5">
                    {r.title}
                  </h4>
                  <p className="text-[0.86rem] leading-[1.72] text-[#607080]">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel + Brands */}
        <div className="reveal">
          <div className="bg-[var(--navy)] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(244,121,32,0.2)_0%,transparent_65%)]" />
            <p className="font-[var(--font-instrument)] italic text-[3rem] leading-[1.05] text-[var(--orange)] mb-4 relative z-[1]">
              &ldquo;Bueno,
              <br />
              Rico y
              <br />
              Barato.&rdquo;
            </p>
            <p className="text-[0.91rem] leading-[1.76] text-[var(--muted)] mb-7 relative z-[1]">
              Eso es lo que llevamos a cada ruta. Productos que se venden, a
              precios que te convienen, con la puntualidad que tu negocio
              necesita.
            </p>
            <hr className="border-t border-white/[0.07] mb-6" />
            <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--muted)] mb-3.5 relative z-[1]">
              Nuestras Marcas
            </div>
            <div className="flex flex-wrap gap-2 relative z-[1]">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="text-[0.72rem] font-semibold px-3 py-1.5 rounded-full border border-white/10 text-[var(--muted)] transition-all hover:border-[var(--orange)] hover:text-[var(--orange)]"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-7 relative z-[1]">
              <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--muted)] mb-3.5">
                Contacto directo
              </div>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-[0.96rem] px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.28)] transition-all hover:translate-y-[-2px] hover:scale-[1.03] hover:shadow-[0_10px_32px_rgba(37,211,102,0.38)]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                Escribir ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
