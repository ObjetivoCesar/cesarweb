'use client';

import { useState } from 'react';

export default function MensajeriaPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const faqs = [
    {
      question: '¿Cuánto tiempo toma la implementación?',
      answer: 'La implementación básica toma menos de 24 horas. El sistema está diseñado para ser intuitivo y fácil de usar, con una curva de aprendizaje mínima.'
    },
    {
      question: '¿Es compatible con mis herramientas actuales?',
      answer: 'Sí, nuestro sistema se integra con las principales plataformas de comunicación y herramientas de negocio, incluyendo Gmail, Outlook, WhatsApp Business, y más.'
    },
    {
      question: '¿Qué tan segura es la plataforma?',
      answer: 'La seguridad es nuestra prioridad. Utilizamos encriptación de extremo a extremo y cumplimos con los estándares más altos de protección de datos.'
    }
  ];
  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  return (
    <>
      <style jsx global>{`
        .faq-answer {
          display: none;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          max-height: 0;
        }
        .faq-answer.open {
          display: block;
          max-height: 1000px;
        }
        .faq-button .icon-minus { display: none; }
        .faq-button.open .icon-plus { display: none; }
        .faq-button.open .icon-minus { display: inline-block; }
      `}</style>

      <main className="bg-gray-50 font-sans text-gray-800">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/Q8Vl6_kcd84?autoplay=1&mute=1&loop=1&playlist=Q8Vl6_kcd84&controls=0&showinfo=0&modestbranding=1&rel=0"
              title="Video Hero Mensajería"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
          {/* Overlay negro con 40% de opacidad */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }}></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900 drop-shadow-lg">
              ¡Alerta PYME! Cada Empleado te Cuesta $1,945 USD Anuales en Tareas Repetitivas
            </h1>
            <div className="space-y-4">
              <a
                href="#cta-final"
                className="inline-flex items-center bg-white hover:bg-yellow-200 text-yellow-600 font-bold text-lg py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-150 ease-in-out animate-pulse border-2 border-yellow-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.028 12.028 0 00-5.84 7.38H6.18M15.59 14.37A12.021 12.021 0 0118 10.18H9.98M15.59 14.37A6 6 0 0018 10.18v-4.82m-2.41 9.01L18 10.18M3.75 3.75L18 10.18m-14.25 0A12.015 12.015 0 0118 10.18M3.75 3.75c0-1.02.738-1.875 1.75-1.875h12.75c1.013 0 1.75.855 1.75 1.875v10.5A12.02 12.02 0 0118 10.18M3.75 3.75H2.25m15.75 0H18m-2.41 9.01L18 10.18m0 0A12.015 12.015 0 013.75 3.75m14.25 0c0 .26-.02.516-.057.764L3.75 3.75m14.25 0L3.75 3.75" />
                </svg>
                Agenda una Llamada de Demostración Gratuita
              </a>
              <p className="text-gray-900 text-lg opacity-90 drop-shadow-lg">
                Descubre en 15 minutos cómo convertir tiempo perdido en ventas concretas.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problema" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                El Costo Oculto de la Ineficiencia: ¿Cuánto Estás Perdiendo REALMENTE?
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tu PYME, como profesional independiente o artesano, cada minuto cuenta. Pero la realidad es que tu equipo, sin saberlo, está perdiendo horas valiosas en un laberinto de tareas repetitivas y distracciones digitales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">El Problema:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    <span><strong className="text-gray-700">Mensajes y correos sin fin:</strong> Atendiendo comunicaciones que no siempre llevan a una venta.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                    <span><strong className="text-gray-700">Búsqueda constante:</strong> Perdiendo el tiempo buscando información crucial para tu operación.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong className="text-gray-700">Falta de enfoque:</strong> Las interrupciones constantes rompen la concentración, afectando la productividad real.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong className="text-gray-700">Oportunidades perdidas:</strong> Clientes que se van a la competencia por una respuesta tardía.</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg shadow text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <p className="text-sm text-red-700">Bandeja de entrada saturada</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg shadow text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-sm text-red-700">Tiempo perdido</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg shadow text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                  <p className="text-sm text-red-700">Búsqueda de datos</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg shadow text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  <p className="text-sm text-red-700">Signo de dólar tachado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solución Section */}
        <section id="solucion" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                La Solución: Un Sistema de Mensajería que Trabaja para Ti
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nuestro Sistema de Mensajería Objetivo con IA filtra, organiza y prioriza tus comunicaciones, permitiéndote enfocarte en lo que realmente importa: hacer crecer tu negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09zM18.25 7.5l.813 2.846a4.5 4.5 0 012.187 2.187L24 12l-2.75.813a4.5 4.5 0 01-2.187 2.187L16.25 18l-.813-2.846a4.5 4.5 0 01-2.187-2.187L10.5 12l2.75-.813a4.5 4.5 0 012.187-2.187L16.25 6l.813 1.5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Filtrado Inteligente</h4>
                <p className="text-gray-600">
                  La IA analiza cada mensaje y determina su prioridad, filtrando el spam y destacando las oportunidades reales de venta.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Automatización Total</h4>
                <p className="text-gray-600">
                  Respuestas automáticas, agendamiento de reuniones y seguimiento de leads, todo sin intervención manual.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Análisis en Tiempo Real</h4>
                <p className="text-gray-600">
                  Dashboard con métricas clave y tendencias para tomar decisiones basadas en datos.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-yellow-400 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">
                    ¿Listo para Recuperar el Control de tu Tiempo?
                  </h4>
                  <p className="text-lg opacity-90 mb-6">
                    Únete a cientos de PYMES que ya están ahorrando más de 2 horas diarias en gestión de mensajería.
                  </p>
                  <a
                    href="#cta-final"
                    className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-bold text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-150 ease-in-out"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.028 12.028 0 00-5.84 7.38H6.18M15.59 14.37A12.021 12.021 0 0118 10.18H9.98M15.59 14.37A6 6 0 0018 10.18v-4.82m-2.41 9.01L18 10.18M3.75 3.75L18 10.18m-14.25 0A12.015 12.015 0 0118 10.18M3.75 3.75c0-1.02.738-1.875 1.75-1.875h12.75c1.013 0 1.75.855 1.75 1.875v10.5A12.02 12.02 0 0118 10.18M3.75 3.75H2.25m15.75 0H18m-2.41 9.01L18 10.18m0 0A12.015 12.015 0 013.75 3.75m14.25 0c0 .26-.02.516-.057.764L3.75 3.75m14.25 0L3.75 3.75" />
                    </svg>
                    Agenda tu Demo Gratuita
                  </a>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://picsum.photos/seed/dashboard/600/400" 
                    alt="Dashboard del Sistema de Mensajería" 
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section id="beneficios" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Beneficios que Transformarán tu Negocio
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre cómo nuestro Sistema de Mensajería Objetivo puede revolucionar la forma en que tu equipo maneja las comunicaciones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">Ahorro de Tiempo</h4>
                </div>
                <p className="text-gray-600">
                  Recupera más de 2 horas diarias por empleado en gestión de mensajería, permitiéndoles enfocarse en tareas de mayor valor.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">ROI Garantizado</h4>
                </div>
                <p className="text-gray-600">
                  Ahorra $1,500 USD anuales por empleado en costos de productividad y mejora la tasa de conversión de leads.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 013.296-1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">Satisfacción del Cliente</h4>
                </div>
                <p className="text-gray-600">
                  Respuestas más rápidas y precisas aumentan la satisfacción del cliente y reducen el tiempo de resolución.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">Eficiencia Operativa</h4>
                </div>
                <p className="text-gray-600">
                  Automatización de tareas repetitivas y flujos de trabajo optimizados para mayor productividad.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">Seguridad Mejorada</h4>
                </div>
                <p className="text-gray-600">
                  Protección avanzada contra spam, phishing y amenazas cibernéticas en todas tus comunicaciones.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">Análisis Avanzado</h4>
                </div>
                <p className="text-gray-600">
                  Insights detallados sobre el rendimiento de tu equipo y la efectividad de tus comunicaciones.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#cta-final"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-150 ease-in-out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.028 12.028 0 00-5.84 7.38H6.18M15.59 14.37A12.021 12.021 0 0118 10.18H9.98M15.59 14.37A6 6 0 0018 10.18v-4.82m-2.41 9.01L18 10.18M3.75 3.75L18 10.18m-14.25 0A12.015 12.015 0 0118 10.18M3.75 3.75c0-1.02.738-1.875 1.75-1.875h12.75c1.013 0 1.75.855 1.75 1.875v10.5A12.02 12.02 0 0118 10.18M3.75 3.75H2.25m15.75 0H18m-2.41 9.01L18 10.18m0 0A12.015 12.015 0 013.75 3.75m14.25 0c0 .26-.02.516-.057.764L3.75 3.75m14.25 0L3.75 3.75" />
                </svg>
                Comienza a Ahorrar Tiempo Hoy
              </a>
            </div>
          </div>
        </section>

        {/* Cómo Funciona Section */}
        <section id="como-funciona" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cómo Funciona: Simple y Efectivo
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En solo 3 pasos, transforma la forma en que tu equipo maneja las comunicaciones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-primary">1</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Configuración Inicial</h4>
                  <p className="text-gray-600">
                    Conecta tus canales de comunicación (email, WhatsApp, redes sociales) en minutos.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-primary">2</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Entrenamiento de IA</h4>
                  <p className="text-gray-600">
                    Nuestra IA aprende de tus patrones de comunicación y prioridades de negocio.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>

              <div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-primary">3</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">¡Listo para Usar!</h4>
                  <p className="text-gray-600">
                    Comienza a ahorrar tiempo y aumentar la productividad de tu equipo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    ¿Necesitas Ayuda para Empezar?
                  </h4>
                  <p className="text-lg text-gray-600 mb-6">
                    Nuestro equipo de expertos te guiará en todo el proceso de implementación y te ayudará a maximizar los beneficios desde el primer día.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Configuración personalizada
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Capacitación del equipo
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Soporte continuo
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://picsum.photos/seed/soporte/600/400" 
                    alt="Equipo de soporte" 
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section id="testimonios" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Lo que Dicen Nuestros Clientes
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre cómo otras PYMES han transformado su productividad con nuestro Sistema de Mensajería Objetivo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://picsum.photos/seed/person1/100/100" 
                    alt="Cliente 1" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">María González</h4>
                    <p className="text-sm text-gray-600">CEO, Empresa de Servicios</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Desde que implementamos el sistema, nuestro equipo ha recuperado más de 2 horas diarias. La inversión se pagó sola en el primer mes."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://picsum.photos/seed/person2/100/100" 
                    alt="Cliente 2" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Carlos Rodríguez</h4>
                    <p className="text-sm text-gray-600">Director, Consultoría</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "La IA es increíblemente precisa. Ahora nuestros clientes reciben respuestas inmediatas y nuestro equipo puede enfocarse en el trabajo estratégico."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://picsum.photos/seed/person3/100/100" 
                    alt="Cliente 3" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ana Martínez</h4>
                    <p className="text-sm text-gray-600">Gerente, E-commerce</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "El sistema ha mejorado significativamente nuestra tasa de conversión. Los clientes aprecian las respuestas rápidas y personalizadas."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-gray-50">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Preguntas Frecuentes
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resolvemos tus dudas sobre nuestro Sistema de Mensajería Objetivo.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg">
                <button
                  className={`w-full text-left p-6 flex justify-between items-center transition-colors ${openFaqs.includes(idx) ? 'bg-gray-100' : ''}`}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqs.includes(idx)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <span>
                    {openFaqs.includes(idx) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openFaqs.includes(idx) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{ transitionProperty: 'max-height, opacity' }}
                >
                  {openFaqs.includes(idx) && (
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final Section */}
        <section id="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-primary to-yellow-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Productividad?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a cientos de PYMES que ya están ahorrando tiempo y aumentando sus ventas con nuestro Sistema de Mensajería Objetivo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-150 ease-in-out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.028 12.028 0 00-5.84 7.38H6.18M15.59 14.37A12.021 12.021 0 0118 10.18H9.98M15.59 14.37A6 6 0 0018 10.18v-4.82m-2.41 9.01L18 10.18M3.75 3.75L18 10.18m-14.25 0A12.015 12.015 0 0118 10.18M3.75 3.75c0-1.02.738-1.875 1.75-1.875h12.75c1.013 0 1.75.855 1.75 1.875v10.5A12.02 12.02 0 0118 10.18M3.75 3.75H2.25m15.75 0H18m-2.41 9.01L18 10.18m0 0A12.015 12.015 0 013.75 3.75m14.25 0c0 .26-.02.516-.057.764L3.75 3.75m14.25 0L3.75 3.75" />
                </svg>
                Agenda tu Demo Gratuita
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-150 ease-in-out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                Más Información
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 