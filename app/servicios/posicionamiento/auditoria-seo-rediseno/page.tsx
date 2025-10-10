'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, Layout, ShieldCheck, Target, Check, TrendingUp, Users, Zap, Clock } from 'lucide-react';

const tabs = [
  {
    id: 0,
    title: 'Análisis SEO',
    subtitle: 'Evaluación Profesional de tu Sitio Web',
    image: '/images/categorias/posicionamiento/analisis-seo.webp',
    content: {
      intro: '¿Sabías que el 75% de los usuarios no pasa de la primera página de resultados de búsqueda?',
      description: 'Nuestro análisis SEO exhaustivo identifica las oportunidades clave para mejorar el posicionamiento de tu sitio web. Evaluamos más de 200 factores técnicos y de contenido para detectar problemas que puedan estar afectando tu visibilidad en buscadores como Google.',
      listTitle: 'Beneficios del Análisis SEO',
      items: [
        'Identificación de errores técnicos que afectan el rastreo e indexación',
        'Evaluación de la estructura del sitio y la arquitectura de enlaces internos',
        'Análisis de palabras clave y oportunidades de contenido',
        'Revisión de la experiencia móvil y velocidad de carga',
        'Evaluación de backlinks y perfil de enlaces'
      ],
      ctaTitle: '¿Listo para descubrir cómo mejorar tu SEO?',
      ctaDescription: 'Obtén un análisis detallado de tu sitio web',
      cta: 'Solicitar Auditoría SEO'
    }
  },
  {
    id: 1,
    title: 'Optimización Técnica',
    subtitle: 'Mejora el Rendimiento de tu Sitio',
    image: '/images/categorias/posicionamiento/optimizacion-seo.webp',
    content: {
      intro: '¿Tu sitio web tarda más de 3 segundos en cargar? Podrías estar perdiendo hasta el 53% de tus visitantes.',
      description: 'La optimización técnica es fundamental para el éxito de cualquier estrategia SEO. Nos aseguramos de que tu sitio cumpla con los estándares de Google y ofrezca la mejor experiencia de usuario posible.',
      listTitle: 'Mejoras Técnicas Incluidas',
      items: [
        'Optimización de velocidad y rendimiento',
        'Implementación de schema markup para rich snippets',
        'Corrección de errores de rastreo e indexación',
        'Optimización de imágenes y recursos multimedia',
        'Implementación de SSL y protocolo HTTPS',
        'Configuración correcta de archivos robots.txt y sitemap.xml'
      ],
      ctaTitle: '¿Quieres que tu sitio sea más rápido y eficiente?',
      ctaDescription: 'Optimizamos tu sitio para un mejor rendimiento',
      cta: 'Optimizar Mi Sitio'
    }
  },
  {
    id: 2,
    title: 'Rediseño Estratégico',
    subtitle: 'Experiencia de Usuario Mejorada',
    image: '/images/categorias/posicionamiento/rediseno-web.webp',
    content: {
      intro: 'El 94% de las primeras impresiones están relacionadas con el diseño de tu sitio web.',
      description: 'Nuestro enfoque de rediseño web combina las mejores prácticas de diseño UX/UI con estrategias de conversión probadas. Creamos lugares que no solo son hermosos, sino que también generan resultados medibles para tu negocio.',
      listTitle: 'Elementos del Rediseño',
      items: [
        'Diseño responsive adaptado a todos los dispositivos',
        'Arquitectura de información optimizada para conversiones',
        'Jerarquía visual mejorada para destacar lo más importante',
        'Llamados a la acción estratégicamente ubicados',
        'Diseño de interfaz moderna y profesional'
      ],
      ctaTitle: '¿Listo para un rediseño que impulse tus conversiones?',
      ctaDescription: 'Transformamos tu sitio en una máquina de generar clientes',
      cta: 'Solicitar Rediseño'
    }
  },
  {
    id: 3,
    title: 'Contenido Optimizado',
    subtitle: 'Atrae y Convierte Más Clientes',
    image: '/images/categorias/posicionamiento/contenido-seo.webp',
    content: {
      intro: 'El contenido es el rey, pero solo si está optimizado para SEO y conversiones.',
      description: 'Desarrollamos estrategias de contenido que no solo mejoran tu posicionamiento en buscadores, sino que también conectan con tu audiencia y la impulsan a actuar. Desde la investigación de palabras clave hasta la creación de contenido optimizado, nos aseguramos de que cada palabra cuente.',
      listTitle: 'Estrategia de Contenido',
      items: [
        'Investigación de palabras clave estratégicas',
        'Optimización de metaetiquetas y encabezados',
        'Creación de contenido relevante y valioso',
        'Estrategia de enlaces internos y externos',
        'Optimización de imágenes y elementos multimedia'
      ],
      ctaTitle: '¿Quieres que tu contenido destaque en los buscadores?',
      ctaDescription: 'Optimizamos tu contenido para mayor visibilidad y conversiones',
      cta: 'Optimizar Contenido'
    }
  }
];

