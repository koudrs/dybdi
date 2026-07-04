"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getQuoteWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-white overflow-hidden pt-28 sm:pt-36 pb-14 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 lg:hidden"
            >
              <Image
                src="/images/kern-deudiam.png"
                alt="KERN-DEUDIAM"
                width={780}
                height={263}
                className="h-9 w-auto"
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1B] uppercase tracking-tight leading-[1.05] mb-6"
            >
              Discos, Brocas{" "}
              <span className="text-[#1272B9]">y</span> Maquinaria Profesional
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-24 bg-[#1272B9] origin-left mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#6B7280] max-w-xl mb-8 leading-relaxed"
            >
              Herramientas de diamante <strong className="text-[#1D1D1B]">KERN-DEUDIAM®</strong> de
              calidad alemana para los profesionales de la construcción en Panamá.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#1272B9] hover:bg-[#0D5A94] text-white rounded-sm px-7 h-13 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#1272B9]/25"
              >
                <a
                  href={getQuoteWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5"
                >
                  Solicitar Cotización
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#1D1D1B] text-[#1D1D1B] hover:bg-[#1D1D1B] hover:text-white rounded-sm px-7 h-13 text-base font-semibold transition-all duration-300"
              >
                <Link href="#productos" className="flex items-center justify-center">
                  Ver Catálogo
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-px bg-[#E4E7EB] border border-[#E4E7EB] max-w-lg"
            >
              {[
                { value: "1977", label: "Desde" },
                { value: "100%", label: "Made in Germany" },
                { value: "24/7", label: "Soporte" },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white py-4 px-2">
                  <div className="font-heading text-xl sm:text-2xl font-bold text-[#1272B9] mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#6B7280] font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: blue chevron visual (catalog cover style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-h-140 w-full clip-chevron overflow-hidden">
              <div className="absolute inset-0 bg-[#1272B9]" />
              <Image
                src="/images/hero_bg.webp"
                alt="Herramientas de diamante KERN-DEUDIAM"
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover object-center opacity-30 mix-blend-luminosity"
                priority
              />
              <div className="absolute inset-0 bg-[#1272B9]/30" />

              {/* Content inside chevron */}
              <div className="absolute inset-0 flex flex-col justify-center pl-10 pr-[45%]">
                <Image
                  src="/images/kern-deudiam-white.png"
                  alt="KERN-DEUDIAM"
                  width={780}
                  height={263}
                  className="h-14 w-auto self-start mb-4"
                />
                <p className="text-white/85 leading-relaxed mb-5">
                  Herramientas diamantadas y maquinaria fabricadas en Alemania desde 1977.
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-block px-3 py-1.5 bg-white text-[#1272B9] font-heading font-bold text-xs uppercase tracking-widest">
                    Made in Germany
                  </span>
                  <span className="inline-block px-3 py-1.5 border border-white/60 text-white font-heading font-bold text-xs uppercase tracking-widest">
                    ISO 9001:2015
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
