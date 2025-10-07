import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, BarChart2, TrendingUp, Target } from 'lucide-react';

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
              <h3 className="text-lg font-medium text-gray-900">¿Listo para destacar?</h3>
              <p className="mt-2 text-sm text-gray-500">
                Agenda una llamada para descubrir cómo podemos mejorar tu posicionamiento en buscadores.
              </p>
              <div className="mt-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Agendar Llamada
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
