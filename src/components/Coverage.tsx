import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink, WHATSAPP_MESSAGES, ZONES } from "@/lib/constants";

export default function Coverage() {
  return (
    <section
      id="cobertura"
      className="bg-white border-t-[3px] border-[var(--orange)] py-20"
    >
      <div className="max-w-[1140px] mx-auto px-7 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="reveal text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--orange)] mb-3">
            <span className="w-5 h-[2px] bg-[var(--orange)] rounded-sm" />
            Zona de servicio
          </div>
          <h2 className="text-[1.85rem] font-extrabold tracking-tight text-[var(--navy)] mb-2.5">
            Región de Los Lagos,
            <br />
            de punta a punta.
          </h2>
          <p className="text-[0.91rem] leading-[1.76] text-[#607080] max-w-[480px] mb-5">
            Salimos desde nuestra base en Chamiza y cubrimos el lago, la ciudad
            y la Carretera Austral. Si tenés un negocio en la región, muy
            probablemente ya estamos pasando por tu puerta.
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {ZONES.map((zone) => (
              <span
                key={zone.name}
                className={`text-[0.79rem] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] transition-all hover:border-[var(--orange)] hover:text-[var(--orange)] ${
                  "highlighted" in zone && zone.highlighted
                    ? "bg-[rgba(244,121,32,0.07)] border-[rgba(244,121,32,0.4)] text-[var(--orange-dk)]"
                    : "bg-[var(--off-white)] border-[var(--slate)] text-[var(--navy)]"
                }`}
              >
                📍 {zone.name}
              </span>
            ))}
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.coverage)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.79rem] font-semibold px-3.5 py-1.5 rounded-full border-[1.5px] border-[var(--orange)] text-[var(--orange)] italic cursor-pointer transition-all hover:bg-[rgba(244,121,32,0.08)]"
            >
              ¿Tu zona no aparece? Consultanos →
            </a>
          </div>
        </div>
        <div className="reveal text-center">
          <p className="text-[0.87rem] text-[#607080] mb-3.5">
            ¿No estás seguro si llegamos?
          </p>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.coverage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-[0.96rem] px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.28)] transition-all hover:translate-y-[-2px] hover:scale-[1.03] hover:shadow-[0_10px_32px_rgba(37,211,102,0.38)]"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
            Consultar cobertura
          </a>
        </div>
      </div>
    </section>
  );
}
