"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, RotateCcw, ArrowRight, Wrench } from "lucide-react";
import { getProductWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group perspective-[1000px] h-full">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full transform-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="relative w-full bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-[#1a3a5c]/20 hover:shadow-2xl hover:shadow-[#1a3a5c]/5 transition-all duration-500 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image container */}
          <div className="relative aspect-4/3 bg-linear-to-br from-[#F5F5F5] to-[#EBEBEB] overflow-hidden">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Wrench className="h-12 w-12 text-[#1a3a5c]/40" />
                </div>
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#1a3a5c]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base font-semibold text-[#1a3a5c] line-clamp-2 group-hover:text-[#e87722] transition-colors leading-tight">
                {product.name}
              </h3>
              <span className="shrink-0 px-2 py-0.5 rounded bg-[#1a3a5c]/10 text-[10px] font-mono font-medium text-[#1a3a5c]">
                {product.sku}
              </span>
            </div>

            <p className="text-[#737373] text-sm mb-3 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-0.5 rounded bg-[#F5F5F5] text-xs font-medium text-[#737373]"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsFlipped(true)}
                className="flex-1 h-11 rounded-lg border border-[#E5E5E5] text-[#1a3a5c] text-sm font-medium hover:bg-[#1a3a5c] hover:text-white hover:border-[#1a3a5c] transition-all duration-300"
              >
                Detalles
              </button>

              <Button
                asChild
                className="flex-1 h-11 rounded-lg bg-[#1a3a5c] hover:bg-[#0f2337] text-white text-sm font-medium transition-all duration-300"
              >
                <a
                  href={getProductWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full bg-[#1a3a5c] rounded-2xl overflow-hidden rotate-y-180 backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col p-6 text-white">
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-4">
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-white/20 text-[10px] font-mono font-medium mb-2">
                  SKU: {product.sku}
                </span>
                <h3 className="text-lg font-semibold leading-tight">
                  {product.name}
                </h3>
              </div>
              <button
                onClick={() => setIsFlipped(false)}
                className="shrink-0 w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto space-y-5 text-sm scrollbar-hide">
              {product.features.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/60 mb-3">
                    Características
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#e87722] mt-2 shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.applications.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/60 mb-3">
                    Aplicaciones
                  </h4>
                  <ul className="space-y-2">
                    {product.applications.map((app, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                        <span className="text-white/80">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.specs && Object.keys(product.specs).length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white/60 mb-3">
                    Especificaciones
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-white/60">{key}</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="pt-5 mt-auto border-t border-white/10">
              <Button
                asChild
                className="w-full h-12 rounded-lg bg-[#e87722] hover:bg-[#d06a1d] text-white text-sm font-medium transition-all duration-300"
              >
                <a
                  href={getProductWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Consultar por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
