import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROPERTIES, Property } from "@/data/properties";
import PropertyDetailClient from "./PropertyDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    return {
      title: "Property Not Found | Bali Property 8833",
    };
  }

  return {
    title: `${property.title} in ${property.location} | Bali Property 8833`,
    description: `${property.highlight}. Explore ${property.title} with direct WhatsApp inquiry from Bali Property 8833.`,
    openGraph: {
      title: `${property.title} | Bali Property 8833`,
      description: property.highlight,
      images: [
        {
          url: property.heroImage,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = PROPERTIES.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PropertyDetailClient
      property={property}
      relatedProperties={relatedProperties}
    />
  );
}
