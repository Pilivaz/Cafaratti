"use client"

import Image from "next/image"
import Link from "next/link"

export default function ProductosPage() {
  const categories = [
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
      image: "/gaseosas-grupo.jpg",
      productCount: 6,
    },
    {
      id: "isotonicas",
      name: "Isotónicas",
      slug: "isotonicas",
      image: "/isotonicas-grupo.jpg",
      productCount: 1,
    },
    {
      id: "saborizadas",
      name: "Saborizadas y Jugos",
      slug: "saborizadas-jugos",
      image: "/saborizadas-grupo.jpg",
      productCount: 3,
    },
    {
      id: "aguas",
      name: "Aguas",
      slug: "aguas",
      image: "/aguas-grupo.jpg",
      productCount: 3,
    },
    {
      id: "energizantes",
      name: "Energizantes",
      slug: "energizantes",
      image: "/energizantes-grupo.jpg",
      productCount: 2,
    },
    {
      id: "vinos",
      name: "Vinos",
      slug: "vinos",
      image: "/vinos-grupo.jpg",
      productCount: 6,
    },
  ]

  const handleCategoryClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Nuestros Productos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubrí nuestra amplia gama de productos organizados por categorías. Marcas líderes y calidad garantizada
            para tu negocio.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Explorá por Categorías</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seleccioná una categoría para ver todos los productos disponibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/productos/${category.slug}`}
                onClick={handleCategoryClick}
                className="group bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Category Image */}
                <div className="relative h-64 overflow-hidden">
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
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-200">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿No encontrás lo que buscás?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contactanos para consultar sobre productos específicos, precios mayoristas y condiciones especiales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)}
              className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Contactar Ahora
            </Link>
            <Link
              href="/ventas"
              onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)}
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Solicitar Catálogo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
