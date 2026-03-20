"use client";

import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink, WHATSAPP_MESSAGES, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-[var(--navy-deep)] relative overflow-hidden min-h-[94vh] flex flex-col">
      {/* Decorative glow */}
      <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(244,121,32,0.17)_0%,transparent_65%)] pointer-events-none" />
      {/* Dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:32px_32px]" />

      {/* Nature panoramic background overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex-1 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-[60px] max-w-[1140px] mx-auto w-full px-7 py-[70px] md:py-20">
        {/* Text */}
        <div className="text-center md:text-left reveal">
          <div className="inline-flex items-center gap-2.5 text-[0.73rem] font-bold tracking-[0.18em] uppercase text-[var(--orange)] mb-5">
            <span className="w-6 h-[2px] bg-[var(--orange)] rounded-sm" />
            Chamiza · Región de Los Lagos · Chile
          </div>
          <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-extrabold leading-[1.06] tracking-tight text-white mb-2.5 font-[var(--font-sora)]">
            Golosinas que
            <br />
            <span className="text-[var(--orange)] font-[var(--font-instrument)] italic font-normal">
              llegan
            </span>{" "}
            a tu
            <br />
            negocio
          </h1>
          <p className="font-[var(--font-instrument)] italic text-[1.2rem] text-[var(--orange)] opacity-90 mb-5">
            &ldquo;Bueno, Rico y Barato.&rdquo;
          </p>
          <p className="text-[0.96rem] leading-[1.76] text-[var(--muted)] max-w-[455px] mb-10 mx-auto md:mx-0">
            Distribución directa de golosinas y snacks en ruta. Variedad de
            productos, precios competitivos y entrega puntual donde tu negocio
            lo necesita.
          </p>
          <div className="flex gap-3.5 flex-wrap items-center justify-center md:justify-start">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.order)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-[0.96rem] px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.28)] transition-all hover:translate-y-[-2px] hover:scale-[1.03] hover:shadow-[0_10px_32px_rgba(37,211,102,0.38)]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              Pedir por WhatsApp
            </a>
            <a
              href="#productos"
              className="font-semibold text-[0.91rem] text-white/55 border-[1.5px] border-white/[0.14] px-6 py-[13px] rounded-full transition-all hover:border-[var(--orange)] hover:text-[var(--orange)]"
            >
              Ver productos ↓
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="flex justify-center items-center order-first md:order-last reveal">
          <div className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px]">
            {/* Animated rings */}
            <div className="absolute -inset-5 border-[1.5px] border-dashed border-[rgba(244,121,32,0.3)] rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-11 border border-dashed border-[rgba(244,121,32,0.1)] rounded-full animate-[spin_34s_linear_infinite_reverse]" />
            <Image
              src="/assets/perfil.png"
              alt="SMG Distribuciones"
              width={380}
              height={380}
              className="w-full h-full rounded-full object-contain p-5 bg-white/[0.03] border-2 border-[rgba(244,121,32,0.14)] animate-[float_5s_ease-in-out_infinite] drop-shadow-[0_20px_60px_rgba(244,121,32,0.2)]"
              priority
            />
            {/* Pulse dot */}
            <div className="absolute top-7 right-1 w-5 h-5 rounded-full bg-[var(--orange)] shadow-[0_0_0_6px_rgba(244,121,32,0.15)] animate-[pulse-glow_2.6s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-[2] border-t border-white/[0.055]">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1140px] mx-auto px-7">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="py-6 md:border-r md:border-white/[0.055] last:border-r-0 border-b md:border-b-0 border-white/[0.055] last:border-b-0 reveal"
            >
              <div className="text-[1.9rem] font-extrabold text-[var(--orange)] leading-none">
                {stat.value}
              </div>
              <div className="text-[0.76rem] text-[var(--muted)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
