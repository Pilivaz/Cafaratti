"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Help Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-3rem)]">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-slate-900">¿Necesitás ayuda?</h3>
            <p className="text-sm text-gray-600 mt-1">Estamos aquí para ayudarte con tus consultas</p>
          </div>
          <div className="p-4 space-y-3">
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open("https://wa.me/5491234567890", "_blank")}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contactar por WhatsApp
            </Button>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => (window.location.href = "tel:+5491234567890")}
            >
              Llamar Ahora
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => (window.location.href = "/contacto")}>
              Formulario de Contacto
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
