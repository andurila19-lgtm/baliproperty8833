"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown, MessageCircle } from "lucide-react";
import { SITE_CONFIG, getWhatsAppInquiryUrl } from "@/data/properties";

interface NavbarProps {
  forceSolid?: boolean;
}

export default function Navbar({ forceSolid = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Indonesia");

  // Exact menu items matching the user's screenshot:
  // Beranda | Tentang Kami | Properti | Artikel | Contact Us | 🌐 Indonesia ▾
  const navLinks = [
    { label: "Beranda", href: "/#home" },
    { label: "Tentang Kami", href: "/#tentangkami" },
    { label: "Properti", href: "/#properties" },
    { label: "Galeri", href: "/#galeri" },
    { label: "Artikel", href: "/#artikel" },
    { label: "Contact Us", href: "/#contact" },
  ];

  const whatsAppUrl = getWhatsAppInquiryUrl();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 py-3 sm:py-3.5 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Bali Property 8833 Identity) */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white p-0.5 border border-slate-200/80 shadow-xs shrink-0 transition-transform group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Bali Property 8833 Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-extrabold text-base sm:text-lg tracking-tight uppercase flex items-center gap-1 leading-none text-slate-900">
              <span>Bali Property</span>
              <span className="text-[#3178A1]">8833</span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">
              baliproperty8833.com
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links matching screenshot */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-150 hover:text-[#3178A1] ${
                idx === 0 ? "text-[#3178A1] font-extrabold" : "text-[#3178A1]/90 hover:text-[#3178A1]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Dropdown: 🌐 Indonesia ▾ */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-[#3178A1] transition-colors py-1"
            >
              <Globe className="w-4 h-4 text-slate-800" />
              <span>{selectedLang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-700" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-xs font-bold text-slate-700">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLang("Indonesia");
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3.5 py-2 hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Indonesia</span>
                  {selectedLang === "Indonesia" && (
                    <span className="text-[#3178A1]">✓</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLang("English");
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3.5 py-2 hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>English</span>
                  {selectedLang === "English" && (
                    <span className="text-[#3178A1]">✓</span>
                  )}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Header (Language + Hamburger) */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Mobile Language Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 py-1 px-2.5 rounded-lg border border-slate-200 bg-slate-50"
            >
              <Globe className="w-3.5 h-3.5 text-slate-700" />
              <span>ID</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50 text-xs font-bold text-slate-700">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLang("Indonesia");
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-slate-50"
                >
                  Indonesia
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLang("English");
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-slate-50"
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 text-slate-900 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3.5 text-sm font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-slate-800 hover:text-[#3178A1] transition-colors border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#3178A1]">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-5 pt-3 border-t border-slate-100 space-y-2.5">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#31BB32] text-white font-extrabold text-xs uppercase tracking-wider shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Hubungi WhatsApp ({SITE_CONFIG.phoneFormatted})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
