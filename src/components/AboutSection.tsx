"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/properties";

export default function AboutSection() {
  return (
    <section id="tentangkami" className="relative py-20 sm:py-28 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div id="about" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block text-[#3178A1] font-black text-xs sm:text-sm uppercase tracking-wider mb-2">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Temukan Properti di Bali untuk Hunian &amp; Investasi
          </h2>
        </motion.div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none text-slate-600 font-semibold text-sm sm:text-base leading-relaxed space-y-6 text-justify sm:text-left">
            <p>
              <strong className="text-slate-900">Bali Property 8833</strong> merupakan platform dan agen properti terpercaya di Bali yang menghadirkan berbagai pilihan properti dijual mulai dari rumah tinggal, private pool villa, tanah kavling strategis, hingga properti komersial untuk kebutuhan hunian maupun portofolio investasi. Sebagai Solusi Properti Bali, kami menyediakan informasi listing yang transparan, terverifikasi, dan akurat untuk membantu calon pembeli menemukan properti terbaik sesuai preferensi dan anggaran Anda.
            </p>
            <p>
              Kami memahami bahwa memiliki properti di Bali bukan hanya tentang memilih lokasi yang indah, melainkan juga menyangkut keamanan legalitas hukum serta potensi pertumbuhan nilai investasi (*capital appreciation* dan *rental yield*) jangka panjang. Oleh karena itu, setiap listing di Bali Property 8833 dilengkapi detail spesifikasi lengkap, zona ITR (kuning/pink), status kepemilikan (Freehold SHM / Leasehold), serta konteks kawasan populer seperti Canggu, Pererenan, Uluwatu, Sanur, Ubud, dan Denpasar.
            </p>
            <p>
              Melalui komitmen kuat terhadap akurasi data lapangan, pendampingan survei personal, serta kemudahan komunikasi langsung via WhatsApp tanpa alur perantara yang rumit, Bali Property 8833 siap menjadi mitra andalan Anda dalam mewujudkan kepemilikan aset properti yang bernilai tinggi dan aman di Pulau Dewata.
            </p>
          </div>

          {/* 3 Core Trust Badges */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: ShieldCheck,
                title: "Legalitas Aman",
                desc: "Pengecekan sertifikat SHM, HGB, dan perjanjian leasehold yang jelas.",
              },
              {
                icon: FileText,
                title: "Data Terverifikasi",
                desc: "Informasi luas tanah, bangunan, dan zonasi akurat sesuai kondisi nyata.",
              },
              {
                icon: CheckCircle2,
                title: "Komunikasi Langsung",
                desc: "Konsultasi instan dan jadwal survei langsung bersama tim kami di Bali.",
              },
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3178A1]/10 flex items-center justify-center text-[#3178A1] shrink-0">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{badge.title}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {badge.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
