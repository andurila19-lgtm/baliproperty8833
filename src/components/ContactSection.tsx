"use client";

import React, { useState } from "react";
import { MessageCircle, MapPin, Phone, Star, Send } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/properties";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    propertyType: "Villa",
    preferredArea: "Canggu",
    budget: "",
    notes: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Input teks harus teks (hanya alfabet, spasi, tanda petik/titik)
    const textOnly = e.target.value.replace(/[^a-zA-Z\s'.`-]/g, "");
    setFormData((prev) => ({ ...prev, name: textOnly }));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, budget: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedBudget =
      formData.budget && Number(formData.budget) > 0
        ? `Rp ${Number(formData.budget).toLocaleString("id-ID")}`
        : "";

    const query = [
      `Halo Bali Property 8833,`,
      `Nama saya: ${formData.name || "Calon Pembeli"}.`,
      `Saya tertarik mencari: ${formData.propertyType} di area ${formData.preferredArea}.`,
      formattedBudget ? `Indikasi Budget: ${formattedBudget}.` : "",
      formData.notes ? `Catatan/Kriteria tambahan: ${formData.notes}` : "",
      `Mohon dibantu ketersediaan unit yang sesuai. Terima kasih!`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(query)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-black tracking-widest text-[#3178A1] uppercase mb-2 inline-block">
              KONTAK & KONSULTASI
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Let's Talk About Your Property Search
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              Tim Bali Property 8833 siap memberikan informasi detail dan pendampingan personal untuk setiap pertanyaan seputar properti di Bali.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-[#3178A1]/10 flex items-center justify-center text-[#3178A1] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Lokasi</div>
                  <div className="text-sm font-extrabold text-slate-900">{SITE_CONFIG.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-[#31BB32]/10 flex items-center justify-center text-[#31BB32] shrink-0">
                  <MessageCircle className="w-6 h-6 fill-[#31BB32] text-white" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">WhatsApp Hotline</div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-slate-900 hover:text-[#31BB32] transition-colors"
                  >
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-6 h-6 fill-amber-500" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Google Business Rating</div>
                  <div className="text-sm font-extrabold text-slate-900">
                    4.9 ★ <span className="text-slate-500 font-semibold">(49 ulasan terverifikasi)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent("Halo Bali Property 8833, saya ingin konsultasi mengenai properti di Bali.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-1">
              Kirim Formulir Permintaan
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-6">
              Pesan akan otomatis diformat dan terkirim langsung ke WhatsApp tim kami.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                  Nama Anda (Hanya Teks)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso / John Smith"
                  value={formData.name}
                  onChange={handleNameChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#3178A1]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                    Tipe Properti
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#3178A1]"
                  >
                    <option value="Villa">Villa</option>
                    <option value="Rumah">Rumah</option>
                    <option value="Tanah">Tanah</option>
                    <option value="Komersial">Komersial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                    Area Pilihan
                  </label>
                  <select
                    value={formData.preferredArea}
                    onChange={(e) => setFormData({ ...formData, preferredArea: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#3178A1]"
                  >
                    <option value="Canggu">Canggu</option>
                    <option value="Berawa">Berawa</option>
                    <option value="Pererenan">Pererenan</option>
                    <option value="Seminyak / Kerobokan">Seminyak / Kerobokan</option>
                    <option value="Uluwatu / Bukit">Uluwatu / Bukit</option>
                    <option value="Sanur">Sanur</option>
                    <option value="Ubud">Ubud</option>
                    <option value="Area Lain di Bali">Area Lain di Bali</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                    Estimasi Budget (Hanya Angka)
                  </label>
                  {formData.budget && Number(formData.budget) > 0 ? (
                    <span className="text-xs font-bold text-[#3178A1]">
                      Rp {Number(formData.budget).toLocaleString("id-ID")}
                    </span>
                  ) : null}
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-xs font-black text-slate-400 pointer-events-none">
                    Rp
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="100000000"
                    placeholder="Contoh: 3500000000"
                    value={formData.budget}
                    onChange={handleBudgetChange}
                    className="w-full pl-11 pr-3 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#3178A1] placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                  Catatan Kebutuhan
                </label>
                <textarea
                  rows={3}
                  placeholder="Kriteria khusus seperti jumlah kamar tidur, freehold/leasehold, view sawah, dsb."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#3178A1]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#3178A1] hover:bg-[#215F82] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md shadow-[#3178A1]/20 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Permintaan via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
