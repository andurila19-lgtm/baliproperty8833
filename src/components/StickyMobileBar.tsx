"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG, getWhatsAppInquiryUrl } from "@/data/properties";

interface StickyMobileBarProps {
  propertyTitle?: string;
  propertyLocation?: string;
}

export default function StickyMobileBar({
  propertyTitle,
  propertyLocation,
}: StickyMobileBarProps) {
  const whatsAppUrl = getWhatsAppInquiryUrl(propertyTitle, propertyLocation);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 shadow-xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-extrabold">
            {propertyTitle ? "Tanya Unit Ini" : "Bali Property 8833"}
          </span>
          <span className="text-xs font-black text-slate-900 truncate max-w-[160px]">
            {propertyTitle ? propertyTitle : "Konsultasi & Survei"}
          </span>
        </div>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#31BB32] text-white text-xs font-black uppercase tracking-wider shadow-md active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
