"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Base de datos de productos con logos
const productsDatabase = {
  "quilmes-clasica": {
    name: "Quilmes Clásica",
    category: "Cervezas",
    logo: "/logo-rsr-cafaratti.png", // Placeholder - se puede cambiar por logo específico de Quilmes
    image: "/placeholder.svg?height=400&width=400",
    description:
      "La cerveza argentina por excelencia. Quilmes Clásica es una cerveza rubia de sabor equilibrado y refrescante, elaborada con los mejores ingredientes y la tradición de más de 130 años.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml, Barril 5L",
    externalLink: "https://www.quilmes.com.ar",
  },
  brahma: {
    name: "Brahma",
    category: "Cervezas",
    logo: "/logo-rsr-cafaratti.png", // Placeholder
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Cerveza premium de gran calidad con un sabor único y refrescante. Brahma combina tradición e innovación para ofrecer una experiencia cervecera excepcional.",
    presentation: "Botella 340ml, Botella 970ml, Lata 473ml",
    externalLink: "https://www.brahma.com.ar",
  },
  "stella-artois": {
    name: "Stella Artois",
    category: "Cervezas",
    logo: "/logo-rsr-cafaratti.png", // Placeholder
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Cerveza belga de prestigio mundial. Stella Artois es una cerveza premium con más de 600 años de historia, conocida por su sabor refinado y su calidad excepcional.",
    presentation: "Botella 330ml, Botella 710ml, Lata 473ml",
    externalLink: "https://www.stellaartois.com",
  },
  pepsi: {
    name: "Pepsi",
    category: "Gaseosas",
    logo: "/pepsi-logo.png",
    image: "/pepsi-lata.png", // Cambiar de placeholder a la imagen real
    description:
      "La gaseosa cola de sabor único y refrescante. Pepsi ofrece el equilibrio perfecto entre dulzor y acidez, siendo la elección ideal para acompañar cualquier momento.",
    presentation: "Botella 500ml, Botella 1.5L, Botella 2.25L, Lata 354ml",
    externalLink: "https://www.pepsi.com.ar",
  },
  "seven-up": {
    name: "Seven Up",
    category: "Gaseosas",
    logo: "/logo-rsr-cafaratti.png", // Placeholder
    image: "/placeholder.svg?height=400&width=400",
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
            {/* Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 flex items-center justify-center h-[600px]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
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
