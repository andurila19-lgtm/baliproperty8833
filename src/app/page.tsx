"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchResultsSection, { SearchFilterState } from "@/components/SearchResultsSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import PropertyLandSection from "@/components/PropertyLandSection";
import PropertyHouseSection from "@/components/PropertyHouseSection";
import ExploreByTypeAndLocation from "@/components/ExploreByTypeAndLocation";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import FloatingActions from "@/components/FloatingActions";
import { PROPERTIES } from "@/data/properties";

export default function HomePage() {
  const [searchFilters, setSearchFilters] = useState<SearchFilterState>({
    city: "Semua Kota (Bali)",
    type: "Semua Tipe",
    minPrice: "",
    maxPrice: "",
    isActive: false,
  });

  const handleSearch = (filters: {
    city: string;
    type: string;
    minPrice: string;
    maxPrice: string;
  }) => {
    setSearchFilters({
      ...filters,
      isActive: true,
    });
  };

  const handleResetSearch = () => {
    setSearchFilters({
      city: "Semua Kota (Bali)",
      type: "Semua Tipe",
      minPrice: "",
      maxPrice: "",
      isActive: false,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Dynamic Navbar with functional #tentangkami link */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Search Card */}
        <Hero onSearch={handleSearch} />

        {/* 1.5. Real-time Search Results Section (Activates on "Cari Properti") */}
        <SearchResultsSection
          filters={searchFilters}
          onReset={handleResetSearch}
          properties={PROPERTIES}
        />

        {/* 2. Pilihan Terbaik - Produk Unggulan (Swiper Auto-Running Slider) */}
        <FeaturedProperties />

        {/* 3. Kategori Properti - Properti Tanah */}
        <PropertyLandSection />

        {/* 4. Kategori Properti - Properti Rumah */}
        <PropertyHouseSection />

        {/* 5. Jelajahi Properti Bali - Temukan Properti Berdasarkan Tipe dan Lokasi */}
        <ExploreByTypeAndLocation />

        {/* 6. Section Tentang Kami */}
        <AboutSection />

        {/* 7. Section Mengapa Memilih Bali Property 8833? */}
        <WhyChooseUs />

        {/* 8. Galeri Kami - Pilihan Properti Terbaik untuk Masa Depan Anda */}
        <GallerySection />

        {/* 9. Artikel & Wawasan Properti Bali */}
        <ArticlesSection />

        {/* 10. Formulir Kontak & Konsultasi Langsung */}
        <ContactSection />
      </main>

      {/* Floating Action Buttons (WhatsApp + Back to top) */}
      <FloatingActions />

      {/* Sticky Mobile WhatsApp CTA */}
      <StickyMobileBar />

      {/* Footer */}
      <Footer />
    </div>
  );
}
