"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

// Base de datos de productos por categoría
const categoryProducts = {
  cervezas: {
    name: "Cervezas",
    description: "Las mejores cervezas nacionales e importadas para tu negocio",
    image: "/cervezas-grupo.jpg",
    products: [
      {
        name: "Quilmes Clásica",
        slug: "quilmes-clasica",
        image: "/quilmes-stout-lata.png",
      },
      {
        name: "Quilmes Stout",
        slug: "quilmes-stout",
        image: "/quilmes-stout-lata.png",
      },
      {
        name: "Quilmes Ipa",
        slug: "quilmes-ipa",
        image: "/quilmes-ipa-lata.png",
      },
      {
        name: "Quilmes Sin Alcohol",
        slug: "quilmes-sin-alcohol",
        image: "/quilmes-cero-lata.png",
      },
      {
        name: "Brahma",
        slug: "brahma",
        image: "/brahma-lata.webp",
      },
      {
        name: "Brahma Dorada",
        slug: "brahma-dorada",
        image: "/brahmaDorada-lata.webp",
      },
      {
        name: "Stella Artois",
        slug: "stella-artois",
        image: "/stellaArtois-lata.png",
      },
      {
        name: "Stella Artois Blanche",
        slug: "stella-artois-blanche",
        image: "/stellaArtois-blanche-lata.webp",
      },
      {
        name: "Stella Artois Noire",
        slug: "stella-artois-noire",
        image: "/stellaArtois-noire-lata.webp",
      },
      {
        name: "Stella Artois Cero",
        slug: "stella-artois-sin-alcohol",
        image: "/stellaArtois-cero-lata.webp",
      },
      {
        name: "Corona",
        slug: "corona",
        image: "/corona-lata.webp",
      },
      {
        name: "Corona Sin Alcohol",
        slug: "corona-sin-alcohol",
        image: "/corona-cero-botellaChica.webp",
      },
      {
        name: "Budweiser",
        slug: "budweiser",
        image: "/budweiser-lata.webp",
      },
    ],
  },
  gaseosas: {
    name: "Gaseosas",
    description: "Refrescantes bebidas gaseosas de las mejores marcas",
    image: "/pepsi-producto.png",
    products: [
      {
        name: "Pepsi",
        slug: "pepsi",
        image: "/pepsi-producto.png",
      },
      {
        name: "Pepsi Zero",
        slug: "pepsi-zero",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Seven Up",
        slug: "seven-up",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Paso de los Toros",
        slug: "paso-de-los-toros",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Mirinda",
        slug: "mirinda",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Guaraná Antarctica",
        slug: "guarana-antarctica",
        image: "/placeholder.svg?height=200&width=150",
      },
    ],
  },
  isotonicas: {
    name: "Isotónicas",
    description: "Bebidas deportivas para hidratación y rendimiento",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      {
        name: "Gatorade",
        slug: "gatorade",
        image: "/placeholder.svg?height=200&width=150",
      },
    ],
  },
  "saborizadas-jugos": {
    name: "Saborizadas y Jugos",
    description: "Bebidas saborizadas y jugos naturales",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      {
        name: "Awafrut",
        slug: "awafrut",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "H2OH!",
        slug: "h2oh",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Tropicana",
        slug: "tropicana",
        image: "/placeholder.svg?height=200&width=150",
      },
    ],
  },
  aguas: {
    name: "Aguas",
    description: "Aguas minerales y purificadas de primera calidad",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      {
        name: "Eco de los Andes",
        slug: "eco-de-los-andes",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Nestlé Pureza Vital",
        slug: "nestle-pureza-vital",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Glaciar",
        slug: "glaciar",
        image: "/placeholder.svg?height=200&width=150",
      },
    ],
  },
  energizantes: {
    name: "Energizantes",
    description: "Bebidas energizantes para momentos de máxima energía",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      {
        name: "Red Bull Original",
        slug: "red-bull-original",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Red Bull Sugar Free",
        slug: "red-bull-sugar-free",
        image: "/placeholder.svg?height=200&width=150",
      },
    ],
  },
  vinos: {
    name: "Vinos",
    description: "Selección de vinos tintos y blancos premium",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      {
        name: "Capriccio Malbec",
        slug: "capriccio-malbec",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Capriccio Cabernet Sauvignon",
        slug: "capriccio-cabernet-sauvignon",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Dante Robino Reserva",
        slug: "dante-robino-reserva",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Novecento Malbec",
        slug: "novecento-malbec",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Novecento Cabernet",
        slug: "novecento-cabernet",
        image: "/placeholder.svg?height=200&width=150",
      },
      {
        name: "Novecento Blend",
        slug: "novecento-blend",
        image: "/placeholder.svg?height=200&width=150",
      },
    ],
  },
}

