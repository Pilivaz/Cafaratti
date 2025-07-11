"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/empresa", label: "Empresa" },
    { href: "/productos", label: "Productos" },
    { href: "/ventas", label: "Ventas" },
    { href: "/distribucion", label: "Distribución" },
    { href: "/contacto", label: "Contacto" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    // Scroll to top when navigating
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-rsr-cafaratti.png"
              alt="RSR Cafaratti Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <div className="text-xl font-bold text-white hidden sm:block">
              RSR <span className="text-yellow-400">Cafaratti</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-2 mb-4 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-slate-700 rounded-md transition-colors duration-200"
                  onClick={() => {
                    setIsOpen(false)
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
