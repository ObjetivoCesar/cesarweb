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

// Datos del MegaMenu
const categorias: Categoria[] = [
  {
    id: "cat3",
    titulo: "Análisis Estratégico",
    slug: "analisis-estrategico",
    descripcionCorta: "Toma decisiones con datos y asesoría experta",
    imagen: "/images/analisis_estrategico.webp",
    servicios: [
      {
        id: "estrategia-ganar-clientes",
        titulo: "Estrategia para Ganar Clientes",
        descripcionCorta: "Plan de Marketing Digital para Microempresas",
        slug: "estrategia-ganar-clientes",
        imagen: "/images/negocio_resultados.webp",
      },
      {
        id: "plan-salir-google",
        titulo: "Plan para Salir en Google",
        descripcionCorta: "Posicionamiento SEO para tu negocio",
        slug: "plan-salir-google",
        imagen: "/images/posicionamiento_slide_seo_objetivo.webp",
      },
      {
        id: "analisis-competencia",
        titulo: "Análisis de la Competencia",
        descripcionCorta: "Levantamiento de información detallado de competidores",
        slug: "analisis-competencia",
      },
      {
        id: "consultoria-empresarial",
        titulo: "Consultoría Empresarial",
        descripcionCorta: "Mentoría para iniciar y consolidar tu proyecto",
        slug: "consultoria-empresarial",
      },
      {
        id: "estudio-factibilidad",
        titulo: "El Antes de Endeudarte",
        descripcionCorta: "Estudio de Factibilidad para decisiones de inversión",
        slug: "estudio-factibilidad",
      },
      {
        id: "reingenieria-procesos",
        titulo: "Procesos Lentos y Caros",
        descripcionCorta: "Reingeniería de Procesos para reducir costos y tiempos",
        slug: "reingenieria-procesos",
      },
    ],
  },
  {
    id: "cat2",
    titulo: "Desarrollo Web",
    slug: "desarrollo-web",
    descripcionCorta: "Sitios web profesionales y optimizados para tu negocio",
    imagen: "/images/web_design.webp",
    servicios: [
      {
        id: "tarjeta-digital",
        titulo: "Tarjeta Digital",
        descripcionCorta: "Tu primer contacto profesional - $60",
        slug: "tarjeta-digital",
        imagen: "/images/web.webp",
      },
      {
        id: "tu-contacto-profesional",
        titulo: "Tu Contacto Profesional",
        descripcionCorta: "Presencia digital básica - $150",
        slug: "tu-contacto-profesional",
        imagen: "/images/web.webp",
      },
      {
        id: "go-2025",
        titulo: "Páginas web GO 2025",
        descripcionCorta: "Tu primera web profesional - $250",
        slug: "go-2025",
        imagen: "/images/web.webp",
      },
      {
        id: "tu-negocio-24-7",
        titulo: "Tu Negocio 24/7",
        descripcionCorta: "Web con catálogo de productos - $500",
        slug: "tu-negocio-24-7",
        imagen: "/images/web.webp",
      },
      {
        id: "tu-empresa-online",
        titulo: "Tu Empresa Online",
        descripcionCorta: "Sitio corporativo completo - $700",
        slug: "tu-empresa-online",
        imagen: "/images/web.webp",
      },
      {
        id: "tu-sucursal-online",
        titulo: "Tu Sucursal Online",
        descripcionCorta: "E-commerce profesional - $950",
        slug: "tu-sucursal-online",
        imagen: "/images/web.webp",
      },
    ],
  },
  {
    id: "cat1",
    titulo: "Posicionamiento de Marca",
    slug: "posicionamiento",
    descripcionCorta: "Estrategias para destacar tu marca en línea",
    imagen: "/images/web.webp",
    servicios: [
      {
        id: "alianza-exclusiva",
        titulo: "Alianza Exclusiva",
        descripcionCorta: "Crecimiento digital sin inversión inicial",
        slug: "alianza-exclusiva",
        imagen: "/images/web.webp",
      },
      {
        id: "auditoria-seo-rediseno",
        titulo: "Auditoría SEO y Rediseño",
        descripcionCorta: "Mejora el rendimiento y posicionamiento de tu sitio",
        slug: "auditoria-seo-rediseno",
        imagen: "/images/posicionamiento_slide_seo_objetivo.webp",
      },
    ],
  },
];

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
            <div
              key={cat.id}
              className={`px-6 py-4 cursor-pointer transition-colors flex items-center justify-between w-full ${
                activeCategory?.id === cat.id
                  ? "bg-gray-100 text-blue-600 font-bold"
                  : "hover:bg-gray-50 text-gray-800"
              }`}
              onMouseEnter={() => setActiveCategory(cat)}
              tabIndex={0}
            >
              {cat.titulo}
              <span className="ml-2">←</span>
            </div>
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

