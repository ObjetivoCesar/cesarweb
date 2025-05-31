"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Componente separado para la barra superior
function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed top-0 left-0 right-0 text-center py-2 text-sm font-bold z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-light-gray text-dark' 
          : 'bg-dark text-white'
      }`}
    >
      Te ayudo a crear tu plan de acción
    </div>
  )
}

// Componente separado para el header de navegación
function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) { // Si estamos scrolleando hacia abajo
        setIsVisible(false)
      } else { // Si estamos scrolleando hacia arriba
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header 
      className={`bg-transparent fixed top-8 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container py-4 flex justify-between items-center">
        {/* Logo y nombre: César Reyes */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-white">César Reyes</span>
        </Link>

        {/* Navegación de escritorio y botón */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <Link href="/" className="font-medium text-white hover:text-gray-200">
              Inicio
            </Link>
            <Link href="/blog" className="font-medium text-white hover:text-gray-200">
              Blog
            </Link>
            <Link href="/contacto" className="font-medium text-white hover:text-gray-200">
              Contacto
            </Link>
          </nav>

          <button
            className="px-4 py-2 rounded bg-white text-primary font-semibold text-sm shadow hover:bg-gray-100 focus:outline-none"
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
            className="px-4 py-2 rounded bg-white text-primary font-semibold text-sm shadow hover:bg-gray-100 focus:outline-none"
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
            className="ml-4 text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="bg-white/95 backdrop-blur-sm border-t py-4">
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
  )
}

// Componente principal que combina ambos elementos
export default function TransparentHeader() {
  return (
    <>
      <TopBar />
      <NavigationHeader />
    </>
  )
} 