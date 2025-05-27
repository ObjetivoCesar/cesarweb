"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Solo mostrar el botón de chat y el nombre en móvil
  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container py-4 flex justify-between items-center">
          {/* Logo y nombre: César Reyes */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            <span className="text-primary">César Reyes</span>
          </Link>

          {/* Navegación de escritorio y botón */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link href="/" className="font-medium hover:text-primary">
                Inicio
              </Link>
              <Link href="/blog" className="font-medium hover:text-primary">
                Blog
              </Link>
              <Link href="/contacto" className="font-medium hover:text-primary">
                Contacto
              </Link>
            </nav>

            <button
              className="px-4 py-2 rounded bg-primary text-white font-semibold text-sm shadow hover:bg-primary/90 focus:outline-none"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const widgetBtn = document.getElementById("cafrilosa-chatbot-button")
                  if (widgetBtn) widgetBtn.click()
                }
              }}
              aria-label="Contáctame"
            >
              Contáctame
            </button>
          </div>

          {/* Versión móvil: botón y menú */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="px-4 py-2 rounded bg-primary text-white font-semibold text-sm shadow hover:bg-primary/90 focus:outline-none"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const widgetBtn = document.getElementById("cafrilosa-chatbot-button")
                  if (widgetBtn) widgetBtn.click()
                }
              }}
              aria-label="Contáctame"
            >
              Contáctame
            </button>

            <button 
              className="ml-4" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="bg-white border-t py-4">
            <div className="container space-y-4">
              <Link 
                href="/" 
                className="block font-medium hover:text-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/blog" 
                className="block font-medium hover:text-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contacto" 
                className="block font-medium hover:text-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/* Spacer para compensar el header fijo */}
      <div className="h-20"></div>
    </>
  )
}
