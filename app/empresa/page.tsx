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
                  Cervecería y Maltería Quilmes, con más de 90 años de experiencia en el sector.
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
                  <div className="text-6xl font-bold mb-2">90+</div>
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
                  src="/mision-vision-valores.jpg"
                  alt="Cafaratti edificio"
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
                    Ser una empresa líder en la distribución de productos de consumo masivo, caracterizada por la excelencia en el servicio. 
                    Somos competitivos, exitosos, innovadores y con calidad humana, trabajamos unidos como un equipo comprometido para mantener 
                    y reforzar nuestro liderazgo.
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
                    Lograr una basta distribución de un portafolio diversificado de productos y marcas de excelente calidad, optimizando e innovando 
                    procesos con tecnología de punta, capaz de adaptarse a los cambios para satisfacer de manera oportuna las necesidades de nuestros 
                    clientes.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Valores</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Para materializar nuestro compromiso, debemos esforzarnos en todo momento por:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">Preocupación</strong> por nuestros clientes, empleados y el mundo en que vivimos.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        Vender sólo productos de los que podamos sentirnos <strong className="text-slate-900">orgullosos</strong>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">Comunicación</strong> clara y sincera.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">Calibrar</strong> los efectos a corto y largo plazo.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        Beneficiarse de la <strong className="text-slate-900">diversidad</strong> y de la <strong className="text-slate-900">inclusión</strong>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">Respetar</strong> a los demás y lograr juntos el éxito.
                      </span>
                    </li>
                  </ul>
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
                  Los altos estándares de calidad de Cervecería y Maltería Quilmes se complementan con los sistemas de calidad de cada uno 
                  de sus proveedores, con quienes se trabaja sinérgicamente, desarrollándolos para mantener y optimizar la calidad de los 
                  materiales que suministran
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Para complementar este proceso, mediante auditorías de calidad en el mercado, se verifica que las condiciones de 
                  almacenamiento, transporte, exhibición en los puntos de venta y distribución sean las óptimas con el fin de asegurar 
                  que la calidad y la frescura de los productos se mantengan inalterables.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/quilmes-poster.jpg"
                  alt="Control de calidad y certificación"
                  className="w-full h-85 object-cover rounded-lg shadow-lg"
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
                  src="/galaxiaQ.jpg"
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
                  Galaxia Q es el Programa de Calidad de Gestión Comercial de Cervecería y Maltería Quilmes, 
                  en el cual RSR Cafaratti participa junto con otros 200 Distribuidores del país, desde el año 2004.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Este Programa mide el desempeño de las empresas distribuidoras perteneciente a las red Quilmes. 
                  En esta sección usted verá las acciones que esta realizando nuestra empresa, no sólo para mejorar 
                  la performance sino también la atención hacia nuestros clientes.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Producto de este Desarrollo Comercial, en RSR Cafaratti obtuvimos una importante cantidad de premios y 
                  menciones a lo largo de estos años.
                </p>
                 <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                         Premio Lucero Bronce del Centro 2005
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        Premio Lucero de Plata a los Resultados 2006
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                         Premio Lucero de Plata del Sur 2011 y 2012
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        Premio Lucero de Plata Ventas 2012
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                        Premio Embajador 2013, 2014, 2015 y 2016
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                         Premio Astro 2013, 2014, 2015 y 2016
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">
                         Premio Mega Estrella 2016
                      </span>
                    </li>
                  </ul>
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
                  Vivamos Responsablemente es un programa integral desarrollado por Cervecería y Maltería Quilmes, 
                  basado en los pilares de Educación y Consumo Responsable.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  El programa abarca diversas iniciativas sociales orientadas a promover el consumo y la venta responsables de 
                  alcohol a mayores de edad, contribuir a la toma de conciencia sobre la incompatibilidad de combinar las acciones 
                  de beber y conducir, y la promoción de valores saludables.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  El pilar Consumo Responsable se divide en dos ejes: <strong className="text-slate-900">"No venta de alcohol a 
                    menores"</strong> y <strong className="text-slate-900">"Alcohol y Manejo"</strong>.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  El eje <strong className="text-slate-900">"No venta de alcohol a menores" </strong>
                  tiene como objetivo generar conciencia en los comercios sobre la venta responsable de alcohol sólo a mayores de 18 años; 
                  mientras que el eje <strong className="text-slate-900">"Alcohol y Manejo" </strong>
                  busca concientizar a los jóvenes mayores de 18 años respecto de la importancia de consumir bebidas con alcohol de una 
                  manera responsable y acerca de la incompatibilidad de mezclar las acciones de beber y conducir.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/consumo-responsable.jpg"
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
                  src="/zona-reciclado.jpg"
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
                  A principios de 2018, aumentamos nuestro compromiso con el cuidado del Medio Ambiente, y aplicamos un 
                  sistema con el que también innovamos en calidad de nuestros servicios.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Así pusimos en marcha nuestra <strong className="text-slate-900">ZONA DE RECICLADO</strong>, un espacio con ubicación estratégica en nuestra Planta Central, 
                  en la cual instalamos una máquina compactadoral que nos permite reciclar botellas plásticas de 2 y 2,25 litros.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A esta acción también sumamos la propuesta de consumo de envases retornables, ayudando además la economía de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
