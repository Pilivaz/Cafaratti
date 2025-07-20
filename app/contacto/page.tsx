"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contactanos por el medio que prefieras
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Envianos tu consulta</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Contanos en qué podemos ayudarte..."
                  />
                </div>

                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Información de contacto</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Dirección</h3>
                    <p className="text-gray-700">
                      Av. Principal 1234
                      <br />
                      (1234) Ciudad, Buenos Aires
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Teléfono</h3>
                    <p className="text-gray-700">
                      +54 11 4567-8900
                      <br />
                      +54 9 11 6678-4173 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                    <p className="text-gray-700">
                      info@cafaratti.com.ar
                      <br />
                      ventas@cafaratti.com.ar
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Horarios</h3>
                    <p className="text-gray-700">
                      Lunes a Viernes: 8:00 - 18:00 hs
                      <br />
                      Sábados: 8:00 - 13:00 hs
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=5491166784173", "_blank")}
                >
                  Contactar por WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => (window.location.href = "tel:+5491166784173")}
                >
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Buscás trabajo?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Sumate a nuestro equipo. Envianos tu CV y formá parte de RSR Cafaratti
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfrb4RyNHkdnyYfuyx776ImzYsKQlzUNHr1EqAIGNeeOxQdHw/viewform",
                "_blank",
              )
            }
          >
            Enviános tu CV
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-gray-600">Visitanos en nuestras oficinas y depósito</p>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2507985446948!2d-62.17684298868434!3d-33.281752709582314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c90223d03a2e71%3A0x5a2244fd7c72ab78!2sRSR%20CAFARATTI%20SRL!5e0!3m2!1ses!2sar!4v1752174254472!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación RSR Cafaratti"
            />
          </div>

          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/HkLBonaLgP8zhqKn7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Necesitás atención urgente?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Para pedidos urgentes o consultas fuera del horario comercial, contactanos por WhatsApp
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
            onClick={() => window.open("https://api.whatsapp.com/send?phone=5491166784173", "_blank")}
          >
            WhatsApp 24/7
          </Button>
        </div>
      </section>
    </main>
  )
}
