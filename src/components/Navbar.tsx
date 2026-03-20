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
      </div>
    </nav>
  );
}
