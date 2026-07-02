"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Truck, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Calidad Certificada",
    description: "Productos ISO 9001:2015 con garantía de calidad alemana.",
  },
  {
    icon: Headphones,
    title: "Asesoría Experta",
    description: "Equipo técnico para ayudarte a elegir la herramienta correcta.",
  },
  {
    icon: CheckCircle2,
    title: "Soluciones Pro",
    description: "Herramientas para los trabajos más exigentes de la industria.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Distribución a todo Panamá con tiempos competitivos.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F5] -skew-x-12 translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#e87722] font-medium text-sm uppercase tracking-widest mb-4"
            >
              Sobre Nosotros
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-[#1a3a5c] tracking-tight leading-tight mb-6"
            >
              Tu socio en
              <br />
              herramientas de
              <br />
              <span className="text-[#e87722]">diamante</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#737373] text-lg leading-relaxed mb-8"
            >
              En Discos y Brocas del Istmo somos distribuidores autorizados
              de herramientas de diamante premium. Trabajamos con las mejores
              marcas alemanas para ofrecer productos de la más alta calidad
              a profesionales de la construcción en Panamá.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {["+45 años", "Made in Germany", "ISO 9001"].map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] text-sm font-medium text-[#1a3a5c]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e87722]" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right content - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-6 bg-white rounded-2xl border border-[#E5E5E5] hover:border-[#e87722]/30 hover:shadow-xl hover:shadow-[#1a3a5c]/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a3a5c] flex items-center justify-center mb-4 group-hover:bg-[#e87722] transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#737373] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
