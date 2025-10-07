import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Smartphone, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo Web | César Reyes Jaramillo',
  description: 'Diseño y desarrollo de sitios web profesionales, rápidos y optimizados para conversiones en Ecuador.'
};

export default function DesarrolloWebPage() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: 'Diseño Responsivo',
      description: 'Sitios que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta pantallas de escritorio.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Rendimiento Óptimo',
      description: 'Páginas ultrarrápidas que mejoran la experiencia del usuario y el posicionamiento en buscadores.'
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Código Limpio',
      description: 'Desarrollo siguiendo las mejores prácticas y estándares de la industria para un mantenimiento sencillo.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Seguridad',
      description: 'Protección avanzada contra amenazas y vulnerabilidades para tu sitio y los datos de tus clientes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/Diseño Web.webp"
            alt="Desarrollo Web"
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
              Desarrollo Web Profesional
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Crea una presencia en línea poderosa que convierta visitantes en clientes con nuestros sitios web de alto rendimiento.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tu negocio merece lo mejor
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              En la era digital, tu sitio web es tu mejor vendedor. Por eso nos enfocamos en crear experiencias web que:
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
                Agenda una llamada para discutir cómo podemos crear o mejorar tu presencia en línea.
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
