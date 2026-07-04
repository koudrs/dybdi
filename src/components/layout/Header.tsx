"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top bar - brand black */}
      <div className="bg-[#1D1D1B] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-9 text-xs">
          <p className="font-medium tracking-wide uppercase">
            Distribuidor autorizado <span className="font-bold">KERN-DEUDIAM®</span> en Panamá
          </p>
          <a
            href={getQuoteWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 font-semibold hover:text-white/80 transition-colors"
          >
            <Phone className="h-3 w-3" />
            +507 6660-4603
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white border-b border-[#E4E7EB]"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 sm:h-18 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo-full.png"
                alt="Discos y Brocas del Istmo"
                width={320}
                height={90}
                className="h-9 sm:h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-7 lg:gap-9">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-heading text-sm font-medium uppercase tracking-wide text-[#1D1D1B] hover:text-[#1272B9] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#1272B9] hover:bg-[#0D5A94] text-white rounded-sm px-5 h-10 text-sm font-semibold transition-all duration-300 ml-2"
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
              className="md:hidden p-2 -mr-2 rounded-sm hover:bg-gray-100 transition-colors"
              aria-label="Menú"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#1D1D1B]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1D1D1B]" />
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
                    className="block py-3 font-heading text-base font-medium uppercase tracking-wide text-[#1D1D1B] hover:text-[#1272B9] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3">
                  <Button
                    asChild
                    className="w-full bg-[#1272B9] hover:bg-[#0D5A94] text-white rounded-sm h-12 text-base font-medium"
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
      </div>
    </motion.header>
  );
}
