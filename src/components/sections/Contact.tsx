"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, MessageCircle, ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getQuoteWhatsAppLink, getWhatsAppLink } from "@/lib/whatsapp";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "+507 6660-4603",
    href: "whatsapp",
  },
  {
    icon: Mail,
    title: "Email",
    details: "ventas@discosybrocasdelistmo.com",
    href: "mailto:ventas@discosybrocasdelistmo.com",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: "Ciudad de Panamá, Panamá",
  },
  {
    icon: Clock,
    title: "Horario",
    details: "Lun - Vie: 8:00 AM - 5:00 PM",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F4F6F8] -skew-x-12 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#1D1D1B] text-white font-heading font-bold text-xs uppercase tracking-[0.2em] px-3 py-1 mb-4"
            >
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-[#1D1D1B] uppercase tracking-tight leading-[1.05] mb-6"
            >
              Hablemos de
              <br />
              tu proyecto
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6B7280] text-lg leading-relaxed mb-12"
            >
              ¿Tienes preguntas? Escríbenos por WhatsApp y te
              responderemos a la brevedad con la mejor solución
              para tus necesidades.
            </motion.p>

            {/* Contact info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-[#F4F6F8] flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-[#1D1D1B]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280]">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href === "whatsapp" ? getWhatsAppLink() : item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1D1D1B] font-medium hover:text-[#1272B9] transition-colors break-all"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-[#1D1D1B] font-medium">{item.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-[#1D1D1B] p-10 lg:p-12 text-white relative overflow-hidden">
              {/* Blue chevron accent */}
              <div className="absolute inset-y-0 -right-16 w-48 bg-[#1272B9]/20 clip-chevron" />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1272B9]" />

              <div className="relative">
                <div className="w-16 h-16 bg-[#1272B9] flex items-center justify-center mb-8">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase tracking-tight mb-4">
                  Escríbenos por
                  <br />
                  WhatsApp
                </h3>

                <p className="text-white/70 mb-8 leading-relaxed">
                  La forma más rápida de obtener información sobre
                  nuestros productos y cotizaciones personalizadas.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#1272B9] hover:bg-[#0D5A94] text-white rounded-sm h-14 text-base font-semibold transition-all duration-300 group"
                >
                  <a
                    href={getQuoteWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Iniciar Conversación
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    En línea ahora
                  </div>
                  <div>Respuesta en minutos</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
