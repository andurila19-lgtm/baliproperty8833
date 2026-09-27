import React from "react";
import Link from "next/link";
import { MessageCircle, Star, ShieldCheck, MapPin, Mail, Phone } from "lucide-react";
import { SITE_CONFIG, getWhatsAppInquiryUrl } from "@/data/properties";

export default function Footer() {
  const whatsAppUrl = getWhatsAppInquiryUrl();

  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-28 md:pb-16 px-5 sm:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="group flex items-center gap-3.5 focus:outline-none">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1 border border-white/20 shadow-md shrink-0 transition-transform group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Bali Property 8833 Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white flex items-center gap-1.5">
                  <span>Bali Property</span>
                  <span className="text-[#38bdf8]">8833</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold -mt-0.5">
                  Property Services in Bali
                </span>
              </div>
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
              Membantu calon pembeli dan investor menemukan properti terbaik di Bali dengan pendampingan langsung, aman, dan transparan.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300 font-semibold">
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="ml-1 font-bold text-white">4.9</span>
              </div>
              <span className="text-slate-600">·</span>
              <span>49 Google Reviews</span>
              <span className="text-slate-600">·</span>
              <span>Bali, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#38bdf8] mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-semibold">
              <li>
                <a href="/#properties" className="hover:text-white transition-colors">
                  Properti Pilihan
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors">
                  Keunggulan Layanan
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-white transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Kontak & Konsultasi
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#38bdf8] mb-4">
              Kontak Langsung
            </h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">
              Hubungi tim kami langsung via WhatsApp untuk ketersediaan unit, jadwal survei lokasi, dan detail legalitas.
            </p>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs font-extrabold tracking-wide uppercase transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: {SITE_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Prototype Honesty Notice */}
        <div className="pt-8 pb-3 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
          <span>
            Prototype Preview Website · Listing properti merupakan sample demonstrasi tata letak dan alur konsultasi.
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-slate-400 pt-2 font-medium">
          <p>© 2026 Bali Property 8833. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
