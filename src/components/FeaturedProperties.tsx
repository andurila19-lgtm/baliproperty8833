"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Maximize2,
  Layers,
  FileCheck,
  ArrowRight,
  Star,
  MessageCircle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import {
  PROPERTIES,
  Property,
  PropertyType,
  SITE_CONFIG,
  getWhatsAppInquiryUrl,
} from "@/data/properties";

const CATEGORIES: Array<"Semua" | PropertyType> = [
  "Semua",
  "Villa",
  "House",
  "Land",
  "Commercial",
];

const CATEGORY_LABELS: Record<string, string> = {
  Semua: "Semua",
  Villa: "Villa",
  House: "Rumah",
  Land: "Tanah",
  Commercial: "Komersial",
};

export default function FeaturedProperties() {
  const [activeCategory, setActiveCategory] = useState<"Semua" | PropertyType>("Semua");

  const filteredProperties =
    activeCategory === "Semua"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.type === activeCategory);

  // Generate seamless marquee track items: base set (min 6 items) cloned twice
  // This guarantees Set A and Set B are wide enough and loop 100% imperceptibly
  const marqueeItems = React.useMemo(() => {
    if (filteredProperties.length === 0) return [];
    let base = [...filteredProperties];
    while (base.length < 6) {
      base = [...base, ...filteredProperties];
    }
    // Set A + Set B (exact clone) for seamless 0% -> -50% GPU loop
    return [...base, ...base];
  }, [filteredProperties]);

  return (
    <section id="properties" className="py-16 sm:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div>
            <span className="inline-block text-[#3178A1] font-black text-xs sm:text-sm uppercase tracking-wider mb-1.5">
              Pilihan Terbaik
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Produk Unggulan
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-semibold max-w-xl">
              Listing properti pilihan di Bali yang terus diperbarui secara berkala.
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "Semua"
                ? PROPERTIES.length
                : PROPERTIES.filter((p) => p.type === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-black tracking-wide uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#3178A1] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <span>{CATEGORY_LABELS[cat] || cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Swiper.js Auto-running Continuous Slider (Identik baliproperties.id) */}
      <div className="w-full overflow-hidden select-none py-2 px-4 sm:px-6">
        <Swiper
          key={activeCategory}
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          grabCursor={true}
          slidesPerView="auto"
          spaceBetween={24}
          speed={5200}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="bali-properties-swiper w-full !overflow-visible"
        >
          {marqueeItems.map((prop, index) => (
            <SwiperSlide
              key={`${prop.id}-${index}`}
              className="!w-[310px] sm:!w-[350px] shrink-0"
            >
              <PropertyCard property={prop} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Consultation Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-black text-slate-900">
              Ingin Mengetahui Ketersediaan Properti Terbaru?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 font-semibold">
              Katalog diperbarui setiap minggu. Dapatkan update langsung ke WhatsApp Anda.
            </p>
          </div>
          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat WhatsApp Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-slate-300 h-full">
      {/* Thumbnail Container matching screenshot */}
      <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
        <img
          src={property.heroImage}
          alt={property.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges (★ UNGGULAN & Category) matching screenshot */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pointer-events-none z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#3178A1] text-[11px] font-black uppercase tracking-wider shadow-md border border-slate-100">
            <Star className="w-3.5 h-3.5 fill-[#3178A1] text-[#3178A1]" />
            <span>Unggulan</span>
          </span>

          <span className="px-3 py-1 rounded-full bg-[#3178A1] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
            {property.type === "House"
              ? "Rumah"
              : property.type === "Land"
              ? "Tanah"
              : property.type === "Commercial"
              ? "Komersial"
              : property.type}
          </span>
        </div>

        {/* Sample Listing pill Top Right */}
        <div className="absolute top-3.5 right-3.5 pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-[10px] font-black uppercase tracking-wider border border-slate-200/80 shadow-xs">
            Sample
          </span>
        </div>

        {/* Tersedia Green Badge Bottom Right matching screenshot */}
        <div className="absolute bottom-3.5 right-3.5 pointer-events-none z-10">
          <span className="px-3.5 py-1 rounded-full bg-[#16A34A] text-white text-xs font-black uppercase tracking-wider shadow-md">
            Tersedia
          </span>
        </div>

        {/* Subtle Watermark bar matching baliproperties.id aesthetic */}
        <div className="absolute inset-x-0 bottom-0 py-1.5 px-3 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between text-[10px] text-white/80 font-bold pointer-events-none">
          <span>baliproperty8833.com</span>
          <span>{SITE_CONFIG.phoneFormatted}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Title (2 lines clamp) */}
        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#3178A1] transition-colors line-clamp-2 leading-snug min-h-[48px]">
          <Link href={`/properties/${property.slug}`}>
            {property.title}
          </Link>
        </h3>

        {/* Location with Pin Icon matching screenshot */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mt-2 mb-2">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Short description snippet */}
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium mb-4">
          {property.highlight}
        </p>

        {/* Specs List matching screenshot */}
        <div className="mt-auto pt-3.5 border-t border-slate-100 space-y-2 text-xs font-extrabold text-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#3178A1]" />
              <span>{property.landSize || property.buildingSize || "Luas Fleksibel"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#3178A1]" />
              <span>{property.type === "Land" ? "1 Kavling Tersedia" : "1 Unit Tersedia"}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-700">
            <FileCheck className="w-3.5 h-3.5 text-[#3178A1]" />
            <span>{property.ownership || "Freehold / Hak Milik"}</span>
          </div>
        </div>

        {/* Full-width "Lihat Detail →" Button matching screenshot */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <Link
            href={`/properties/${property.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#3178A1] hover:bg-[#215F82] text-white text-xs sm:text-sm font-black uppercase tracking-wide transition-all shadow-md shadow-[#3178A1]/20 active:scale-98"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
