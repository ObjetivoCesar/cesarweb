import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Search, Target, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Análisis Estratégico | César Reyes Jaramillo',
  description: 'Estudio detallado de tu mercado y competencia para identificar oportunidades de crecimiento en Ecuador.'
};

export default function AnalisisEstrategicoPage() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: 'Estudio de Competencia',
      description: 'Análisis detallado de tus competidores directos e indirectos para identificar fortalezas y oportunidades.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: 'Análisis de Mercado',
      description: 'Evaluación de tendencias, comportamientos del consumidor y oportunidades en el mercado ecuatoriano.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Palabras Clave',
      description: 'Investigación de términos de búsqueda relevantes para tu negocio en Quito, Guayaquil, Cuenca y Loja.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Oportunidades',
      description: 'Identificación de nichos desatendidos y estrategias para posicionarte por encima de la competencia.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/estudio_de_mercado.webp"
            alt="Análisis Estratégico"
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
              Análisis Estratégico
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Toma decisiones basadas en datos reales del mercado ecuatoriano y destaca sobre tu competencia con estrategias probadas.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Conoce a fondo tu mercado
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              En un entorno tan competitivo como el de Ecuador, no puedes permitirte adivinar. Nuestro análisis estratégico te proporciona:
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
              <h3 className="text-lg font-medium text-gray-900">¿Listo para comenzar?</h3>
              <p className="mt-2 text-sm text-gray-500">
                Agenda una llamada para discutir cómo podemos ayudarte con un análisis estratégico personalizado para tu negocio.
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
