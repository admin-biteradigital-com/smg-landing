import { MACRO_CATEGORIES } from "@/lib/constants";

export default function Products() {
  return (
    <section id="productos" className="bg-[var(--navy)] py-24">
      <div className="max-w-[1140px] mx-auto px-7">
        <div className="mb-12 reveal">
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--orange)] mb-3">
            <span className="w-5 h-[2px] bg-[var(--orange)] rounded-sm" />
            Catálogo
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.9rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-3">
            Productos que se venden solos
          </h2>
          <p className="text-[0.96rem] leading-[1.76] text-[var(--muted)] max-w-[550px]">
            Marcas reconocidas y productos que rotan rápido en almacenes,
            kioscos, minimarkets y botillerías.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MACRO_CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="border-[1.5px] border-[rgba(244,121,32,0.17)] rounded-[14px] p-6 text-center transition-all duration-200 hover:bg-[rgba(244,121,32,0.09)] hover:border-[var(--orange)] hover:scale-[1.04] cursor-default reveal"
            >
              <div className="text-[2rem] mb-2.5">{cat.emoji}</div>
              <div className="text-[0.91rem] font-bold text-white mb-0.5">
                {cat.name}
              </div>
              <div className="text-[0.74rem] text-[var(--muted)]">
                {cat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
