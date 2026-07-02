"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25d366] text-white rounded-full shadow-lg shadow-[#25d366]/30 hover:shadow-xl hover:shadow-[#25d366]/40 transition-shadow duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
    </motion.a>
  );
}
