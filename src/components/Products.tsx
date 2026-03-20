"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRANDS } from "@/lib/constants";

// Extended mock catalog linking to brands to showcase the interactive grid
const CATALOG = [
  { id: 1, name: "Displays Trento", brand: "Trento", emoji: "🍫", type: "Chocolates", size: "md:col-span-2 md:row-span-2" },
  { id: 2, name: "Papas Fritas 140g", brand: "Kryzpo", emoji: "🥔", type: "Snacks", size: "" },
  { id: 3, name: "Chicles Menta", brand: "Freegells", emoji: "🫧", type: "Chicles", size: "" },
  { id: 4, name: "Postre Mantecol", brand: "Mantecol", emoji: "🥜", type: "Golosinas", size: "" },
  { id: 5, name: "Café Instantáneo", brand: "Gold Café", emoji: "☕", type: "Bebidas", size: "" },
  { id: 6, name: "Galletas Pit-Stop", brand: "Marilan / Pit-Stop", emoji: "🥨", type: "Snacks", size: "md:col-span-2" },
  { id: 7, name: "Alfajores Bel", brand: "Bel", emoji: "🧁", type: "Repostería", size: "" },
  { id: 8, name: "Bombones Sortidos", brand: "Montevergine", emoji: "🍬", type: "Chocolates", size: "" },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  // Show "Todos" plus a selection of top brands for the filter pills
  const filters = ["Todos", "Trento", "Kryzpo", "Freegells", "Mantecol"];

  const filteredCatalog = activeFilter === "Todos"
    ? CATALOG
    : CATALOG.filter(item => item.brand === activeFilter);

  return (
    <section className="relative py-28 overflow-hidden" id="catalogo">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A90D9] opacity-[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[var(--orange)]">
            Catálogo Interactivo
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold mt-3 tracking-tight">
            Explora las marcas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange)] to-[#FFB366]">
              líderes
            </span>
          </h2>
        </motion.div>

        {/* ── Filter Pills ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-[0.8rem] font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[var(--orange)] text-white shadow-[0_4px_16px_rgba(244,121,32,0.4)]"
                  : "bg-transparent text-[var(--muted)] border border-[var(--glass-border)] hover:border-white/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* ── Bento Grid ── */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          <AnimatePresence mode="popLayout">
            {filteredCatalog.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                key={item.id}
                className={`group relative glass rounded-2xl p-5 flex flex-col justify-end cursor-default overflow-hidden ${
                  activeFilter === "Todos" ? item.size : "" // Only apply asymmetric sizing when all items are shown to avoid layout breaks
                }`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-[2rem] mb-2 relative z-10">{item.emoji}</span>
                <div className="relative z-10">
                  <h3 className="text-[0.9rem] font-bold text-white">{item.name}</h3>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-[0.72rem] text-[var(--orange)] font-medium">{item.brand}</p>
                    <p className="text-[0.65rem] text-[var(--muted)]">{item.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCatalog.length === 0 && (
          <div className="text-center py-10 text-[var(--muted)]">
            No items found for this filter.
          </div>
        )}
      </div>
    </section>
  );
}
