import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, BarChart2, TrendingUp, Target, Users, Zap, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Posicionamiento Web | César Reyes Jaramillo',
  description: 'Estrategias avanzadas de posicionamiento SEO para aumentar tu visibilidad en buscadores en Ecuador.'
};

export default function PosicionamientoPage() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: 'Investigación de Palabras Clave',
      description: 'Identificamos los términos de búsqueda más relevantes para tu negocio en el mercado ecuatoriano.'
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: 'Análisis de la Competencia',
      description: 'Estudiamos a tus competidores para descubrir oportunidades de posicionamiento que estén desaprovechando.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Estrategia de Contenido',
      description: 'Creamos contenido valioso y optimizado que responde a las necesidades de búsqueda de tu audiencia.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Enlaces de Calidad',
      description: 'Desarrollamos una estrategia de link building para aumentar la autoridad de tu sitio web.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/posicionamiento_slide_seo_objetivo.webp"
            alt="Posicionamiento Web"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/servicios" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a servicios
            </Link>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Posicionamiento Web SEO
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Haz que te encuentren cuando busquen lo que ofreces. Mejoramos tu visibilidad en los resultados de búsqueda de manera orgánica.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Nuestros Servicios de Posicionamiento
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Soluciones personalizadas para mejorar tu visibilidad en línea y atraer más clientes
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Destaca en los motores de búsqueda
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              El 75% de los usuarios no pasa de la primera página de resultados. Nuestras estrategias de posicionamiento te ayudan a:
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Servicios Destacados</h3>
              <div className="mt-4 space-y-4">
                <Link href="/servicios/posicionamiento/estrategia-ganar-clientes" className="block group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors group-hover:bg-blue-50">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Estrategia para Ganar Clientes</h4>
                    <p className="text-sm text-gray-500 mt-1">Plan de Marketing Digital para Microempresas</p>
                    <div className="mt-2 flex items-center text-sm text-blue-600">
                      <span>Ver más</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                
                <Link href="/servicios/posicionamiento/plan-salir-google" className="block group">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors group-hover:bg-purple-50">
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Plan para Salir en Google</h4>
                    <p className="text-sm text-gray-500 mt-1">Posicionamiento SEO para tu negocio</p>
                    <div className="mt-2 flex items-center text-sm text-purple-600">
                      <span>Ver más</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">¿Necesitas ayuda para elegir?</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Agenda una llamada para descubrir qué servicio se adapta mejor a tus necesidades.
                </p>
                <div className="mt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Agendar Llamada
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de beneficios */}
      <div className="mt-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ¿Por qué elegir nuestros servicios de posicionamiento?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Más de 10 años de experiencia ayudando a negocios como el tuyo a crecer en línea.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Users className="w-8 h-8 mx-auto text-blue-600" />,
                title: 'Enfoque en resultados',
                description: 'Estrategias basadas en datos para obtener los mejores resultados.'
              },
              {
                icon: <Zap className="w-8 h-8 mx-auto text-yellow-500" />,
                title: 'Rápida implementación',
                description: 'Comenzamos a trabajar de inmediato para ver resultados lo antes posible.'
              },
              {
                icon: <Check className="w-8 h-8 mx-auto text-green-500" />,
                title: 'Garantía de satisfacción',
                description: 'Trabajamos hasta que estés completamente satisfecho con los resultados.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contacto">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium">
                Hablar con un experto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

