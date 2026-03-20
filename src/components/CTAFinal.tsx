import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="bg-[var(--navy-deep)] py-28 text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(244,121,32,0.13)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-[1] max-w-[1140px] mx-auto px-7 reveal">
        <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--orange)] mb-3 justify-center">
          <span className="w-5 h-[2px] bg-[var(--orange)] rounded-sm" />
          ¿Listo para empezar?
        </div>
        <h2 className="text-[clamp(2.2rem,4.5vw,3.9rem)] font-extrabold tracking-tight text-white mb-3.5">
          Tu primer pedido a un
          <br />
          <span className="text-[var(--orange)]">mensaje</span> de distancia
        </h2>
        <p className="text-[0.98rem] leading-[1.76] text-[var(--muted)] max-w-[500px] mx-auto mb-11">
          Escribinos por WhatsApp y te contamos cómo incorporar SMG como tu
          proveedor. Sin contratos complicados, sin mínimos difíciles.
        </p>
        <a
          href={whatsappLink(WHATSAPP_MESSAGES.firstOrder)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-[1.04rem] px-10 py-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.32)] transition-all hover:translate-y-[-3px] hover:scale-[1.03] hover:shadow-[0_14px_40px_rgba(37,211,102,0.42)]"
        >
          <WhatsAppIcon className="w-6 h-6 fill-white shrink-0" />
          Pedir por WhatsApp
        </a>
        <p className="text-[0.78rem] text-white/[0.28] mt-4">
          Respondemos en horario comercial · Chamiza, Región de Los Lagos
        </p>
      </div>
    </section>
  );
}
