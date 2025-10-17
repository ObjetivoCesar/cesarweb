"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import MegaMenu from "@/components/mega-menu/MegaMenu"
import serviciosData from "@/data/servicios.json"

const categorias = serviciosData.categorias

// ... (resto del código del archivo original hasta la línea 230)

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
                onClick={() => toggleMenu('servicios')}
                className="flex items-center justify-between w-full py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
              >
                <span>Servicios</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedMenus['servicios'] ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenus['servicios'] && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4 py-1">
                  {categorias.map((categoria) => (
                    <div key={categoria.id} className="mb-2">
                      <Link
                        href={`/servicios/${categoria.slug}`}
                        className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setExpandedMenus({})
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
                                setExpandedMenus({})
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
                      setExpandedMenus({})
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

// ... (resto del código del archivo original)

export default function TransparentHeader() {
  return (
    <>
      <TopBar />
      <NavigationHeader />
    </>
  )
}
