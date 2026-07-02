"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { categories, products as allProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";
import { Disc, CircleDot, CupSoda, Cog, Wrench, Search, X } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  disc: Disc,
  drill: CircleDot,
  cup: CupSoda,
  machine: Cog,
  tools: Wrench,
};

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProducts = useMemo(() => {
    let results = allProducts;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    } else if (activeCategory) {
      results = allProducts.filter((p) => p.category === activeCategory);
    }

    return results;
  }, [searchQuery, activeCategory]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categories[0].id);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setActiveCategory(categories[0].id);
  };

  return (
    <section id="productos" className="py-24 lg:py-32 bg-[#FAFAFA] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-size-[6rem_6rem] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#e87722] font-medium text-sm uppercase tracking-widest mb-4"
          >
            Catálogo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-[#1a3a5c] tracking-tight mb-4"
          >
            Nuestros productos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#737373] text-base lg:text-lg"
          >
            Herramientas profesionales de diamante para corte, perforación y desbaste.
          </motion.p>
        </div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-6"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#737373]" />
            <input
              type="text"
              placeholder="Buscar por nombre o SKU..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-12 rounded-lg border border-[#E5E5E5] bg-white text-[#1a3a5c] placeholder:text-[#737373]/60 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c] transition-all"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4 text-[#737373]" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-[#737373]">
              {filteredProducts.length} resultado{filteredProducts.length !== 1 ? "s" : ""} para "{searchQuery}"
            </p>
          )}
        </motion.div>

        {/* Category tabs */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Disc;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-[#1a3a5c] text-white shadow-lg shadow-[#1a3a5c]/20"
                      : "bg-white text-[#737373] hover:bg-[#1a3a5c]/5 hover:text-[#1a3a5c] border border-[#E5E5E5]"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Products grid */}
        <motion.div
          key={searchQuery || activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a3a5c]/5 flex items-center justify-center">
              <Search className="h-8 w-8 text-[#1a3a5c]/40" />
            </div>
            <p className="text-[#737373] mb-2">
              No se encontraron productos.
            </p>
            <button
              onClick={clearSearch}
              className="text-[#e87722] font-medium text-sm hover:underline"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
