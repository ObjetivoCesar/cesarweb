"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import MegaMenu from "@/components/mega-menu/MegaMenu"
import serviciosData from "@/data/servicios.json"

const categorias = serviciosData.categorias

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
          César Reyes Consultor para Pymes
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

// Componente para el menú de navegación
function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const [isHovering, setIsHovering] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  // Importamos las categorías a través del MegaMenu

  // Limpiar timeouts al desmontar
  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout)
    }
  }, [closeTimeout])

  // Limpiar estados al cambiar de ruta
  useEffect(() => {
    setIsServicesOpen(false)
    setIsHovering(false)
    setIsMobileServicesOpen(false)
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
  }, [pathname])

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setIsHovering(true)
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      if (!isHovering) {
        setIsServicesOpen(false)
      }
    }, 300) // 300ms de retraso antes de cerrar
    setCloseTimeout(timeout)
  }

  const handleMenuMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setIsHovering(true)
  }

  const handleMenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      if (!isHovering) {
        setIsServicesOpen(false)
      }
    }, 300) // 300ms de retraso antes de cerrar
    setCloseTimeout(timeout)
    setIsHovering(false)
  }

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
          <nav className="flex items-center space-x-8">
            {pathname !== '/' && (
              <Link href="/" className="font-medium text-white hover:text-gray-200">
                Inicio
              </Link>
            )}
            <MegaMenu />
            <Link href="/blog" className="font-medium text-white hover:text-gray-200">
              Blog
            </Link>
            <Link href="/contacto" className="font-medium text-white hover:text-gray-200">
              Contacto
            </Link>
          </nav>
        </div>

        {/* Versión móvil: botón del menú */}
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
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {pathname !== '/' && (
              <Link 
                href="/" 
                className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            )}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
              >
                <span>Servicios</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4 py-1">
                  {categorias.map((categoria) => (
                    <div key={categoria.id} className="mb-2">
                      <Link
                        href={`/servicios/${categoria.slug}`}
                        className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsMobileServicesOpen(false)
                        }}
                      >
                        {categoria.titulo}
                      </Link>
                      {categoria.servicios.length > 0 && (
                        <div className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                          {categoria.servicios.map((servicio) => (
                            <Link
                              key={servicio.id}
                              href={`/servicios/${categoria.slug}/${servicio.slug}`}
                              className="block py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 -mx-2 px-2 rounded"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsMobileServicesOpen(false)
                              }}
                            >
                              {servicio.titulo}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/servicios"
                    className="block py-2 text-blue-600 font-medium hover:bg-blue-50 -mx-3 px-3 rounded text-sm mt-2"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsMobileServicesOpen(false)
                    }}
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/blog" 
              className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contacto" 
              className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
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
