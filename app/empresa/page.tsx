import { Award, Clock, Users, Target, Shield, Handshake, Leaf, Star, CheckCircle } from "lucide-react"

export default function EmpresaPage() {
  const values = [
    {
      icon: Award,
      title: "Calidad",
      description: "Productos de las mejores marcas del mercado",
    },
    {
      icon: Clock,
      title: "Rapidez",
      description: "Entregas puntuales y eficientes",
    },
    {
      icon: Users,
      title: "Servicio",
      description: "Atención personalizada a cada cliente",
    },
    {
      icon: Target,
      title: "Cobertura",
      description: "Amplia zona de distribución",
    },
  ]

  const sections = [
    {
      id: "mision-vision-valores",
      title: "Misión, Visión y Valores",
      icon: Target,
      content: {
        mision:
          "Ser el distribuidor de bebidas de referencia en nuestra región, ofreciendo productos de la más alta calidad con un servicio excepcional.",
        vision:
          "Construir relaciones duraderas con nuestros clientes y contribuir al crecimiento de sus negocios a través de la excelencia en el servicio.",
        valores: ["Calidad", "Compromiso", "Confianza", "Innovación", "Responsabilidad"],
      },
    },
    {
      id: "politica-calidad",
      title: "Política de Calidad",
      icon: Shield,
      content:
        "Nos comprometemos a mantener los más altos estándares de calidad en todos nuestros procesos, desde la recepción hasta la entrega final, garantizando la satisfacción de nuestros clientes.",
    },
    {
      id: "gestion-comercial",
      title: "Gestión Comercial Galaxia Q",
      icon: Star,
      content:
        "Implementamos el sistema Galaxia Q de Quilmes para optimizar nuestra gestión comercial, mejorando la eficiencia en pedidos, entregas y atención al cliente.",
    },
    {
      id: "consumo-responsable",
      title: "Consumo Responsable",
      icon: Handshake,
      content:
        "Promovemos el consumo responsable de bebidas alcohólicas, educando sobre los riesgos del consumo excesivo y apoyando iniciativas de concientización.",
    },
    {
      id: "compromiso-sustentable",
      title: "Compromiso Sustentable",
      icon: Leaf,
      content:
        "Trabajamos activamente en la reducción de nuestro impacto ambiental a través de prácticas sustentables en logística, reciclaje y uso eficiente de recursos.",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Nuestra Empresa</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 20 años de experiencia en la distribución de bebidas de primera calidad
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  RSR Cafaratti es una empresa dedicada a la distribución de bebidas de primeras marcas, producidas por
                  Cervecería y Maltería Quilmes, con más de 20 años de experiencia en el sector.
                </p>
                <p>
                  Nuestra máxima aspiración es dar servicio y calidad a nuestros clientes ofreciendo marcas líderes como
                  Quilmes, Brahma, Stella Artois, Pepsi, Seven Up, Gatorade, Eco de los Andes, Nestlé Pureza Vital.
                </p>
                <p>
                  A lo largo de estos años, hemos construido relaciones sólidas con nuestros clientes, basadas en la
                  confianza, la calidad del servicio y la excelencia en cada entrega.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-2xl">
                <div className="text-center text-slate-900">
                  <div className="text-6xl font-bold mb-2">20+</div>
                  <div className="text-xl font-semibold">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Sections */}
      {sections.map((section, index) => (
        <section key={section.id} className={`py-20 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "order-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <section.icon className="h-8 w-8 text-slate-900" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">{section.title}</h2>
                </div>

                {section.id === "mision-vision-valores" ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Misión</h3>
                      <p className="text-gray-700">{section.content.mision}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Visión</h3>
                      <p className="text-gray-700">{section.content.vision}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Valores</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {section.content.valores.map((valor, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{valor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
                )}
              </div>

              <div className={index % 2 === 1 ? "order-1" : ""}>
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-64 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <section.icon className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500">Imagen de {section.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Pilares</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los fundamentos que sostienen nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
¿Querés que te lo exporte como archivo .tsx para descargar?








Dijiste:
bien, no, hagamos distinto, quiero que modifiques el page (1).tsx. Quiero que solo le pongas los iconos que tiene page.tsx


ChatGPT dijo:
Perfecto. Vamos a modificar el archivo page (1).tsx para que:

Conserve toda la estructura y diseño de ese archivo.

Pero reemplace los íconos de los "pilares" (última sección) por los íconos que están en page.tsx.

Los íconos correctos desde page.tsx son:

tsx
Copiar
Editar
{
  icon: Award,
  title: "Calidad",
  description: "Productos de las mejores marcas del mercado",
},
{
  icon: Clock,
  title: "Rapidez",
  description: "Entregas puntuales y eficientes",
},
{
  icon: Users,
  title: "Servicio",
  description: "Atención personalizada a cada cliente",
},
{
  icon: Target,
  title: "Cobertura",
  description: "Amplia zona de distribución",
}
A continuación, te dejo el archivo page (1).tsx modificado, con esos íconos incorporados:

tsx
Copiar
Editar
import { Award, Clock, Users, Target, Shield, Handshake, Leaf, Star, CheckCircle } from "lucide-react"

export default function EmpresaPage() {
  const values = [
    {
      icon: Award,
      title: "Calidad",
      description: "Productos de las mejores marcas del mercado",
    },
    {
      icon: Clock,
      title: "Rapidez",
      description: "Entregas puntuales y eficientes",
    },
    {
      icon: Users,
      title: "Servicio",
      description: "Atención personalizada a cada cliente",
    },
    {
      icon: Target,
      title: "Cobertura",
      description: "Amplia zona de distribución",
    },
  ]

  const sections = [
    {
      id: "mision-vision-valores",
      title: "Misión, Visión y Valores",
      icon: Target,
      content: {
        mision:
          "Ser el distribuidor de bebidas de referencia en nuestra región, ofreciendo productos de la más alta calidad con un servicio excepcional.",
        vision:
          "Construir relaciones duraderas con nuestros clientes y contribuir al crecimiento de sus negocios a través de la excelencia en el servicio.",
        valores: ["Calidad", "Compromiso", "Confianza", "Innovación", "Responsabilidad"],
      },
    },
    {
      id: "politica-calidad",
      title: "Política de Calidad",
      icon: Shield,
      content:
        "Nos comprometemos a mantener los más altos estándares de calidad en todos nuestros procesos, desde la recepción hasta la entrega final, garantizando la satisfacción de nuestros clientes.",
    },
    {
      id: "gestion-comercial",
      title: "Gestión Comercial Galaxia Q",
      icon: Star,
      content:
        "Implementamos el sistema Galaxia Q de Quilmes para optimizar nuestra gestión comercial, mejorando la eficiencia en pedidos, entregas y atención al cliente.",
    },
    {
      id: "consumo-responsable",
      title: "Consumo Responsable",
      icon: Handshake,
      content:
        "Promovemos el consumo responsable de bebidas alcohólicas, educando sobre los riesgos del consumo excesivo y apoyando iniciativas de concientización.",
    },
    {
      id: "compromiso-sustentable",
      title: "Compromiso Sustentable",
      icon: Leaf,
      content:
        "Trabajamos activamente en la reducción de nuestro impacto ambiental a través de prácticas sustentables en logística, reciclaje y uso eficiente de recursos.",
    },
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Nuestra Empresa</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 20 años de experiencia en la distribución de bebidas de primera calidad
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  RSR Cafaratti es una empresa dedicada a la distribución de bebidas de primeras marcas, producidas por
                  Cervecería y Maltería Quilmes, con más de 20 años de experiencia en el sector.
                </p>
                <p>
                  Nuestra máxima aspiración es dar servicio y calidad a nuestros clientes ofreciendo marcas líderes como
                  Quilmes, Brahma, Stella Artois, Pepsi, Seven Up, Gatorade, Eco de los Andes, Nestlé Pureza Vital.
                </p>
                <p>
                  A lo largo de estos años, hemos construido relaciones sólidas con nuestros clientes, basadas en la
                  confianza, la calidad del servicio y la excelencia en cada entrega.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-2xl">
                <div className="text-center text-slate-900">
                  <div className="text-6xl font-bold mb-2">20+</div>
                  <div className="text-xl font-semibold">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Sections */}
      {sections.map((section, index) => (
        <section key={section.id} className={`py-20 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "order-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <section.icon className="h-8 w-8 text-slate-900" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">{section.title}</h2>
                </div>

                {section.id === "mision-vision-valores" ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Misión</h3>
                      <p className="text-gray-700">{section.content.mision}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Visión</h3>
                      <p className="text-gray-700">{section.content.vision}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Valores</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {section.content.valores.map((valor, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{valor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
                )}
              </div>

              <div className={index % 2 === 1 ? "order-1" : ""}>
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-64 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <section.icon className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500">Imagen de {section.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Pilares</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los fundamentos que sostienen nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
