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
    <section className="py-32 bg-[#1a3a5c] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e87722]/10 rounded-lg blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-lg blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 mb-8">
            <MessageCircle className="h-4 w-4 text-[#e87722]" />
            <span className="text-sm font-medium text-white/90">
              Respuesta en menos de 1 hora
            </span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
        >
          ¿Listo para comenzar
          <br />
          tu proyecto?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12"
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
            className="bg-[#e87722] hover:bg-[#d06a1d] text-white rounded-lg px-8 h-14 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#e87722]/30 hover:-translate-y-0.5"
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
            className="text-white hover:bg-white/10 rounded-lg px-8 h-14 text-base font-medium border border-white/20"
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
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/50 text-sm"
        >
          {["Respuesta rápida", "Asesoría técnica", "Sin compromiso"].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e87722]" />
                {item}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
