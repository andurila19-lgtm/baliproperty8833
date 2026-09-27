"use client";

import React from "react";
import { Search, RotateCcw, MessageCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import { Property, SITE_CONFIG } from "@/data/properties";

export interface SearchFilterState {
  city: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  isActive: boolean;
}

interface SearchResultsSectionProps {
  filters: SearchFilterState;
  onReset: () => void;
  properties: Property[];
}

export default function SearchResultsSection({
  filters,
  onReset,
  properties,
}: SearchResultsSectionProps) {
  if (!filters.isActive) return null;

  // Perform multi-parameter filter
  const filtered = properties.filter((item) => {
    // 1. Filter City / Location
    if (filters.city !== "Semua Kota (Bali)") {
      const target = filters.city.toLowerCase();
      const matchLoc = item.location.toLowerCase().includes(target);
      const matchArea = item.area.toLowerCase().includes(target);
      if (!matchLoc && !matchArea) return false;
    }

    // 2. Filter Type
    if (filters.type !== "Semua Tipe") {
      if (item.type !== filters.type) return false;
    }

    return true;
  });

  const getWhatsAppSearchUrl = () => {
    const formattedMin = filters.minPrice ? `Rp ${Number(filters.minPrice).toLocaleString("id-ID")}` : "";
    const formattedMax = filters.maxPrice ? `Rp ${Number(filters.maxPrice).toLocaleString("id-ID")}` : "";

    const queryParts = [
      `Halo Bali Property 8833, saya mencari properti di website Anda dengan kriteria:`,
      filters.city !== "Semua Kota (Bali)" ? `- Lokasi: ${filters.city}` : "- Lokasi: Seluruh Bali",
      filters.type !== "Semua Tipe" ? `- Tipe: ${filters.type}` : "- Tipe: Semua Tipe Properti",
      formattedMin ? `- Min Budget: ${formattedMin}` : "",
      formattedMax ? `- Max Budget: ${formattedMax}` : "",
      `Mohon kirimkan rekomendasi unit yang tersedia. Terima kasih.`,
    ].filter(Boolean);

    return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(queryParts.join("\n"))}`;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      id="search-results"
      className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200/90 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3178A1]/10 text-[#3178A1] font-black text-xs uppercase tracking-wider mb-2">
              <Search className="w-3.5 h-3.5" />
              <span>Hasil Pencarian Properti</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Ditemukan {filtered.length} Properti Sesuai Kriteria
            </h2>

            {/* Active Filters Summary */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="text-xs font-bold text-slate-500">Filter Aktif:</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                📍 {filters.city}
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                🏠 {filters.type === "House" ? "Rumah" : filters.type === "Land" ? "Tanah" : filters.type}
              </span>
              {filters.minPrice && (
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                  Min: Rp {Number(filters.minPrice).toLocaleString("id-ID")}
                </span>
              )}
              {filters.maxPrice && (
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-2xs">
                  Max: Rp {Number(filters.maxPrice).toLocaleString("id-ID")}
                </span>
              )}
            </div>
          </div>

          {/* Reset Action */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-wider transition-all shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          </div>
        </div>

        {/* Results Grid or Empty State */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200/90 shadow-sm max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
              Belum Ada Unit Publik yang Sesuai Persis
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-6">
              Listing publik kami terus diperbarui. Tim kami memiliki puluhan listing privat (*off-market*) di area {filters.city} yang dapat Anda akses langsung.
            </p>
            <a
              href={getWhatsAppSearchUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Tanyakan Opsi Unit Off-Market di WhatsApp</span>
            </a>
          </div>
        )}

        {/* Floating Consultation Strip for Search */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900">
              Ingin Jadwalkan Survei Langsung ke Lokasi?
            </h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Kirimkan hasil pencarian ini ke agen kami untuk jadwal kunjungan lokasi hari ini.
            </p>
          </div>
          <a
            href={getWhatsAppSearchUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Kirim Kriteria ke WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
