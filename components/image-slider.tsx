"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/quilmes-poster.jpg",
      title: "Distribución Profesional",
      description: "Servicio de calidad para nuestros clientes",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=800",
      title: "Marcas Reconocidas",
      description: "Las mejores marcas del mercado",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=800",
      title: "Logística Eficiente",
      description: "Entrega rápida y confiable",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Agregar funciones para navegación manual
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestra Experiencia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de dos décadas distribuyendo las mejores bebidas con el más alto estándar de calidad
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 relative">
                <div className="relative h-96 md:h-[500px]">
                  <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-lg md:text-xl">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-yellow-400" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
