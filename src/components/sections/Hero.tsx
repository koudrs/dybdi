"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { getQuoteWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg.png"
          alt="Herramientas de diamante"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a3a5c] text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#e87722] animate-pulse-subtle" />
              <span className="text-sm font-medium">
                Distribuidor Autorizado — Made in Germany
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1a3a5c] tracking-tight leading-[1.1] mb-8"
          >
            Herramientas de
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">diamante</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-2 left-0 right-0 h-4 bg-[#e87722]/40 z-0 origin-left"
              />
            </span>
            {" "}premium
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#1a3a5c]/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Discos de corte, brocas diamantadas y equipos de perforación
            de la más alta calidad para profesionales de la construcción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#e87722] hover:bg-[#d06a1d] text-white rounded-lg px-8 h-14 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#e87722]/30 hover:-translate-y-0.5"
            >
              <a
                href={getQuoteWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Solicitar Cotización
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white rounded-lg px-8 h-14 text-base font-semibold transition-all duration-300"
            >
              <Link href="#productos" className="flex items-center gap-2">
                Ver Catálogo
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto"
          >
            {[
              { value: "+45", label: "Años experiencia" },
              { value: "100%", label: "Made in Germany" },
              { value: "24/7", label: "Soporte WhatsApp" },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/90 backdrop-blur-sm rounded-lg py-4 px-2 shadow-sm border border-white/50">
                <div className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#1a3a5c]/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link
            href="#nosotros"
            className="flex flex-col items-center gap-2 text-[#1a3a5c]/70 hover:text-[#1a3a5c] transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-widest">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
