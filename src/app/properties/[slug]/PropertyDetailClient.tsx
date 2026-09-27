"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Building,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  Share2,
  ShieldAlert,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Property, SITE_CONFIG, getWhatsAppInquiryUrl } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

interface PropertyDetailClientProps {
  property: Property;
  relatedProperties: Property[];
}

export default function PropertyDetailClient({
  property,
  relatedProperties,
}: PropertyDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.heroImage];

  const currentImage = images[selectedImageIndex] || property.heroImage;

  const defaultWhatsAppUrl = getWhatsAppInquiryUrl(
    property.title,
    property.location
  );

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      {/* Force Solid Navbar */}
      <Navbar forceSolid={true} />

      <main className="flex-1 pt-24 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#properties"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-[#3178A1] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Semua Properti</span>
            </Link>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#3178A1] hover:text-[#3178A1] transition-colors shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Tersalin!" : "Bagikan"}</span>
            </button>
          </div>
        </div>

        {/* Prototype Sample Listing Notice */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start sm:items-center gap-3 text-xs font-medium text-slate-600">
            <ShieldAlert className="w-5 h-5 text-[#3178A1] shrink-0" />
            <p>
              <strong className="font-extrabold text-slate-900">Sample Listing Preview:</strong>{" "}
              Listing ini adalah sample demonstrasi tata letak dan alur komunikasi calon buyer untuk prototype Bali Property 8833.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left 8/12: Gallery, Specs & Overview */}
            <div className="lg:col-span-8 space-y-8">
              {/* Gallery Section */}
              <div className="space-y-4">
                {/* Large Primary Image */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-200 border border-slate-200 shadow-md">
                  <img
                    src={currentImage}
                    alt={`${property.title} - View ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-[#3178A1] text-white text-xs font-black uppercase tracking-wider shadow-md">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-950/70 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full font-bold">
                    {selectedImageIndex + 1} / {images.length} Foto
                  </div>
                </div>

                {/* Thumbnail Selector */}
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3 sm:gap-4">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all ${
                          selectedImageIndex === idx
                            ? "border-[#3178A1] shadow-md scale-98"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Location Header */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#3178A1]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{property.location}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 font-bold">{property.area}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {property.title}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                  {property.highlight}
                </p>

                {/* Specs Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                  {property.bedrooms && (
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
                        <Bed className="w-4 h-4 text-[#3178A1]" />
                        <span>Kamar Tidur</span>
                      </div>
                      <div className="text-xl font-black text-slate-900">
                        {property.bedrooms} KT
                      </div>
                    </div>
                  )}

                  {property.bathrooms && (
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
                        <Bath className="w-4 h-4 text-[#3178A1]" />
                        <span>Kamar Mandi</span>
                      </div>
                      <div className="text-xl font-black text-slate-900">
                        {property.bathrooms} KM
                      </div>
                    </div>
                  )}

                  {property.landSize && (
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
                        <Maximize2 className="w-4 h-4 text-[#3178A1]" />
                        <span>Luas Tanah</span>
                      </div>
                      <div className="text-xl font-black text-slate-900">
                        {property.landSize}
                      </div>
                    </div>
                  )}

                  {property.buildingSize && (
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
                        <Building className="w-4 h-4 text-[#3178A1]" />
                        <span>Bangunan</span>
                      </div>
                      <div className="text-xl font-black text-slate-900">
                        {property.buildingSize}
                      </div>
                    </div>
                  )}
                </div>

                {property.ownership && (
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                    <span className="uppercase tracking-wider">Status Legalitas:</span>
                    <span className="text-[#3178A1] font-black bg-[#EBF4F9] px-3 py-1 rounded-full">
                      {property.ownership}
                    </span>
                  </div>
                )}
              </div>

              {/* Description Overview */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Deskripsi Properti
                </h2>
                <div className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed space-y-4">
                  <p>{property.description}</p>
                  <p className="text-xs text-slate-500 italic bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                    * Informasi ini merupakan konten ilustrasi untuk pratinjau layout calon klien Bali Property 8833.
                  </p>
                </div>
              </div>

              {/* Features & Amenities List */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Fasilitas & Keunggulan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {property.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-100"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3178A1] shrink-0" />
                      <span className="text-sm font-bold text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Informasi Lokasi
                  </h2>
                  <span className="text-xs font-bold text-[#3178A1]">{property.location}</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[16/8] bg-slate-100 border border-slate-200 flex items-center justify-center p-6 text-center">
                  <div className="relative z-10 max-w-md bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#3178A1]/10 text-[#3178A1] flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      {property.area}, Bali
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-semibold">
                      Akses jalan mudah, dekat pantai, kafe, dan kawasan pariwisata premium.
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#3178A1] font-black uppercase tracking-wider">
                      Titik lokasi & jadwal survei tersedia via WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4/12: Sticky Inquiry Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Inquiry Box */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-lg">
                  <div className="border-b border-slate-100 pb-4 mb-5">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-black">
                      Indikasi Harga
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
                      {property.price}
                    </div>
                    {property.priceDetail && (
                      <div className="text-xs text-[#3178A1] font-bold mt-1">
                        {property.priceDetail}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    Tertarik dengan Unit Ini?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed mb-6">
                    Hubungi tim kami langsung via WhatsApp untuk ketersediaan unit, jadwal survei, dan negosiasi.
                  </p>

                  {/* Primary WhatsApp Action */}
                  <a
                    href={defaultWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#31BB32] hover:bg-[#289c29] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#31BB32]/25 active:scale-98"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  {/* WhatsApp Message Preview */}
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                    <span className="font-bold text-slate-800 block mb-1">
                      Pesan otomatis:
                    </span>
                    <span className="italic">
                      "Hello Bali Property 8833, I am interested in {property.title} ({property.location}). Could you provide more information?"
                    </span>
                  </div>

                  {/* Agency Trust Badges */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600 font-semibold">
                    <div className="flex items-center justify-between">
                      <span>Agency</span>
                      <span className="font-extrabold text-slate-900">Bali Property 8833</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>WhatsApp Hotline</span>
                      <span className="font-extrabold text-[#31BB32]">{SITE_CONFIG.phoneFormatted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Google Rating</span>
                      <span className="font-extrabold text-slate-900">4.9 ★ (49 Reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Consultation Card */}
                <div className="p-6 rounded-3xl bg-[#EBF4F9] border border-[#3178A1]/20 text-xs text-slate-700 space-y-2">
                  <div className="text-sm font-black text-[#215F82]">
                    Butuh Pilihan Lokasi Lain?
                  </div>
                  <p className="font-semibold leading-relaxed">
                    Sampaikan kriteria spesifik Anda dan tim Bali Property 8833 akan mencarikan opsi yang tepat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Properties Row */}
          {relatedProperties.length > 0 && (
            <div className="mt-20 pt-16 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-black tracking-widest text-[#3178A1] uppercase mb-1 block">
                    REKOMENDASI LAINNYA
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Properti Pilihan Lainnya
                  </h3>
                </div>
                <Link
                  href="/#properties"
                  className="text-xs font-black uppercase tracking-wider text-[#3178A1] hover:underline"
                >
                  Lihat Semua →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProperties.map((item) => (
                  <Link
                    key={item.id}
                    href={`/properties/${item.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={item.heroImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-[#3178A1] text-white text-[10px] font-black uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-bold text-[#3178A1]">{item.location}</div>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#3178A1] transition-colors mt-0.5 line-clamp-1">
                        {item.title}
                      </h4>
                      <div className="mt-2 text-xs font-black text-slate-900">
                        {item.price}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Sticky Mobile WhatsApp Bar */}
      <StickyMobileBar
        propertyTitle={property.title}
        propertyLocation={property.location}
      />

      <Footer />
    </div>
  );
}
