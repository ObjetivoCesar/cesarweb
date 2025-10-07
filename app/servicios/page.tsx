import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestros Servicios | César Reyes Jaramillo',
  description: 'Descubre nuestros servicios de consultoría estratégica, desarrollo web y posicionamiento para tu negocio en Ecuador.'
};

export default function ServiciosPage() {
  const services = [
    {
      id: 'analisis-estrategico',
      title: 'Análisis Estratégico',
      description: 'Estudio detallado de tu mercado y competencia para identificar oportunidades de crecimiento.',
      image: '/images/estudio_de_mercado.webp',
      features: [
        'Estudio de competencia local',
        'Análisis de mercado y tendencias',
        'Investigación de palabras clave',
        'Evaluación de oportunidades'
      ]
    },
    {
      id: 'desarrollo-web',
      title: 'Desarrollo Web',
      description: 'Sitios web optimizados para conversiones y experiencia de usuario.',
      image: '/images/Diseño Web.webp',
      features: [
        'Diseño responsive',
        'Optimización SEO',
        'Estructura para conversiones',
        'Integración de herramientas'
      ]
    },
    {
      id: 'posicionamiento',
      title: 'Posicionamiento',
      description: 'Estrategias para mejorar tu visibilidad en buscadores y redes sociales.',
      image: '/images/posicionamiento_slide_seo_objetivo.webp',
      features: [
        'SEO técnico',
        'Contenido optimizado',
        'Estrategia de enlaces',
        'Análisis de métricas'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones personalizadas para impulsar tu negocio en el entorno digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/servicios/${service.id}`}>
                  <Button variant="outline" className="w-full">
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
