"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { categories, products as allProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";
import { Disc, CircleDot, CupSoda, Cog, Wrench, Search, X, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 12;

const iconMap: Record<string, React.ElementType> = {
  disc: Disc,
  drill: CircleDot,
  cup: CupSoda,
  machine: Cog,
  tools: Wrench,
  grid: LayoutGrid,
};

function getMixedProducts() {
  const categoryOrder = ["discos-diamante", "brocas-diamante", "maquinaria", "copas-desgaste", "accesorios"];
  const productsByCategory: Record<string, typeof allProducts> = {};

  categoryOrder.forEach((cat) => {
    productsByCategory[cat] = allProducts.filter((p) => p.category === cat);
  });

  const mixed: typeof allProducts = [];
  const maxLength = Math.max(...Object.values(productsByCategory).map((arr) => arr.length));

  for (let i = 0; i < maxLength; i++) {
    categoryOrder.forEach((cat) => {
      if (productsByCategory[cat][i]) {
        mixed.push(productsByCategory[cat][i]);
      }
    });
  }

  return mixed;
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProducts = useMemo(() => {
    let results = allProducts;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.variants.some(
            (v) =>
              v.sku.toLowerCase().includes(query) ||
              v.size.toLowerCase().includes(query)
          )
      );
    } else if (activeCategory === "todas") {
      results = getMixedProducts();
    } else if (activeCategory) {
      results = allProducts.filter((p) => p.category === activeCategory);
    }

    return results;
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
    if (!value.trim()) {
      setActiveCategory(categories[0].id);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
    setActiveCategory(categories[0].id);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setSearchQuery("");
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="productos" className="py-20 lg:py-32 bg-[#F4F6F8] relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header - catalog style */}
        <div className="max-w-2xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="inline-block bg-[#1D1D1B] text-white font-heading font-bold text-xs uppercase tracking-[0.2em] px-3 py-1">
              Catálogo
            </span>
            <span className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest">
              KERN-DEUDIAM®
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl font-bold text-[#1D1D1B] uppercase tracking-tight mb-4"
          >
            Nuestros Productos
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="h-1 w-24 bg-[#1272B9] origin-left mb-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6B7280] text-base lg:text-lg"
          >
            Líneas de producto con todos sus modelos y medidas disponibles. Consulte por código directamente por WhatsApp.
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
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Buscar por nombre, código o medida..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-12 border border-[#E4E7EB] bg-white text-[#1D1D1B] placeholder:text-[#6B7280]/60 focus:outline-none focus:ring-2 focus:ring-[#1272B9]/30 focus:border-[#1272B9] transition-all"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4 text-[#6B7280]" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-[#6B7280]">
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
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide transition-all duration-300",
                    isActive
                      ? "bg-[#1272B9] text-white shadow-lg shadow-[#1272B9]/20"
                      : "bg-white text-[#6B7280] hover:text-[#1272B9] border border-[#E4E7EB] hover:border-[#1272B9]/40"
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
          key={`${searchQuery || activeCategory}-${currentPage}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {paginatedProducts.map((product, index) => (
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
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1272B9]/5 flex items-center justify-center">
              <Search className="h-8 w-8 text-[#1272B9]/40" />
            </div>
            <p className="text-[#6B7280] mb-2">
              No se encontraron productos.
            </p>
            <button
              onClick={clearSearch}
              className="text-[#1272B9] font-medium text-sm hover:underline"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mt-10"
          >
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(
                "flex items-center justify-center w-10 h-10 transition-all",
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-[#E4E7EB] text-[#1D1D1B] hover:bg-[#1272B9] hover:text-white"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={cn(
                  "w-10 h-10 font-heading text-sm font-semibold transition-all",
                  currentPage === page
                    ? "bg-[#1272B9] text-white shadow-lg shadow-[#1272B9]/20"
                    : "bg-white border border-[#E4E7EB] text-[#6B7280] hover:text-[#1272B9] hover:border-[#1272B9]/40"
                )}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(
                "flex items-center justify-center w-10 h-10 transition-all",
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-[#E4E7EB] text-[#1D1D1B] hover:bg-[#1272B9] hover:text-white"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}

        {/* Page info */}
        {totalPages > 1 && (
          <p className="text-center text-sm text-[#6B7280] mt-4">
            Mostrando {(currentPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} de {filteredProducts.length} líneas de producto
          </p>
        )}
      </div>
    </section>
  );
}
