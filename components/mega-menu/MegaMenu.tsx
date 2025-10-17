import React, { useState } from "react";
import Link from "next/link";
import { useRef } from "react";

interface Servicio {
  id: string;
  titulo: string;
  slug: string;
  descripcionCorta: string;
  imagen?: string;
}

interface Categoria {
  id: string;
  titulo: string;
  slug: string;
  descripcionCorta: string;
  imagen: string;
  servicios: Servicio[];
}

import servicesData from "@/data/servicios.json";

const categorias: Categoria[] = servicesData.categorias;

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<Categoria | null>(categorias[0]);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = (e: React.MouseEvent) => {
    // Solo cerrar si el mouse realmente sale del área total del menú
    if (menuRef.current && !menuRef.current.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (menuRef.current && !menuRef.current.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center h-full"
        onMouseEnter={() => setIsOpen(true)}
      >
        <button
          className="font-medium text-white px-4 py-2 hover:text-blue-400 transition-colors"
          onFocus={() => setIsOpen(true)}
          onBlur={handleBlur}
          tabIndex={0}
        >
          Servicios
        </button>
      </div>
      {/* MegaMenu Content */}
      {isOpen && (
        <div
          className="absolute left-1/2 top-full z-50 transition-all duration-200"
          style={{ transform: 'translateX(-50%)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setTimeout(() => setIsOpen(false), 600)}
      >
        <div
        className="bg-white rounded-xl shadow-2xl overflow-visible grid border border-gray-200"
        style={{
          gridTemplateColumns: '1fr 1fr 1.5fr',
          width: '90vw',
          maxWidth: '1400px',
          margin: '24px auto',
          padding: '40px 32px',
          boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
          gap: '0',
          alignItems: 'stretch',
        }}
      >
        {/* Sub-column: servicios (izquierda) */}
        <div className="col-span-1 px-6 py-4 border-r border-gray-200">
          {activeCategory ? (
            <>
              <div className="flex flex-col gap-2">
                {activeCategory.servicios.map((serv) => (
                  <Link
                    key={serv.id}
                    href={`/servicios/${activeCategory.slug}/${serv.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 rounded-md px-3 py-2 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <div className="font-medium">{serv.titulo}</div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-gray-400 flex items-center justify-center h-full">
              Selecciona una categoría
            </div>
          )}
        </div>
        {/* Main column: categories (centro) */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          {categorias.map((cat) => (
            <Link key={cat.id} href={`/servicios/${cat.slug}`} passHref legacyBehavior>
              <a className={`px-6 py-4 cursor-pointer transition-colors flex items-center justify-between w-full rounded-md ${
                  activeCategory?.id === cat.id
                    ? "bg-blue-600 text-white font-bold shadow-md"
                    : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                }`}
                onMouseEnter={() => setActiveCategory(cat)}
                tabIndex={0}
              >
                {cat.titulo}
                <span className="ml-2">←</span>
              </a>
            </Link>
          ))}
        </div>
        {/* Visual column: image (derecha) */}
        <div className="col-span-1 flex items-center justify-center bg-gray-50 relative">
          {activeCategory && (
            <img
              src={activeCategory.imagen}
              alt={activeCategory.titulo}
              className="object-cover rounded-lg shadow-lg max-h-60 w-full h-auto transition-all duration-200"
              style={{ maxWidth: 320 }}
            />
          )}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .grid-cols-3 {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .grid-cols-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
      )}
    </div>
  );
}

