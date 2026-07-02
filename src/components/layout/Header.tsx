"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getQuoteWhatsAppLink } from "@/lib/whatsapp";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Productos", href: "#productos" },
  { name: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-18 sm:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-full.png"
              alt="Discos y Brocas del Istmo"
              width={320}
              height={90}
              className="h-10 sm:h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#1a3a5c] hover:text-[#e87722] transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#e87722] hover:bg-[#d06a1d] text-white rounded-lg px-5 h-10 text-sm font-semibold transition-all duration-300 ml-2"
            >
              <a
                href={getQuoteWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Cotizar
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menú"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#1a3a5c]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1a3a5c]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base font-medium text-[#1a3a5c] hover:text-[#e87722] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full bg-[#e87722] hover:bg-[#d06a1d] text-white rounded-lg h-12 text-base font-medium"
                >
                  <a
                    href={getQuoteWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Cotización
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
