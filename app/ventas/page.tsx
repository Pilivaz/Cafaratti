"use client"

import { Phone, MessageCircle, Mail, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VentasPage() {
  const salesProcess = [
    {
      step: 1,
      title: "Contacto Inicial",
      description: "Comunicate con nuestro equipo de ventas por el canal de tu preferencia",
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "Analizamos tus necesidades y te ofrecemos la mejor solución",
    },
    {
      step: 3,
      title: "Cotización",
      description: "Recibís una propuesta detallada con precios y condiciones",
    },
    {
      step: 4,
      title: "Confirmación",
      description: "Confirmás tu pedido y coordinamos la entrega",
    },
  ]

  const salesTeam = [
    {
      name: "Carlos Rodríguez",
      position: "Gerente de Ventas",
      phone: "+54 9 11 2345-6789",
      email: "carlos@cafaratti.com.ar",
      zone: "Zona Norte",
    },
    {
      name: "María González",
      position: "Ejecutiva de Ventas",
      phone: "+54 9 11 3456-7890",
      email: "maria@cafaratti.com.ar",
      zone: "Zona Sur",
    },
    {
      name: "Juan Pérez",
      position: "Ejecutivo de Ventas",
      phone: "+54 9 11 4567-8901",
      email: "juan@cafaratti.com.ar",
      zone: "Zona Oeste",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Ventas</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hacé tu pedido de forma fácil y rápida. Nuestro equipo está listo para atenderte
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¿Cómo hacer tu pedido?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elegí el canal que más te convenga para contactarnos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-6">La forma más rápida y directa de hacer tu pedido</p>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white w-full"
                onClick={() => window.open("https://wa.me/5491234567890", "_blank")}
              >
                Contactar por WhatsApp
              </Button>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Teléfono</h3>
              <p className="text-gray-600 mb-6">Llamanos directamente para atención personalizada</p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => (window.location.href = "tel:+5491234567890")}
              >
                Llamar Ahora
              </Button>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-6">Envianos tu consulta por correo electrónico</p>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => (window.location.href = "mailto:ventas@cafaratti.com.ar")}
              >
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proceso de Venta</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Así de simple es hacer tu pedido con nosotros</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salesProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestro Equipo de Ventas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales especializados listos para atenderte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {salesTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="bg-slate-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.zone}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-700">{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-700">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Clock className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Horarios de Atención</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Lunes a Viernes</h3>
                  <p className="text-lg">8:00 - 18:00 hs</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Sábados</h3>
                  <p className="text-lg">8:00 - 13:00 hs</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                <p className="text-yellow-400 font-medium">¡Atención 24/7 por WhatsApp para pedidos urgentes!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
