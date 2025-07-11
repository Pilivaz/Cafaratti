"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductosPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const categories = [
    {
      id: "cervezas",
      name: "Cervezas",
      image: "/quilmes-poster.jpg",
      products: [
        "Quilmes Clásica",
        "Quilmes Stout",
        "Quilmes Red Lager",
        "Quilmes Cristal",
        "Brahma",
        "Brahma Dorada",
        "Brahma Light",
        "Brahma Chopp",
        "Stella Artois",
        "Stella Artois Sin Alcohol",
        "Iguana",
        "Iguana Lemon",
        "Iguana Guaraná",
        "Patagonia Weisse",
        "Patagonia Bohemian Pilsener",
        "Patagonia Amber Lager",
        "Corona Extra",
        "Corona Light",
        "Budweiser",
        "Bud Light",
        "Heineken",
        "Heineken 0.0",
      ],
    },
    {
      id: "gaseosas",
      name: "Gaseosas",
      image: "/placeholder.svg?height=200&width=300",
      products: ["Pepsi", "Pepsi Zero", "Seven Up", "Paso de los Toros", "Mirinda", "Guaraná Antarctica"],
    },
    {
      id: "isotonicas",
      name: "Isotónicas",
      image: "/placeholder.svg?height=200&width=300",
      products: ["Gatorade"],
    },
    {
      id: "saborizadas",
      name: "Saborizadas y Jugos",
      image: "/placeholder.svg?height=200&width=300",
      products: ["Awafrut", "H2OH!", "Tropicana"],
    },
    {
      id: "aguas",
      name: "Aguas",
      image: "/placeholder.svg?height=200&width=300",
      products: ["Eco de los Andes", "Nestlé Pureza Vital", "Glaciar"],
    },
    {
      id: "energizantes",
      name: "Energizantes",
      image: "/placeholder.svg?height=200&width=300",
      products: ["Red Bull Original", "Red Bull Sugar Free"],
    },
    {
      id: "vinos",
      name: "Vinos",
      image: "/placeholder.svg?height=200&width=300",
      products: [
        "Capriccio Malbec",
        "Capriccio Cabernet Sauvignon",
        "Dante Robino Reserva",
        "Novecento Malbec",
        "Novecento Cabernet",
        "Novecento Blend",
      ],
    },
  ]

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Distribuimos las marcas más reconocidas y de mayor calidad del mercado, organizadas por categorías
          </p>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
                      <p className="text-gray-600">{category.products.length} productos disponibles</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {openCategory === category.id ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Category Products */}
                {openCategory === category.id && (
                  <div className="border-t border-gray-200 p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.products.map((product, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                        >
                          <div className="relative h-32 mb-4 bg-white rounded-lg flex items-center justify-center">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt={product}
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-center">{product}</h4>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-transparent hover:bg-slate-900 hover:text-white"
                            onClick={() => {
                              const slug = product
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w-]/g, "")
                              window.location.href = `/producto/${slug}`
                            }}
                          >
                            Más Información
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Interesado en nuestros productos?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contactanos para conocer precios, disponibilidad y condiciones especiales para tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3">
              Solicitar Catálogo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              Contactar Vendedor
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
