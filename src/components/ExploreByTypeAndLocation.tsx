"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PROPERTY_TYPES = [
  { name: "Rumah", href: "/#properti-rumah" },
  { name: "Tanah", href: "/#properti-tanah" },
  { name: "Villa", href: "/#properties" },
  { name: "Komersial / Ruko", href: "/#properties" },
  { name: "Kavling Investasi", href: "/#properti-tanah" },
];

const PROPERTY_LOCATIONS = [
  { name: "Properti di Badung", href: "/#properties" },
  { name: "Properti di Canggu", href: "/#properties" },
  { name: "Properti di Denpasar / Sanur", href: "/#properties" },
  { name: "Properti di Gianyar / Ubud", href: "/#properties" },
  { name: "Properti di Tabanan", href: "/#properties" },
  { name: "Properti di Uluwatu / Bukit", href: "/#properties" },
  { name: "Properti di Seminyak", href: "/#properties" },
  { name: "Properti di Jimbaran", href: "/#properties" },
];

export default function ExploreByTypeAndLocation() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching baliproperties.id */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block text-[#3178A1] font-black text-xs sm:text-sm uppercase tracking-wider mb-2">
            Jelajahi Properti Bali
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Temukan Properti Berdasarkan Tipe dan Lokasi
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
            Akses cepat ke halaman kategori dan lokasi properti membantu Anda menemukan tanah, villa, rumah, kavling, ruko, dan properti investasi di Bali dengan lebih mudah.
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Group 1: Berdasarkan Tipe Properti */}
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 tracking-tight">
              Berdasarkan Tipe Properti
            </h3>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {PROPERTY_TYPES.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white border border-slate-200/90 text-slate-800 hover:bg-[#3178A1] hover:text-white hover:border-[#3178A1] text-xs sm:text-sm font-extrabold tracking-tight transition-all shadow-xs hover:-translate-y-0.5 group"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Group 2: Berdasarkan Lokasi */}
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 tracking-tight">
              Berdasarkan Lokasi
            </h3>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {PROPERTY_LOCATIONS.map((loc) => (
                <Link
                  key={loc.name}
                  href={loc.href}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white border border-slate-200/90 text-slate-800 hover:bg-[#3178A1] hover:text-white hover:border-[#3178A1] text-xs sm:text-sm font-extrabold tracking-tight transition-all shadow-xs hover:-translate-y-0.5 group"
                >
                  <span>{loc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
