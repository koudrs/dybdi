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

## Identidad Visual (marca KERN-DEUDIAM)

El cliente es distribuidor autorizado de KERN-DEUDIAM® en Panamá. El diseño sigue el estilo del sitio y catálogo oficial (https://kern-deudiam.com/):

- KD Blue: `#1272B9` (primario)
- KD Blue Dark: `#0D5A94`
- KD Black: `#1D1D1B`
- Gray: `#6B7280`, Gray Light: `#F4F6F8`
- Tipografía headings: Oswald (condensada, uppercase) vía `--font-heading`
- Estilo: esquinas rectas (radius mínimo), chevrones azules angulares (`.clip-chevron`), tablas de variantes estilo catálogo
- Referencias de marca en `elementos/` (catálogo PDF oficial, logos)

## Datos de Productos

Los productos y categorías se gestionan en archivos JSON en `src/data/json/`:

- `categories.json`: Categorías de productos
- `products.json`: Líneas de producto agrupadas; cada línea tiene `variants[]` con `{ sku, size, segment? }` (código + medida, como el catálogo oficial)

Para agregar modelos/medidas, agregar variantes a la línea correspondiente en el JSON.

## Contacto

Todo el contacto va a WhatsApp. El número se configura en `src/lib/whatsapp.ts`.

## Dominio

www.discosybrocasdelistmo.com
