"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppInquiryUrl } from "@/data/properties";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: "panduan-investasi-villa-bali",
    title: "Panduan Membeli Villa di Bali untuk Pemula: Tips & Hal Penting",
    excerpt: "Langkah-langkah strategis dalam memilih lokasi villa, menghitung potensi ROI sewa, dan memastikan keamanan transaksi properti di Bali.",
    date: "24 Sep 2026",
    category: "Investasi",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "perbedaan-freehold-leasehold",
    title: "Memahami Perbedaan Freehold (SHM) vs Leasehold (Hak Sewa) di Bali",
    excerpt: "Pelajari aspek legalitas penting antara kepemilikan hak milik dan hak sewa jangka panjang bagi pembeli domestik maupun ekspatriat.",
    date: "18 Sep 2026",
    category: "Legalitas",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "prospek-tanah-canggu-pererenan",
    title: "Kawasan Potensial Bali 2026: Mengapa Canggu & Pererenan Terus Tumbuh",
    excerpt: "Analisis tren perkembangan pariwisata dan infrastruktur yang mendorong kenaikan nilai investasi tanah serta properti residensial.",
    date: "10 Sep 2026",
    category: "Market Update",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ArticlesSection() {
  return (
    <section id="artikel" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block text-[#3178A1] font-black text-xs sm:text-sm uppercase tracking-wider mb-2">
              ARTIKEL & INFORMASI · PROPERTY INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Artikel Properti Bali
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base font-semibold max-w-xl">
              Wawasan seputar tren pasar properti, panduan legalitas, dan tips investasi di Bali.
            </p>
          </div>

          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#3178A1] hover:text-[#215F82] transition-colors self-start md:self-auto"
          >
            <span>Konsultasi Topik Khusus</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#3178A1] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#3178A1]" />
                  <span>{art.date}</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#3178A1] transition-colors line-clamp-2 leading-snug mb-2">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-medium mb-4">
                  {art.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/62881010920734?text=${encodeURIComponent(`Halo Bali Property 8833, saya ingin bertanya lebih lanjut seputar artikel: ${art.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#3178A1] hover:text-[#215F82] transition-colors"
                  >
                    <span>Baca & Diskusi via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
