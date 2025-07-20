import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-rsr-cafaratti.png"
                alt="RSR Cafaratti Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Distribución de bebidas líderes con más de 20 años de experiencia en el mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/ventas" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Ventas
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/distribucion"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  Distribución
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Casa Central</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Av. Argentina Este 155</p>
                  <p>(2645) Corral de Bustos Iffinger</p>
                  <p>Córdoba - Argentina</p>
                  <p>Tel/Fax: (03468) 421463 / 15526271</p>
                  <p>contacto@cafaratti.com.ar</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Depósito Canals</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Ruta Prov. Nº 3 acceso Norte</p>
                  <p>(2650) Canals - Córdoba</p>
                  <p>Tel/Fax: (03463) 427756</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Atención Quilmes</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Tel: 0810 222 1234</p>
                  <p>WhatsApp: 11 6678 4173</p>
                  <p>atencionaclientes@quilmes.com.ar</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">App BEES</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Lunes a viernes: 08:00 a 20:00 hs</p>
                  <p>Sábados: 08:00 a 16:00 hs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 RSR Cafaratti. Todos los derechos reservados.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Página hecha por: Pilar Vazquez Garbero❤️</p>
        </div>
      </div>
    </footer>
  )
}
