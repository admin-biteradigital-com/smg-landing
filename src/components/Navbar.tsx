"use client";

import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(17,29,40,0.97)] backdrop-blur-[14px] border-b border-[rgba(244,121,32,0.22)]">
      <div className="max-w-[1140px] mx-auto px-7 flex items-center justify-between h-16">
        <Image
          src="/assets/portada.png"
          alt="SMG Distribuciones"
          width={120}
          height={34}
          className="h-[34px] w-auto brightness-0 invert"
          priority
        />
        <a
          href={whatsappLink(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-[0.82rem] tracking-wide px-5 py-2.5 rounded-full transition-all hover:scale-[1.04] hover:shadow-[0_4px_18px_rgba(37,211,102,0.32)] whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
          <span className="max-[480px]:hidden">Escribinos</span>
        </a>
      </div>
    </nav>
  );
}
