"use client";

import { motion } from "framer-motion";
import { MACRO_CATEGORIES } from "@/lib/constants";

const BENTO_SIZES = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "",
  "md:col-span-2",
  "",
  "",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Products() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A90D9] opacity-[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--orange)]">
            Catálogo
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold mt-3 tracking-tight">
            +100 productos en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange)] to-[#FFB366]">
              8 categorías
            </span>
          </h2>
          <p className="text-[var(--muted)] mt-4 max-w-[520px] mx-auto text-[0.92rem]">
            Todo lo que tu almacén, kiosco o minimarket necesita. Pide por WhatsApp y te lo llevamos.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[160px]"
        >
          {MACRO_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              variants={item}
              className={`group relative glass glass-hover rounded-2xl p-5 flex flex-col justify-end cursor-default transition-all duration-500 hover:translate-y-[-3px] overflow-hidden ${BENTO_SIZES[i] || ""}`}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out]" />

              <span className="text-[2rem] mb-2 relative z-10">{cat.emoji}</span>
              <h3 className="text-[0.9rem] font-bold relative z-10">{cat.name}</h3>
              <p className="text-[0.72rem] text-[var(--muted)] relative z-10 mt-0.5">{cat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
