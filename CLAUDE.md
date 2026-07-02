# Discos y Brocas del Istmo

Landing page y catálogo de productos para distribuidor de herramientas de diamante premium en Panamá.

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Estilos**: Tailwind CSS 4 + shadcn/ui
- **Package Manager**: pnpm (NO usar npm)
- **Lenguaje**: TypeScript
- **Icons**: lucide-react

## Comandos

```bash
pnpm dev      # Servidor de desarrollo
pnpm build    # Build de producción
pnpm start    # Servidor de producción
pnpm lint     # Linting
```

## Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales + paleta de colores
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Products, CTA, Contact
│   ├── products/           # ProductCard
│   └── ui/                 # Componentes shadcn
├── data/
│   ├── json/               # Datos de productos y categorías
│   │   ├── categories.json
│   │   └── products.json
│   └── products.ts         # Tipos e importación de datos
├── lib/
│   ├── utils.ts            # Utilidades (cn)
│   └── whatsapp.ts         # Funciones de WhatsApp
└── public/
    └── images/             # Logo y recursos
```

## Paleta de Colores (del logo)

- Navy: `#1a3a5c` (primario)
- Blue Brand: `#2d6aa0`
- Orange Brand: `#e87722` (acento)
- Steel: `#6b7280`

## Datos de Productos

Los productos y categorías se gestionan en archivos JSON en `src/data/json/`:

- `categories.json`: Categorías de productos
- `products.json`: Lista de productos con specs

Para agregar productos, editar el JSON correspondiente.

## Contacto

Todo el contacto va a WhatsApp. El número se configura en `src/lib/whatsapp.ts`.

## Dominio

www.discosybrocasdelistmo.com
