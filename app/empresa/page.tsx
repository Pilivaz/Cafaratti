import { Target, Eye, Heart, Shield, Star, Leaf } from "lucide-react"

export default function Empresa() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Nuestra Empresa</h1>
            <p className="text-xl text-slate-300">
              RSR Cafaratti es líder en distribución de bebidas, comprometida con la calidad y el servicio excepcional
            </p>
          </div>
        </div>
      </section>

      {/* Historia Section */}
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

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo de trabajo colaborativo"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                      <Target className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Misión</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Distribuir bebidas de la más alta calidad, brindando un servicio excepcional que supere las
                    expectativas de nuestros clientes, mientras construimos relaciones duraderas basadas en la
                    confianza, la transparencia y la excelencia operativa.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                      <Eye className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Visión</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Ser el distribuidor de bebidas líder en la región, reconocido por nuestra innovación, calidad de
                    servicio y compromiso con la satisfacción del cliente, expandiendo continuamente nuestro alcance y
                    portafolio de productos premium.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Valores</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Integridad, excelencia, compromiso con el cliente, trabajo en equipo, innovación continua y
                    responsabilidad social. Estos valores guían cada una de nuestras decisiones y acciones diarias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Calidad */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                    <Shield className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Política de Calidad</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  En RSR Cafaratti, la calidad es el pilar fundamental de nuestras operaciones. Implementamos rigurosos
                  controles de calidad en cada etapa del proceso de distribución, desde la recepción de productos hasta
                  la entrega final al cliente.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nuestro sistema de gestión de calidad está certificado bajo normas internacionales, garantizando que
                  todos nuestros productos mantengan sus propiedades organolépticas y cumplan con los más altos
                  estándares de seguridad alimentaria. Realizamos auditorías periódicas y capacitamos constantemente a
                  nuestro personal para asegurar la excelencia en cada proceso.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Control de calidad y certificación"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gestión Comercial Galaxia Q */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sistema Galaxia Q"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Gestión Comercial Galaxia Q</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Implementamos el sistema Galaxia Q, una plataforma integral de gestión comercial que revoluciona
                  nuestra operación diaria. Este sistema nos permite optimizar la gestión de inventarios, pedidos,
                  facturación y seguimiento de entregas en tiempo real.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Galaxia Q nos proporciona herramientas avanzadas de análisis y reportes que nos permiten tomar
                  decisiones informadas, mejorar la eficiencia operativa y brindar un servicio más personalizado a
                  nuestros clientes. La integración de esta tecnología nos posiciona a la vanguardia del sector.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Gracias a Galaxia Q, podemos ofrecer a nuestros clientes acceso en línea a su información comercial,
                  historial de pedidos, estado de entregas y análisis de consumo, facilitando una comunicación más
                  fluida y transparente en nuestra relación comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumo Responsable */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Consumo Responsable</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Promovemos activamente el consumo responsable de bebidas alcohólicas y educamos a nuestros clientes
                  sobre la importancia de un consumo moderado y consciente. Colaboramos con organizaciones
                  especializadas para desarrollar campañas de concientización y programas educativos.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nuestro compromiso incluye la verificación de edad en puntos de venta, la capacitación de personal en
                  establecimientos comerciales y el apoyo a iniciativas que fomenten hábitos de consumo saludables en la
                  comunidad. Creemos que la responsabilidad social es fundamental para el desarrollo sostenible de
                  nuestro sector.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Consumo responsable y responsabilidad social"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Sustentable */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Compromiso sustentable"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                    <Leaf className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Compromiso Sustentable</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nuestro compromiso con la sustentabilidad se refleja en cada aspecto de nuestras operaciones.
                  Implementamos prácticas eco-amigables en nuestra logística, optimizando rutas de entrega para reducir
                  emisiones de carbono y utilizando vehículos con tecnologías más limpias.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Trabajamos activamente en programas de reciclaje y reutilización de envases, colaborando con nuestros
                  proveedores y clientes para crear un ciclo de vida más sostenible de los productos. Además, promovemos
                  el uso responsable de recursos en nuestras instalaciones y fomentamos la conciencia ambiental entre
                  nuestros colaboradores y la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