export default function AuditoriaSEORediseno() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/servicios/posicionamiento" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Posicionamiento
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Auditoría SEO y Rediseño Web</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mejora el rendimiento y posicionamiento de tu sitio web con nuestro análisis profesional
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  {tab.id === 0 && <Search className="w-4 h-4 mr-2" />}
                  {tab.id === 1 && <Zap className="w-4 h-4 mr-2" />}
                  {tab.id === 2 && <Layout className="w-4 h-4 mr-2" />}
                  {tab.id === 3 && <Target className="w-4 h-4 mr-2" />}
                  {tab.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentTab.subtitle}</h2>
                <p className="text-blue-600 font-medium mb-6">{currentTab.content.intro}</p>
                
                <p className="text-gray-700 mb-6">{currentTab.content.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{currentTab.content.listTitle}</h3>
                <ul className="space-y-3 mb-8">
                  {currentTab.content.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Inversión desde</h3>
                  <p className="text-3xl font-bold text-blue-700 mb-2">$1,250</p>
                  <p className="text-gray-600 text-sm">Precio varía según el tamaño del sitio</p>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                    {currentTab.content.cta}
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">*Consulta por planes personalizados</p>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-100 p-8 flex flex-col justify-between">
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">¿Qué incluye este servicio?</h3>
                    <ul className="space-y-3">
                      {[
                        'Informe detallado de auditoría SEO',
                        'Análisis de palabras clave estratégicas',
                        'Optimización técnica del sitio web',
                        'Recomendaciones de rediseño UX/UI',
                        'Estrategia de contenido optimizado',
                        'Soporte y seguimiento por 30 días'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">¿Por qué elegirnos?</h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: <ShieldCheck className="w-6 h-6 text-blue-200" />,
                          title: 'Enfoque personalizado',
                          description: 'Soluciones adaptadas a las necesidades específicas de tu negocio.'
                        },
                        {
                          icon: <TrendingUp className="w-6 h-6 text-green-300" />,
                          title: 'Resultados medibles',
                          description: 'Seguimiento de métricas clave para evaluar el rendimiento.'
                        },
                        {
                          icon: <Users className="w-6 h-6 text-yellow-300" />,
                          title: 'Equipo experto',
                          description: 'Profesionales certificados en SEO y diseño web.'
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="p-1.5 bg-blue-700 rounded-lg mr-3 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-blue-100">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-700 mb-4">¿Tienes dudas sobre nuestro servicio?</p>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Zap className="w-4 h-4 mr-2" />
                    Solicitar consulta sin costo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para mejorar tu presencia en línea?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Obtén una auditoría SEO gratuita y descubre cómo podemos ayudar a que tu negocio destaque en los resultados de búsqueda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-900 hover:bg-blue-100 px-8">
                Solicitar Auditoría Gratis
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-800 hover:text-white">
                Ver más servicios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
