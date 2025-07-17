"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/product-carousel" // Import the new carousel component

// Base de datos de productos con logos y ahora con imágenes de presentación
const productsDatabase = {
  "quilmes-clasica": {
    name: "Quilmes Clásica",
    category: "Cervezas",
    logo: "/quilmes-logo.webp", // Placeholder - se puede cambiar por logo específico de Quilmes
    image: "/quilmes-clasica-lata.png", // Main image (can be first of presentationImages)
      "/quilmes-clasica-lata.png",
      "/quilmes-clasica-laton.png",
      "/quilmes-clasica-botella.png",
      "/quilmes-clasica-botellaChica.png",
    ],
    description:
      "La cerveza argentina por excelencia. Quilmes Clásica es una cerveza rubia de sabor equilibrado y refrescante, elaborada con los mejores ingredientes y la tradición de más de 130 años.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml, Barril 5L",
    externalLink: "https://www.quilmes.com.ar",
  },
  "quilmes-stout": {
    name: "Quilmes Stout",
    category: "Cervezas",
    logo: "/quilmes-logo.webp", // Placeholder - se puede cambiar por logo específico de Quilmes
    image: "/quilmes-stout-lata.png", // Main image (can be first of presentationImages)
    presentationImages: [
      "/quilmes-stout-lata.png",
      "/quilmes-stout-botella.webp",
    ],
    description:
      "La cerveza argentina por excelencia. Quilmes Clásica es una cerveza rubia de sabor equilibrado y refrescante, elaborada con los mejores ingredientes y la tradición de más de 130 años.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml, Barril 5L",
    externalLink: "https://www.quilmes.com.ar",
  },
  "quilmes-ipa": {
    name: "Quilmes Ipa",
    category: "Cervezas",
    logo: "/quilmes-logo.webp", // Placeholder - se puede cambiar por logo específico de Quilmes
    image: "/quilmes-ipa-lata.png", // Main image (can be first of presentationImages)
    presentationImages: [
      "/quilmes-ipa-lata.png",
      "/quilmes-ipa-botella.webp",
    ],
    description:
      "La cerveza argentina por excelencia. Quilmes Clásica es una cerveza rubia de sabor equilibrado y refrescante, elaborada con los mejores ingredientes y la tradición de más de 130 años.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml, Barril 5L",
    externalLink: "https://www.quilmes.com.ar",
  },
  "quilmes-sin-alcohol": {
    name: "Quilmes Cero",
    category: "Cervezas",
    logo: "/quilmes-logo.webp", // Placeholder - se puede cambiar por logo específico de Quilmes
    image: "/quilmes-cero-lata.png", // Main image (can be first of presentationImages)
    presentationImages: [
      "/quilmes-cero-lata.png",
    ],
    description:
      "La cerveza argentina por excelencia. Quilmes Clásica es una cerveza rubia de sabor equilibrado y refrescante, elaborada con los mejores ingredientes y la tradición de más de 130 años.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml, Barril 5L",
    externalLink: "https://www.quilmes.com.ar",
  },
  brahma: {
    name: "Brahma",
    category: "Cervezas",
    logo: "/brahma-logo.png", // Placeholder
    image: "/brahma-lata.webp",
    presentationImages: [
      "/brahma-lata.webp",
      "/brahma-botella.webp",
    ],
    description:
      "Cerveza premium de gran calidad con un sabor único y refrescante. Brahma combina tradición e innovación para ofrecer una experiencia cervecera excepcional.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml",
    externalLink: "https://www.brahma.com.ar",
  },
  "brahma-dorada": {
    name: "Brahma Dorada",
    category: "Cervezas",
    logo: "/brahma-logo.png", // Placeholder
    image: "/brahmaDorada-lata.webp",
    presentationImages: [
      "/brahmaDorada-lata.webp",
      "/brahmaDorada-botella.webp",
    ],
    description:
      "Cerveza premium de gran calidad con un sabor único y refrescante. Brahma combina tradición e innovación para ofrecer una experiencia cervecera excepcional.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml",
    externalLink: "https://www.brahma.com.ar",
  },
  "stella-artois": {
    name: "Stella Artois",
    category: "Cervezas",
    logo: "/stellaArtois-logo.png", // Placeholder
    image: "/stellaArtois-lata.png",
    presentationImages: [
      "/stellaArtois-lata.png",
      "/stellaArtois-laton.png",
      "/stellaArtois-botella.png",
      "/stellaArtois-botellaChica.png",
    ],
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  "stella-artois-blanche": {
    name: "Stella Artois Blanche",
    category: "Cervezas",
    logo: "/stellaArtois-logo.png", // Placeholder
    image: "/stellaArtois-blanche-lata.webp",
    presentationImages: [
      "/stellaArtois-blanche-lata.webp",
    ],
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  "stella-artois-noire": {
    name: "Stella Artois Noire",
    category: "Cervezas",
    logo: "/stellaArtois-logo.png", // Placeholder
    image: "/stellaArtois-noire-lata.webp",
    presentationImages: [
      "/stellaArtois-noire-lata.webp",
    ],
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  "stella-artois-sin-alcohol": {
    name: "Stella Artois Cero",
    category: "Cervezas",
    logo: "/stellaArtois-logo.png", // Placeholder
    image: "/stellaArtois-cero-lata.webp",
    presentationImages: [
      "/stellaArtois-cero-lata.webp",
      "/stellaArtois-cero-botella.png",
    ],
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  corona: {
    name: "Corona",
    category: "Cervezas",
    logo: "/corona-logo.png", // Placeholder
    image: "/corona-lata.webp",
    presentationImages: [
      "/corona-lata.webp",
      "/corona-botella.webp",
      "/corona-botellaChica.webp",
    ],
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  "corona-sin-alcohol": {
    name: "Corona Sin Alcohol",
    category: "Cervezas",
    logo: "/corona-logo.png", // Placeholder
    image: "/corona-cero-botellaChica.webp",
    presentationImages: [
      "/corona-cero-botellaChica.webp",
    ],
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  budweiser: {
    name: "Budweiser",
    category: "Cervezas",
    logo: "/budweiser-logo.png", // Placeholder
    image: "/budweiser-lata.webp",
    presentationImages: [
      "/budweiser-lata.webp",
      "/budweiser-laton.webp",
      "/budweiser-botella.webp",
      "/budweiser-botellaChica.webp",
    ],
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  pepsi: {
    name: "Pepsi",
    category: "Gaseosas",
    logo: "/pepsi-logo.png",
    image: "/pepsi-lata.jpg", // Main image
    presentationImages: [
      "/pepsi-lata.jpg", // Existing Pepsi can image
      "/pepsi-botellaChica.jpg", // Existing Pepsi bottle image
      "/pepsi-botellaLitro.webp",
      "/pepsi-botella2Litros.jpg",
      "/pepsi-botella3Litros.png",
    ],
    description:
      "La gaseosa cola de sabor único y refrescante. Pepsi ofrece el equilibrio perfecto entre dulzor y acidez, siendo la elección ideal para acompañar cualquier momento.",
    presentation: "Botella 500ml, Botella 1.5L, Botella 2.25L, Lata 354ml",
    externalLink: "https://www.pepsi.com.ar",
  },
  "seven-up": {
    name: "Seven Up",
    category: "Gaseosas",
    logo: "/seven-logo.webp", // Placeholder
    image: "/seven-lata.webp",
    presentationImages: [
      "/seven-lata.webp",
      "/placeholder.svg?height=300&width=150&text=7Up Botella 1.5L",
      "/placeholder.svg?height=200&width=100&text=7Up Botella 500ml",
    ],
    description:
      "Gaseosa lima-limón refrescante y natural. Seven Up es la bebida perfecta para refrescarte con su sabor cítrico único y su fórmula sin cafeína.",
    presentation: "Botella 500ml, Botella 1.5L, Botella 2.25L, Lata 354ml",
    externalLink: "https://www.7up.com.ar",
  },
  gatorade: {
    name: "Gatorade",
    category: "Isotónicas",
    logo: "/logo-rsr-cafaratti.png", // Placeholder
    image: "/placeholder.svg?height=400&width=400",
    presentationImages: [
      "/placeholder.svg?height=400&width=200&text=Gatorade Botella 1L",
      "/placeholder.svg?height=300&width=150&text=Gatorade Botella 500ml",
    ],
    description:
      "La bebida isotónica líder mundial para deportistas. Gatorade repone los electrolitos perdidos durante el ejercicio y ayuda a mantener el rendimiento físico.",
    presentation: "Botella 500ml, Botella 1L, Polvo sobre 23g",
    externalLink: "https://www.gatorade.com.ar",
  },
  "eco-de-los-andes": {
    name: "Eco de los Andes",
    category: "Aguas",
    logo: "/logo-rsr-cafaratti.png", // Placeholder
    image: "/placeholder.svg?height=400&width=400",
    presentationImages: [
      "/placeholder.svg?height=400&width=200&text=Eco Botella 6L",
      "/placeholder.svg?height=300&width=150&text=Eco Botella 1.5L",
      "/placeholder.svg?height=200&width=100&text=Eco Botella 500ml",
    ],
    description:
      "Agua mineral natural premium proveniente de los Andes. Eco de los Andes ofrece pureza y mineralización natural en cada sorbo.",
    presentation: "Botella 500ml, Botella 1.5L, Botella 6L",
    externalLink: null,
  },
  "nestle-pureza-vital": {
    name: "Nestlé Pureza Vital",
    category: "Aguas",
    logo: "/logo-rsr-cafaratti.png", // Placeholder
    image: "/placeholder.svg?height=400&width=400",
    presentationImages: [
      "/placeholder.svg?height=400&width=200&text=Nestle Botella 6L",
      "/placeholder.svg?height=300&width=150&text=Nestle Botella 1.5L",
      "/placeholder.svg?height=200&width=100&text=Nestle Botella 500ml",
    ],
    description:
      "Agua purificada de confianza con la calidad Nestlé. Pureza Vital pasa por rigurosos controles de calidad para garantizar agua pura y segura.",
    presentation: "Botella 500ml, Botella 1.5L, Botella 6L",
    externalLink: "https://www.nestle.com.ar",
  },
}

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const product = productsDatabase[slug as keyof typeof productsDatabase]

  if (!product) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Producto no encontrado</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16">
      {/* Hero Section with Logo + Name + Category */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={product.logo || "/logo-rsr-cafaratti.png"}
                alt={`${product.name} Logo`}
                width={120}
                height={120}
                className="h-20 w-20 object-contain bg-white rounded-full p-2"
              />
            </div>
            {/* Name and Category */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-gray-300">{product.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image Carousel */}
            <div className="relative">
              <ProductCarousel images={product.presentationImages} alt={product.name} />
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Descripción</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Presentaciones</h3>
                {/* Imagen de presentaciones */}
                <div className="mb-4">
                  <Image
                    src="/presentaciones-envases.png"
                    alt="Presentaciones disponibles"
                    width={400}
                    height={100}
                    className="w-full max-w-md h-auto object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{product.presentation}</p>
                </div>
              </div>

              {product.externalLink && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Más Información</h3>
                  <Button
                    onClick={() => window.open(product.externalLink!, "_blank")}
                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visitar Sitio Oficial
                  </Button>
                </div>
              )}

              {/* Botones alineados */}
              <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => router.back()}
                  variant="outline"
                  className="bg-transparent border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver
                </Button>
                <Button
                  onClick={() => router.push("/contacto")}
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3"
                >
                  Solicitar Información
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
