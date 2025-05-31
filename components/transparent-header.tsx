"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { usePathname } from "next/navigation"

// Componente separado para la barra superior
function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementaremos la lógica de búsqueda
    console.log("Buscando:", searchQuery)
  }

  return (
    <div 
      className={`fixed top-0 left-0 right-0 text-center py-2 text-sm font-bold z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-light-gray text-dark' 
          : 'bg-dark text-white'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex-1 text-center">
          Te ayudo a crear tu plan de acción
        </div>
        
        {/* Buscador */}
        <div className="relative">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-current hover:opacity-80 transition-opacity"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
          
          {/* Panel de búsqueda */}
          {isSearchOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4">
              <form onSubmit={handleSearch} className="flex flex-col gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar artículos..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Buscar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Componente separado para el header de navegación
function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
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

        {/* Navegación de escritorio */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {pathname !== '/' && (
              <Link href="/" className="font-medium text-white hover:text-gray-200">
                Inicio
              </Link>
            )}
            <Link href="/blog" className="font-medium text-white hover:text-gray-200">
              Blog
            </Link>
            <Link href="/contacto" className="font-medium text-white hover:text-gray-200">
              Contacto
            </Link>
          </nav>
        </div>

        {/* Versión móvil: menú */}
        <div className="md:hidden">
          <button 
            className="text-white" 
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
            {pathname !== '/' && (
              <Link 
                href="/" 
                className="block font-medium hover:text-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            )}
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