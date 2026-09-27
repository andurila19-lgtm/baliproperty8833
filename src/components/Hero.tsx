"use client";

import React, { useState } from "react";
import {
  Search,
  Building2,
  Filter,
  ArrowRight,
  Zap,
  Star,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG, getWhatsAppInquiryUrl } from "@/data/properties";

interface HeroProps {
  onSearch?: (filters: {
    city: string;
    type: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [selectedCity, setSelectedCity] = useState("Semua Kota (Bali)");
  const [selectedType, setSelectedType] = useState("Semua Tipe");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleNumericInput = (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSearch) {
      onSearch({
        city: selectedCity,
        type: selectedType,
        minPrice,
        maxPrice,
      });

      setTimeout(() => {
        const target = document.getElementById("search-results");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  const handleDirectWhatsApp = () => {
    const formattedMin = minPrice ? `Rp ${Number(minPrice).toLocaleString("id-ID")}` : "";
    const formattedMax = maxPrice ? `Rp ${Number(maxPrice).toLocaleString("id-ID")}` : "";

    const queryParts = [
      `Halo Bali Property 8833, saya ingin mencari properti di Bali dengan kriteria:`,
      selectedCity !== "Semua Kota (Bali)" ? `- Lokasi: ${selectedCity}` : "- Lokasi: Seluruh Bali",
      selectedType !== "Semua Tipe" ? `- Tipe: ${selectedType}` : "- Tipe: Semua Tipe Properti",
      formattedMin ? `- Min Budget: ${formattedMin}` : "",
      formattedMax ? `- Max Budget: ${formattedMax}` : "",
      `Mohon kirimkan opsi unit yang tersedia. Terima kasih.`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(queryParts.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="home" className="relative pt-16 sm:pt-20 bg-slate-900 overflow-hidden">
      {/* Background Image Container with Cinematic Scale */}
      <div className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden">
        {/* Real Estate Villa Photo */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
            alt="Pilihan Properti Terpercaya untuk Hunian dan Investasi di Bali"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay on the left matching baliproperties.id */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/25 lg:from-slate-950/90 lg:via-slate-950/55 lg:to-transparent" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (Desktop headline matching screenshot) */}
            <div className="lg:col-span-6 text-white flex flex-col items-start">
              {/* Kicker / Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 drop-shadow-sm mb-3"
              >
                Pusat Informasi Properti Terpercaya di Bali
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.15] text-white tracking-tight drop-shadow-md"
              >
                Pilihan Properti<br />
                Terpercaya untuk<br />
                Hunian dan Investasi
              </motion.h1>

              {/* Discover More CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex items-center gap-4"
              >
                <a
                  href="#properties"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3178A1] hover:bg-[#215F82] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-[#3178A1]/30 active:scale-95"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Subtle Google Rating Pill */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-white">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">4.9</span>
                  <span className="text-white/60">· 49 Reviews</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content / Spotlight Search Card matching screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[500px] bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100/90 text-slate-800">
                {/* Search Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF4F9] flex items-center justify-center text-[#3178A1] shrink-0 mt-0.5">
                    <Search className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                      Cari Properti
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      Lokasi, tipe, dan harga — dalam sekali klik
                    </p>
                  </div>
                </div>

                {/* Search Form */}
                <form onSubmit={handleSearchSubmit} noValidate className="space-y-3">
                  {/* Row 1: City & Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* City Select */}
                    <div className="relative flex items-center">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full pl-9 pr-7 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#3178A1] appearance-none"
                      >
                        <option value="Semua Kota (Bali)">Semua Kota (Bali)</option>
                        <option value="Canggu">Canggu</option>
                        <option value="Berawa">Berawa</option>
                        <option value="Pererenan">Pererenan</option>
                        <option value="North Canggu">North Canggu</option>
                        <option value="Kerobokan">Kerobokan</option>
                        <option value="Badung">Badung</option>
                        <option value="Seminyak">Seminyak</option>
                        <option value="Uluwatu">Uluwatu</option>
                        <option value="Sanur">Sanur</option>
                        <option value="Ubud">Ubud</option>
                      </select>
                      <span className="absolute right-3 text-slate-400 pointer-events-none text-xs">
                        ⌵
                      </span>
                    </div>

                    {/* Type Select */}
                    <div className="relative flex items-center">
                      <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full pl-9 pr-7 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#3178A1] appearance-none"
                      >
                        <option value="Semua Tipe">Semua Tipe</option>
                        <option value="Villa">Villa</option>
                        <option value="House">Rumah</option>
                        <option value="Land">Tanah</option>
                        <option value="Commercial">Komersial</option>
                      </select>
                      <span className="absolute right-3 text-slate-400 pointer-events-none text-xs">
                        ⌵
                      </span>
                    </div>
                  </div>

                  {/* Row 2: Price Min & Max (Input Angka dengan Tools Stepper) */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Min Price */}
                    <div>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-xs font-black text-slate-400 pointer-events-none">
                          Rp
                        </span>
                        <input
                          type="number"
                          min="0"
                          step="50000000"
                          placeholder="Min"
                          value={minPrice}
                          onChange={handleNumericInput(setMinPrice)}
                          className="w-full pl-9 pr-2 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#3178A1] placeholder:text-slate-400"
                        />
                      </div>
                      {minPrice && Number(minPrice) > 0 ? (
                        <div className="text-[10px] font-bold text-[#3178A1] mt-1 pl-1 truncate">
                          Rp {Number(minPrice).toLocaleString("id-ID")}
                        </div>
                      ) : null}
                    </div>

                    {/* Max Price */}
                    <div>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-xs font-black text-slate-400 pointer-events-none">
                          Rp
                        </span>
                        <input
                          type="number"
                          min="0"
                          step="50000000"
                          placeholder="Max"
                          value={maxPrice}
                          onChange={handleNumericInput(setMaxPrice)}
                          className="w-full pl-9 pr-2 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#3178A1] placeholder:text-slate-400"
                        />
                      </div>
                      {maxPrice && Number(maxPrice) > 0 ? (
                        <div className="text-[10px] font-bold text-[#3178A1] mt-1 pl-1 truncate">
                          Rp {Number(maxPrice).toLocaleString("id-ID")}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#3178A1] hover:bg-[#215F82] text-white text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-md shadow-[#3178A1]/25 active:scale-98"
                    >
                      <Zap className="w-4 h-4 fill-white" />
                      <span>Cari Properti di Web</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1 text-slate-500 hover:text-[#31BB32] text-[11px] sm:text-xs font-bold transition-colors"
                    >
                      <span>Atau kirim kriteria langsung ke WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel indicator dot matching screenshot */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3178A1] shadow-sm" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
