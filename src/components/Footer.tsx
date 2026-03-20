import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A1420] py-7 px-7 text-center">
      <Image
        src="/assets/portada.png"
        alt="SMG"
        width={100}
        height={26}
        className="h-[26px] w-auto brightness-0 invert opacity-35 mx-auto mb-2.5"
      />
      <p className="text-[0.76rem] text-white/[0.22]">
        Chamiza, Región de Los Lagos, Chile · © {new Date().getFullYear()} SMG ·
        Todos los derechos reservados
      </p>
      <p className="text-[0.76rem] text-white/[0.22] mt-1.5">
        Desarrollado por{" "}
        <a
          href="https://biteradigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--orange)] opacity-50 hover:opacity-100 transition-opacity"
        >
          Bitera Digital
        </a>
      </p>
    </footer>
  );
}
