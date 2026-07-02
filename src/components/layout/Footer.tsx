import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const navigation = {
  main: [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Productos", href: "#productos" },
    { name: "Contacto", href: "#contacto" },
  ],
  products: [
    { name: "Discos de Diamante", href: "#productos" },
    { name: "Brocas de Diamante", href: "#productos" },
    { name: "Maquinaria", href: "#productos" },
    { name: "Accesorios", href: "#productos" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2337] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-white.svg"
                alt="Discos y Brocas del Istmo"
                width={40}
                height={40}
                className=""
              />
              <div>
                <p className="text-sm font-bold tracking-tight">
                  Discos y Brocas
                </p>
                <p className="text-xs text-white/60 font-medium">
                  del Istmo
                </p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Distribuidor autorizado de herramientas de diamante premium en Panamá.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Productos
            </h3>
            <ul className="space-y-2.5">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contacto
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-[#25d366] transition-colors"
                >
                  +507 6660-4603
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventas@discosybrocasdelistmo.com"
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  ventas@discosybrocasdelistmo.com
                </a>
              </li>
              <li className="text-sm text-white/70">
                Ciudad de Panamá
              </li>
              <li className="text-sm text-white/70">
                Lun - Vie: 8:00 - 17:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-white/40">
              <span>© {currentYear} Discos y Brocas del Istmo</span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e87722]" />
                Made in Germany
              </span>
            </div>
            <a
              href="https://koudrs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Desarrollado por <span className="font-medium">Koudrs</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
