"use client";

import React, { useState } from "react";
import {
  Maximize2,
  X,
  MapPin,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, getWhatsAppInquiryUrl } from "@/data/properties";

interface GalleryItem {
  id: string;
  title: string;
  category: "Villa" | "Rumah" | "Tanah" | "Interior";
  location: string;
  image: string;
  tag: string;
  featured?: boolean;
}

const GALLERY_CATEGORIES = [
  { key: "Semua", label: "Semua Koleksi" },
  { key: "Villa", label: "Private Pool Villa" },
  { key: "Rumah", label: "Rumah & Townhouse" },
  { key: "Tanah", label: "Tanah & View Spektakuler" },
  { key: "Interior", label: "Interior & Arsitektur" },
] as const;

type CategoryKey = (typeof GALLERY_CATEGORIES)[number]["key"];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Royal Sunset Villa Canggu",
    category: "Villa",
    location: "Canggu, Bali",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    tag: "Private Pool & Tropical Garden",
    featured: true,
  },
  {
    id: "gal-2",
    title: "Uluwatu Ocean Panorama Cliff",
    category: "Tanah",
    location: "Uluwatu, Badung",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    tag: "Zona Kuning · Freehold SHM",
  },
  {
    id: "gal-3",
    title: "Sanur Modern Tropical Residence",
    category: "Rumah",
    location: "Sanur, Denpasar",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    tag: "Siap Huni · Freehold",
  },
  {
    id: "gal-4",
    title: "Grand Living Space & Sunken Lounge",
    category: "Interior",
    location: "Pererenan, Badung",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    tag: "Fully Furnished Luxury",
  },
  {
    id: "gal-5",
    title: "Ubud Sanctuary Forest Estate",
    category: "Tanah",
    location: "Ubud, Gianyar",
    image: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?auto=format&fit=crop&w=1200&q=85",
    tag: "River & Jungle View",
  },
  {
    id: "gal-6",
    title: "Pererenan Contemporary Pool Villa",
    category: "Villa",
    location: "Pererenan, Bali",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
    tag: "High ROI Potential",
  },
  {
    id: "gal-7",
    title: "Jimbaran Hills Modern Townhouse",
    category: "Rumah",
    location: "Jimbaran, Badung",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85",
    tag: "Gated Community 24/7",
  },
  {
    id: "gal-8",
    title: "Master Suite with Direct Pool Access",
    category: "Interior",
    location: "Canggu, Bali",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
    tag: "High Ceilings & Teak Finishes",
  },
  {
    id: "gal-9",
    title: "Sanur Beachside Coastal Land",
    category: "Tanah",
    location: "Sanur, Denpasar",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    tag: "Langkah ke Pantai",
  },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("Semua");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filterScrollRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeftPos = React.useRef(0);
  const hasMoved = React.useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!filterScrollRef.current) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - filterScrollRef.current.offsetLeft;
    scrollLeftPos.current = filterScrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !filterScrollRef.current) return;
    const x = e.pageX - filterScrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasMoved.current = true;
    }
    filterScrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const scrollFilters = (offset: number) => {
    if (filterScrollRef.current) {
      filterScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const filteredItems =
    selectedCategory === "Semua"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const getInquiryUrl = (item: GalleryItem) => {
    const text = `Halo Bali Property 8833, saya melihat foto "${item.title}" (${item.location}) di Galeri website dan tertarik mendapatkan informasi lebih lanjut.`;
    return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="galeri" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <span className="inline-block text-[#3178A1] font-black text-xs sm:text-sm uppercase tracking-wider mb-2">
            Galeri Kami
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pilihan Properti Terbaik untuk Masa Depan Anda
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
            Eksplorasi visual estetika hunian tropis, private pool villa, kavling tanah strategis, dan arsitektur mewah di Bali yang siap menjadi aset bernilai tinggi untuk Anda.
          </p>
        </motion.div>

        {/* Filter Pills with Free Drag + Geser Support */}
        <div className="relative max-w-4xl mx-auto mb-10">
          {/* Scroll Left Button */}
          <button
            type="button"
            onClick={() => scrollFilters(-220)}
            aria-label="Geser ke kiri"
            className="flex absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center text-slate-700 hover:text-[#3178A1] hover:bg-slate-50 transition-all active:scale-90"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Filter Pills Container */}
          <div
            ref={filterScrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar cursor-grab active:cursor-grabbing select-none px-7 justify-start sm:justify-center touch-pan-x"
            style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
          >
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    if (hasMoved.current) return;
                    setSelectedCategory(cat.key);
                  }}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-black tracking-wide uppercase transition-all whitespace-nowrap shrink-0 active:scale-95 shadow-2xs ${
                    isActive
                      ? "bg-[#3178A1] text-white shadow-md shadow-[#3178A1]/20 scale-102"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            type="button"
            onClick={() => scrollFilters(220)}
            aria-label="Geser ke kanan"
            className="flex absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center text-slate-700 hover:text-[#3178A1] hover:bg-slate-50 transition-all active:scale-90"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Dynamic Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveModalItem(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 aspect-[4/3]"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Tag Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#3178A1] text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Enlarge Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-white/80 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#3178A1]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white leading-snug group-hover:text-[#67b7e3] transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white font-extrabold opacity-90 group-hover:opacity-100">
                    <span className="flex items-center gap-1">
                      <span>Lihat Detail Foto</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[10px] text-white/60 font-semibold">
                      Bali Property 8833
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-[#1e4a63] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <span className="text-xs font-black text-[#67b7e3] uppercase tracking-wider">
              Koleksi Eksklusif
            </span>
            <h4 className="text-lg sm:text-xl md:text-2xl font-black mt-1">
              Ingin Melihat Portofolio Foto &amp; Video Drone Lengkap?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              Hubungi tim kami untuk menerima katalog PDF eksklusif dan video tur properti pilihan.
            </p>
          </div>

          <a
            href={getWhatsAppInquiryUrl("Katalog Foto & Video Properti Lengkap")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Minta Katalog via WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#3178A1] text-white text-xs font-black uppercase tracking-wider shadow-md">
                    {activeModalItem.tag}
                  </span>
                </div>
              </div>

              {/* Modal Details & Action */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#3178A1]" />
                    <span>{activeModalItem.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    Bali Property 8833 · Solusi Properti Terbaik di Bali
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={getInquiryUrl(activeModalItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Tanyakan Unit Ini</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
