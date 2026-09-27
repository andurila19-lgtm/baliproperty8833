"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Maximize2,
  Layers,
  FileCheck,
  ArrowRight,
  Star,
  Bed,
} from "lucide-react";
import { Property, SITE_CONFIG } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isLand = property.type === "Land";
  const isHouse = property.type === "House";

  const typeLabel =
    property.type === "House"
      ? "Rumah"
      : property.type === "Land"
      ? "Tanah"
      : property.type === "Commercial"
      ? "Komersial"
      : property.type;

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300 h-full">
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
        <img
          src={property.heroImage}
          alt={property.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges Top Left matching baliproperties.id */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 pointer-events-none z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#3178A1] text-[11px] font-black uppercase tracking-wider shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#3178A1] text-[#3178A1]" />
            <span>Unggulan</span>
          </span>

          <span className="px-3 py-1 rounded-full bg-[#3178A1] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
            {typeLabel}
          </span>
        </div>

        {/* Sample Listing pill Top Right */}
        <div className="absolute top-3.5 right-3.5 pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-[10px] font-black uppercase tracking-wider border border-slate-200/80 shadow-xs">
            Sample
          </span>
        </div>

        {/* Tersedia Green Badge Bottom Right */}
        <div className="absolute bottom-3.5 right-3.5 pointer-events-none z-10">
          <span className="px-3.5 py-1 rounded-full bg-[#16A34A] text-white text-xs font-black uppercase tracking-wider shadow-md">
            Tersedia
          </span>
        </div>

        {/* Subtle Watermark bar */}
        <div className="absolute inset-x-0 bottom-0 py-1.5 px-3 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between text-[10px] text-white/80 font-bold pointer-events-none">
          <span>baliproperty8833.com</span>
          <span>{SITE_CONFIG.phoneFormatted}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-base font-black text-slate-900 group-hover:text-[#3178A1] transition-colors line-clamp-1 leading-snug">
          <Link href={`/properties/${property.slug}`}>
            {property.title}
          </Link>
        </h3>

        {/* Location with Pin */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mt-1.5 mb-2">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Excerpt */}
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium mb-4">
          {property.highlight}
        </p>

        {/* Specs List */}
        <div className="mt-auto pt-3.5 border-t border-slate-100 space-y-2 text-xs font-extrabold text-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#3178A1]" />
              <span>{property.landSize || property.buildingSize || "Luas Fleksibel"}</span>
            </div>

            {property.bedrooms ? (
              <div className="flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-[#3178A1]" />
                <span>{property.bedrooms} KT</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3178A1]" />
                <span>{isLand ? "1 Kavling" : "1 Unit"}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-slate-700">
            <div className="flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-[#3178A1]" />
              <span>{property.ownership || "Freehold / SHM"}</span>
            </div>
            {property.bedrooms && (
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#3178A1]" />
                <span>1 Unit</span>
              </div>
            )}
          </div>
        </div>

        {/* Button "Lihat Detail →" */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <Link
            href={`/properties/${property.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#3178A1] hover:bg-[#215F82] text-white text-xs sm:text-sm font-black uppercase tracking-wide transition-all shadow-md shadow-[#3178A1]/20 active:scale-98"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
