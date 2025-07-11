import { MapPin, Truck, Clock, CheckCircle, Route, Package } from "lucide-react"

export default function DistribucionPage() {
  const coverageAreas = [
    "Capital Federal",
    "Zona Norte (San Isidro, Vicente López, Tigre)",
    "Zona Oeste (Morón, Hurlingham, Ituzaingó)",
    "Zona Sur (Avellaneda, Quilmes, Berazategui)",
    "Gran Buenos Aires",
  ]

  const deliveryFeatures = [
    {
      icon: Truck,
      title: "Flota Propia",
      description: "Vehículos especializados para el transporte de bebidas",
    },
    {
      icon: Clock,
      title: "Entregas Puntuales",
      description: "Cumplimos con los horarios acordados",
    },
    {
      icon: Route,
      title: "Rutas Optimizadas",
      description: "Planificación eficiente de recorridos",
    },
    {
      icon: Package,
      title: "Carga Segura",
      description: "Productos protegidos durante el transporte",
    },
  ]

  const deliverySchedule = [
    { day: "Lunes", zones: "Capital Federal - Zona Norte" },
    { day: "Martes", zones: "Zona Oeste - Morón y alrededores" },
    { day: "Miércoles", zones: "Zona Sur - Quilmes y alrededores" },
    { day: "Jueves", zones: "Gran Buenos Aires - Zona Norte" },
    { day: "Viernes", zones: "Entregas especiales y reposición" },
    { day: "Sábado", zones: "Entregas urgentes (coordinadas)" },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Distribución</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Logística eficiente y confiable para llegar a todos nuestros clientes
          </p>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Zona de Cobertura</h2>
              <p className="text-lg text-gray-700 mb-8">
                Cubrimos una amplia zona del Gran Buenos Aires y Capital Federal, garantizando entregas eficientes en
                toda nuestra área de influencia.
              </p>

              <div className="space-y-4">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">¿Tu zona no está listada?</h3>
                    <p className="text-gray-700">
                      Contactanos para consultar sobre entregas especiales en otras zonas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Placeholder for map */}
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Mapa de Cobertura</p>
                  <p className="text-gray-400">Gran Buenos Aires y CABA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestro Servicio de Distribución</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Características que nos distinguen en el mercado</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cronograma de Entregas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planificación semanal para optimizar nuestro servicio
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {deliverySchedule.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-6 ${
                    index !== deliverySchedule.length - 1 ? "border-b border-gray-200" : ""
                  } hover:bg-gray-50 transition-colors duration-200`}
                >
                  <div className="flex items-center">
                    <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-slate-900">{schedule.day.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{schedule.day}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700">{schedule.zones}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Info */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Logística Profesional</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Contamos con un sistema logístico optimizado que nos permite realizar entregas eficientes y puntuales
                  en toda nuestra zona de cobertura.
                </p>
                <p>
                  Nuestro equipo de distribución está capacitado para manejar productos de manera segura, manteniendo la
                  cadena de frío cuando es necesario y asegurando que los productos lleguen en perfectas condiciones.
                </p>
                <p>
                  Utilizamos tecnología de seguimiento para monitorear nuestras entregas y mantener informados a
                  nuestros clientes sobre el estado de sus pedidos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-sm text-gray-300">Entregas a tiempo</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24h</div>
                <div className="text-sm text-gray-300">Tiempo máximo de entrega</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-sm text-gray-300">Vehículos en flota</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Entregas semanales</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
