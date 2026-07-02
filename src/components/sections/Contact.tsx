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
    <section id="contacto" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F5F5F5] rounded-tr-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#e87722] font-medium text-sm uppercase tracking-widest mb-4"
            >
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-[#1a3a5c] tracking-tight leading-tight mb-6"
            >
              Hablemos de
              <br />
              tu proyecto
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#737373] text-lg leading-relaxed mb-12"
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
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-[#1a3a5c]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#737373]">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href === "whatsapp" ? getWhatsAppLink() : item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a3a5c] font-medium hover:text-[#e87722] transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-[#1a3a5c] font-medium">{item.details}</p>
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
            <div className="bg-[#1a3a5c] rounded-3xl p-10 lg:p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[2rem_2rem]" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[#e87722] flex items-center justify-center mb-8">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
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
                  className="w-full bg-white text-[#1a3a5c] hover:bg-white/90 rounded-lg h-14 text-base font-medium transition-all duration-300 group"
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
