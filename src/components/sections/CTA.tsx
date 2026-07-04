"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getQuoteWhatsAppLink } from "@/lib/whatsapp";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-[#1D1D1B] relative overflow-hidden">
      {/* Chevron decorations (catalog style) */}
      <div className="absolute inset-y-0 -left-24 w-96 bg-[#1272B9]/15 clip-chevron hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-72 bg-white/5 clip-corner hidden md:block" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 mb-8">
            <MessageCircle className="h-4 w-4 text-[#3D93D4]" />
            <span className="text-sm font-medium text-white/90">
              Respuesta en menos de 1 hora
            </span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05] mb-6"
        >
          ¿Listo para comenzar
          <br />
          tu proyecto?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12"
        >
          Contáctanos ahora y recibe asesoría personalizada sobre
          las mejores herramientas para tu trabajo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#1272B9] hover:bg-[#0D5A94] text-white rounded-sm px-8 h-14 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
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
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-sm px-8 h-14 text-base font-semibold border-2 border-white/40"
          >
            <a
              href={getQuoteWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm"
        >
          {["Respuesta rápida", "Asesoría técnica", "Sin compromiso"].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1272B9]" />
                {item}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
