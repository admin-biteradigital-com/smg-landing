export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)]">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-[0.82rem] font-bold text-white/80">SMG</div>
          <div className="text-[0.72rem] text-[var(--muted)]">
            Región de Los Lagos · Chile
          </div>
        </div>

        <div className="text-[0.68rem] text-[var(--muted)]/60">
          © {new Date().getFullYear()} SMG · Desarrollado por{" "}
          <a
            href="https://biteradigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--orange)]/70 hover:text-[var(--orange)] transition-colors"
          >
            Bitera Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
