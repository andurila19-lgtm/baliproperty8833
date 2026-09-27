"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/properties";

const CHOOSE_US_ITEMS = [
  {
    number: "01",
    title: "Listing Properti Terverifikasi & Terpercaya",
    desc: "Setiap properti yang ditampilkan di Bali Property 8833 melalui proses kurasi dan pengecekan data untuk memastikan informasi harga, lokasi, dan spesifikasi akurat. Kami berkomitmen menghadirkan transparansi sehingga pembeli dapat membuat keputusan dengan percaya diri.",
  },
  {
    number: "02",
    title: "Pilihan Properti Lengkap di Lokasi Strategis",
    desc: "Kami menghadirkan beragam properti dijual di Bali mulai dari rumah, villa, tanah hingga properti komersial di area populer seperti Canggu, Uluwatu, Sanur, dan Seminyak. Dengan pilihan yang terkurasi, Anda dapat menemukan properti sesuai kebutuhan hunian maupun investasi.",
  },
  {
    number: "03",
    title: "Proses Transaksi Lebih Mudah & Aman",
    desc: "Bali Property 8833 membantu menghubungkan pembeli dengan informasi dan pihak terkait secara profesional. Dengan alur proses yang jelas dan transparan, kami mendukung pengalaman pembelian properti yang aman, nyaman, dan efisien.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Photography with Trust Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/3] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Solusi Properti Terbaik di Bali Property 8833"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3178A1] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">
                      Listing Properti Terkurasi
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold">
                      Bali Property 8833 Official
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-xs font-black text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{SITE_CONFIG.googleReviews.rating}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-bold">
                    {SITE_CONFIG.googleReviews.count} Ulasan Google
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Us Content matching baliproperties.id */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="mb-8">
              <span className="inline-block text-[#3178A1] font-black text-xs sm:text-sm uppercase tracking-wider mb-2">
                Mengapa Memilih Bali Property 8833?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Solusi Properti Terbaik di Bali
              </h2>
            </div>

            {/* 01, 02, 03 List matching choose-us-items in baliproperties.id */}
            <div className="space-y-6">
              {CHOOSE_US_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#3178A1]/40 transition-all hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF4F9] border-2 border-[#3178A1] flex items-center justify-center text-[#3178A1] font-black text-base shrink-0 shadow-xs">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
