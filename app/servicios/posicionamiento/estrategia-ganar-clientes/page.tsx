import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Zap, Clock, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Estrategia para Ganar Clientes - Posicionamiento de Marca',
  description: 'Plan de Marketing Digital para Microempresas en Loja y todo Ecuador. Aumenta tu base de clientes con estrategias comprobadas.',
  keywords: 'estrategia ganar clientes Loja, plan marketing digital microempresas, aumentar clientes Ecuador, estrategias ventas efectivas, consultoría marketing digital Loja'
};

export default function EstrategiaGanarClientes() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Estrategia para Ganar Clientes</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Plan de Marketing Digital para Microempresas en Loja y todo Ecuador
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Lo que incluye este servicio:</h2>
                <ul className="space-y-4">
                  {[
                    'Análisis de mercado y competencia',
                    'Definición de tu propuesta única de valor',
                    'Estrategia de contenido para redes sociales',
                    'Plan de acción para captación de leads',
                    'Seguimiento y ajustes mensuales'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-6 h-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Inversión</h3>
                  <p className="text-3xl font-bold text-blue-700 mb-2">$1,550</p>
                  <p className="text-gray-600 text-sm">Pago único o en cuotas</p>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                    Contratar ahora
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Beneficios clave</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Users className="w-8 h-8 text-blue-600" />,
                      title: 'Mayor visibilidad',
                      description: 'Posiciónate como referente en tu sector y llega a más clientes potenciales.'
                    },
                    {
                      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                      title: 'Crecimiento sostenido',
                      description: 'Estrategias comprobadas para aumentar tus ventas de manera consistente.'
                    },
                    {
                      icon: <Clock className="w-8 h-8 text-yellow-600" />,
                      title: 'Ahorro de tiempo',
                      description: 'Enfócate en lo que mejor haces mientras nosotros nos encargamos de atraer clientes.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-gray-900 mb-3">¿Listo para comenzar?</h3>
                  <p className="text-gray-600 mb-4">
                    Agenda una llamada de diagnóstico gratuita para analizar tu negocio y cómo podemos ayudarte a crecer.
                  </p>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Agendar llamada
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
