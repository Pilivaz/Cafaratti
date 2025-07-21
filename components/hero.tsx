"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Award, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleProductsClick = () => {
    router.push("/productos")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleContactClick = () => {
    router.push("/contacto")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            RSR <span className="text-yellow-400">Cafaratti</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Distribución de bebidas líderes con más de 90 años de experiencia en el mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3"
              onClick={handleProductsClick}
            >
              Conocer Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              onClick={handleContactClick}
            >
              Contactar Ahora
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Award className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">+90 Años</h3>
              <p className="text-gray-300">de experiencia</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Truck className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Distribución</h3>
              <p className="text-gray-300">en toda la región</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Users className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Marcas Líderes</h3>
              <p className="text-gray-300">de primera calidad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
