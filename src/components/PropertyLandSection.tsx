"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Maximize2,
  Layers,
  FileCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { PROPERTIES, SITE_CONFIG } from "@/data/properties";

export default function PropertyLandSection() {
  const landProperties = PROPERTIES.filter((p) => p.type === "Land").slice(0, 4);

  return (
    <section id="properti-tanah" className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching baliproperties.id screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span className="inline-block text-[#3178A1] font-black text-xs sm:text-sm uppercase tracking-wider mb-1">
              Kategori Properti
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Properti Tanah
            </h2>
          </div>
          <Link
            href="/#properties"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#3178A1] hover:text-[#215F82] transition-colors group"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* 4 Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {landProperties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badges Top Left matching screenshot */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.8 rounded-full bg-white text-[#3178A1] text-[10px] font-black uppercase tracking-wider shadow-sm">
                    <Star className="w-3 h-3 fill-[#3178A1] text-[#3178A1]" />
                    <span>Unggulan</span>
                  </span>
                  <span className="px-2.5 py-0.8 rounded-full bg-[#3178A1] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    Tanah
                  </span>
                </div>

                {/* Tersedia Green Badge Bottom Right */}
                <div className="absolute bottom-3 right-3 pointer-events-none z-10">
                  <span className="px-3 py-1 rounded-full bg-[#16A34A] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    Tersedia
                  </span>
                </div>

                {/* Subtle Watermark bar matching baliproperties.id aesthetic */}
                <div className="absolute inset-x-0 bottom-0 py-1 px-3 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between text-[9px] text-white/80 font-bold pointer-events-none">
                  <span>baliproperty8833.com</span>
                  <span>{SITE_CONFIG.phoneFormatted}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#3178A1] transition-colors line-clamp-1 leading-snug">
                  <Link href={`/properties/${prop.slug}`}>{prop.title}</Link>
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 mt-1 mb-2">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="line-clamp-1">{prop.location}</span>
                </div>

                {/* Excerpt */}
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-medium mb-3">
                  {prop.highlight}
                </p>

                {/* Specs List */}
                <div className="mt-auto pt-3 border-t border-slate-100 space-y-1.5 text-[11px] font-extrabold text-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-[#3178A1]" />
                      <span>{prop.landSize || "Luas Fleksibel"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#3178A1]" />
                      <span>1 Kavling</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-700">
                    <FileCheck className="w-3 h-3 text-[#3178A1]" />
                    <span>{prop.ownership || "Freehold / SHM"}</span>
                  </div>
                </div>

                {/* Button "Lihat Detail →" */}
                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <Link
                    href={`/properties/${prop.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#3178A1] hover:bg-[#215F82] text-white text-[11px] sm:text-xs font-black uppercase tracking-wide transition-all shadow-sm active:scale-98"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