// Categorías para mostrar al final
const allCategories = [
  {
    id: "cervezas",
    name: "Cervezas",
    slug: "cervezas",
    image: "/cervezas-grupo.jpg",
    productCount: 13,
  },
  {
    id: "gaseosas",
    name: "Gaseosas",
    slug: "gaseosas",
    image: "/pepsi-producto.png",
    productCount: 6,
  },
  {
    id: "isotonicas",
    name: "Isotónicas",
    slug: "isotonicas",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 1,
  },
  {
    id: "saborizadas",
    name: "Saborizadas y Jugos",
    slug: "saborizadas-jugos",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 3,
  },
  {
    id: "aguas",
    name: "Aguas",
    slug: "aguas",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 3,
  },
  {
    id: "energizantes",
    name: "Energizantes",
    slug: "energizantes",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 2,
  },
  {
    id: "vinos",
    name: "Vinos",
    slug: "vinos",
    image: "/placeholder.svg?height=300&width=400",
    productCount: 6,
  },
]

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const categoria = params.categoria as string

  const categoryData = categoryProducts[categoria as keyof typeof categoryProducts]

  const handleBackClick = () => {
    router.push("/productos")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleProductClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleCategoryClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  if (!categoryData) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Categoría no encontrada</h1>
          <Button onClick={handleBackClick}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Productos
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={handleBackClick}
            variant="outline"
            className="mb-6 border-slate-900 text-slate-900 hover:bg-yellow-400 hover:text-slate-900 hover:border-yellow-400 bg-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Productos
          </Button>

          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">{categoryData.name}</h1>
            <p className="text-xl text-gray-300 mb-6">{categoryData.description}</p>
            <div className="flex items-center justify-center text-yellow-400">
              <Package className="h-5 w-5 mr-2" />
              <span className="font-semibold">{categoryData.products.length} productos disponibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Category Image - Left Side */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl sticky top-8">
                <div className="relative h-80">
                  <Image
                    src={categoryData.image || "/placeholder.svg"}
                    alt={categoryData.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Products Grid - Right Side */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Todos los Productos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryData.products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Product Image */}
                    <div className="relative h-32 mb-4 bg-white rounded-lg flex items-center justify-center">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={100}
                        height={120}
                        className="object-contain max-h-full"
                      />
                    </div>

                    {/* Product Name */}
                    <h3 className="font-semibold text-slate-900 mb-3 text-center text-sm">{product.name}</h3>

                    {/* Ver Más Button */}
                    <Link
                      href={`/producto/${product.slug}`}
                      onClick={handleProductClick}
                      className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-yellow-400 hover:text-slate-900 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
                    >
                      Ver más
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Otras Categorías</h2>
            <p className="text-xl text-gray-600">Explorá todas nuestras categorías de productos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {allCategories
              .filter((cat) => cat.slug !== categoria)
              .map((category) => (
                <Link
                  key={category.id}
                  href={`/productos/${category.slug}`}
                  onClick={handleCategoryClick}
                  className="group bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                    {/* Product Count Badge */}
                    <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {category.productCount} productos
                    </div>
                  </div>

                  {/* Category Name */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-200">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
