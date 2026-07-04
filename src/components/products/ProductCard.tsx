"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { type Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown, Wrench, Check } from "lucide-react";
import { getProductWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const hasSegment = product.variants.some((v) => v.segment);

  return (
    <div className="group h-full flex flex-col bg-white border border-[#E4E7EB] hover:border-[#1272B9]/40 hover:shadow-xl hover:shadow-[#1272B9]/5 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-4/3 bg-white overflow-hidden border-b border-[#E4E7EB]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Wrench className="h-12 w-12 text-[#1272B9]/30" />
          </div>
        )}

      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-5">
        <h3 className="font-heading text-sm sm:text-lg font-bold text-[#1D1D1B] uppercase tracking-tight leading-tight mb-2 group-hover:text-[#1272B9] transition-colors">
          {product.name}
        </h3>

        <p className="text-[#6B7280] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Variants table - catalog style, max ~2 rows visible then scroll */}
        <div
          className={cn(
            "mb-4 border border-[#E4E7EB] overflow-y-auto overscroll-contain",
            product.variants.length > 2 && "max-h-30"
          )}
        >
          <table className="w-full text-[10px] sm:text-xs">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#1D1D1B] text-white font-heading uppercase tracking-wide">
                <th className="text-left font-semibold px-3 py-2">Código</th>
                <th className="text-left font-semibold px-3 py-2">Ø Medidas</th>
                {hasSegment && (
                  <th className="text-left font-semibold px-3 py-2 hidden sm:table-cell">Segmento</th>
                )}
              </tr>
            </thead>
            <tbody>
              {product.variants.map((variant, index) => (
                <tr
                  key={variant.sku}
                  className={cn(
                    "border-t border-[#E4E7EB]",
                    index % 2 === 1 && "bg-[#F4F6F8]"
                  )}
                >
                  <td className="px-3 py-1.5 font-mono font-semibold text-[#1272B9] whitespace-nowrap">
                    {variant.sku}
                  </td>
                  <td className="px-3 py-1.5 text-[#1D1D1B]">{variant.size}</td>
                  {hasSegment && (
                    <td className="px-3 py-1.5 text-[#6B7280] hidden sm:table-cell whitespace-nowrap">
                      {variant.segment || "—"}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pb-4 space-y-4 text-sm">
                {product.features.length > 0 && (
                  <div>
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                      Características
                    </h4>
                    <ul className="space-y-1.5">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-[#1272B9] mt-0.5 shrink-0" />
                          <span className="text-[#1D1D1B]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.applications.length > 0 && (
                  <div>
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                      Aplicaciones
                    </h4>
                    <ul className="space-y-1.5">
                      {product.applications.map((app, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#1D1D1B]/40 mt-2 shrink-0" />
                          <span className="text-[#6B7280]">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.specs && Object.keys(product.specs).length > 0 && (
                  <div>
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                      Especificaciones
                    </h4>
                    <div className="space-y-1.5">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between gap-3 text-xs border-b border-[#E4E7EB] pb-1.5">
                          <span className="text-[#6B7280]">{key}</span>
                          <span className="text-[#1D1D1B] font-medium text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 h-10 sm:h-11 border border-[#1D1D1B]/20 text-[#1D1D1B] text-xs sm:text-sm font-semibold hover:bg-[#1D1D1B] hover:text-white hover:border-[#1D1D1B] transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            Detalles
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                showDetails && "rotate-180"
              )}
            />
          </button>

          <Button
            asChild
            className="flex-1 h-10 sm:h-11 rounded-none bg-[#1272B9] hover:bg-[#0D5A94] text-white text-xs sm:text-sm font-semibold transition-all duration-300"
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
  );
}
