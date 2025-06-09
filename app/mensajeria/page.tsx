'use client';

import { useState } from 'react';
import PropuestaForm from './components/PropuestaForm';

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
        /* Carrousel slide para cards en móvil */
        .cards-carousel {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 80%;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 1.5rem;
          padding-bottom: 1rem;
          justify-items: center;
        }
        .cards-carousel > * {
          scroll-snap-align: start;
        }
        @media (min-width: 768px) {
          /* Para planes: 2 filas de 2 cards */
          .cards-carousel.planes {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-auto-flow: unset;
            grid-auto-columns: unset;
            overflow-x: unset;
            scroll-snap-type: none;
            gap: 2rem;
            padding-bottom: 0;
            justify-items: center;
            align-items: stretch;
          }
          /* Para beneficios: 2 filas de 3 cards */
          .cards-carousel.beneficios {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-auto-flow: unset;
            grid-auto-columns: unset;
            overflow-x: unset;
            scroll-snap-type: none;
            gap: 2rem;
            padding-bottom: 0;
            justify-items: center;
            align-items: stretch;
          }
          /* Para las secciones solicitadas: grid en escritorio, slide solo en móvil */
          .cards-carousel.no-slide {
            display: grid;
            grid-auto-flow: unset;
            grid-auto-columns: unset;
            overflow-x: unset;
            scroll-snap-type: none;
            gap: 2rem;
            padding-bottom: 0;
            justify-items: center;
            align-items: stretch;
            grid-template-columns: repeat(4, 1fr);
          }
          @media (max-width: 767px) {
            .cards-carousel.no-slide {
              display: grid;
              grid-auto-flow: column;
              grid-auto-columns: 80%;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: 1.5rem;
              padding-bottom: 1rem;
              justify-items: center;
              align-items: stretch;
              grid-template-columns: unset;
            }
          }
          /* Ocultar barra de scroll en escritorio */
          @media (min-width: 768px) {
            .cards-carousel.no-slide {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .cards-carousel.no-slide::-webkit-scrollbar {
              display: none;
            }
          }
        }
      `}</style>

      <main className="bg-gray-50 font-sans text-gray-800">
        {/* Video Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Sistema de Mensajería Objetivo.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/videos/mensajería vertical.mp4" type="video/mp4" media="(max-width: 767px)" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-[#2B4C7E]/30 z-10"></div>
        </section>

        {/* Hero Section */}
        <section id="hero" className="relative h-[400px] w-full overflow-hidden flex items-center justify-center bg-[#2B4C7E]">
          <img
            src="/images/portada_cesarbn.jpg"
            alt="César Reyes portada"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ minHeight: '300px', height: '100%', width: '100%' }}
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Sistema de Mensajería Objetivo</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">
              Centraliza y automatiza todas tus comunicaciones en una sola plataforma. Optimiza tu tiempo y mejora la atención a tus pacientes.
            </p>
            <button className="bg-[#4A90E2] text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:bg-[#1A365D] hover:shadow-2xl transition-all duration-200 text-lg">
              Comienza Gratis
            </button>
          </div>
        </section>



        {/* Nueva Sección de Alerta */}
        <section className="w-full h-screen relative flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark opacity-20 z-10"></div>
            <img 
              src="/images/hero-mensajeria.webp" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Nueva Sección de Texto */}
        <section className="w-full h-[400px] bg-dark py-16 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                ¡Optimizar tu mensajería podría ahorrarte un 20% de tu presupuesto anual!
              </h1>
              <p className="text-xl text-white mb-8">
                ¿Sabías que tu equipo pierde más de 2 horas al día en correos, WhatsApp y búsquedas ineficientes? Nuestro Sistema de Mensajería Objetivo con IA te devuelve ese tiempo para dedicarlo a tus pacientes.
              </p>
              <a
                href="#cta-final"
                className="inline-flex items-center justify-center bg-[#4A90E2] hover:bg-[#1A365D] text-white font-bold text-lg py-4 px-10 rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-200 ease-in-out border-4 border-white mb-8 ring-4 ring-[#E8F1F8]/40"
                style={{ minWidth: '320px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.028 12.028 0 00-5.84 7.38H6.18M15.59 14.37A12.021 12.021 0 0118 10.18H9.98M15.59 14.37A6 6 0 0018 10.18v-4.82m-2.41 9.01L18 10.18M3.75 3.75L18 10.18m-14.25 0A12.015 12.015 0 0118 10.18M3.75 3.75c0-1.02.738-1.875 1.75-1.875h12.75c1.013 0 1.75.855 1.75 1.875v10.5A12.02 12.02 0 0118 10.18M3.75 3.75H2.25m15.75 0H18m-2.41 9.01L18 10.18m0 0A12.015 12.015 0 013.75 3.75m14.25 0c0 .26-.02.516-.057.764L3.75 3.75m14.25 0L3.75 3.75" />
                </svg>
                <span className="flex-1 text-center">Agenda una Llamada de Demostración Gratuita</span>
              </a>
              <p className="text-white text-lg">
                Descubre en 15 minutos cómo optimizar la comunicación con tus pacientes.
              </p>
            </div>
          </div>
        </section>


        {/* Nueva sección H1 y cards */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ¿Y Si Pudieras Hacer Más con Menos Tiempo?
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tu tiempo es tu recurso más valioso. Sin embargo, en el día a día de una PYME, de un profesional independiente o de un artesano, hay factores invisibles que lo drenan sin que lo notes.
              </p>
            </div>
            {/* Cards: ¿Y Si Pudieras Hacer Más con Menos Tiempo? */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <img src="/images/mensajeria/comentarios.webp" alt="Mensajes y comentarios" className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Mensajes y comentarios sin fin</h4>
                  <p className="text-gray-600 flex-1">Gran parte de tu jornada se va respondiendo comunicaciones que no siempre se traducen en oportunidades reales de negocio.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <img src="/images/mensajeria/información.webp" alt="Búsqueda de información" className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Búsqueda constante de información</h4>
                  <p className="text-gray-600 flex-1">Archivos, datos de clientes, historial de pedidos... ¿Cuánto tiempo pierdes localizando información que debería estar al alcance de un clic?</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <img src="/images/mensajeria/oportunidades.webp" alt="Oportunidades perdidas" className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Correos con oportunidades perdidas</h4>
                  <p className="text-gray-600 flex-1">Promociones, alianzas o solicitudes importantes que nunca se leyeron a tiempo o se enterraron en la bandeja de entrada.</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <img src="/images/mensajeria/olvidados.webp" alt="Recordatorios olvidados" className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Recordatorios olvidados, citas perdidas</h4>
                  <p className="text-gray-600 flex-1">Una respuesta tardía puede significar un cliente menos. Y muchas veces, eso ocurre simplemente por no tener un sistema de gestión eficiente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN NUEVA: Video y cards de números */}
        <section className="py-12">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CBGQILBQSew"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
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
            <div className="cards-carousel no-slide mb-16">
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
            <div className="cards-carousel beneficios mb-16">
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 013.296-1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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

        {/* Video Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Sistema de Mensajería Objetivo.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/videos/mensajería vertical.mp4" type="video/mp4" media="(max-width: 767px)" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-[#2B4C7E]/30 z-10"></div>
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
            <div className="cards-carousel no-slide">
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
              Preguntas Frecuentes: Resuelve Tus Dudas y Potencia Tu Decisión
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aquí abordamos las inquietudes más comunes sobre la <b>automatización de la comunicación</b>, la <b>gestión de leads</b> y el <b>ahorro de tiempo</b> para PYMES, profesionales independientes y artesanos.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Pregunta 1 */}
            <div className="bg-white rounded-xl shadow-lg">
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-colors faq-button ${openFaqs.includes(0) ? 'open bg-gray-100' : ''}`}
                onClick={() => toggleFaq(0)}
                aria-expanded={openFaqs.includes(0)}
              >
                <span className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-3">
                    {openFaqs.includes(0) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                      </svg>
                    )}
                  </span>
                  ¿Cómo puede un asistente multicanal de IA ayudar a mi PYME a ahorrar tiempo y dinero?
                </span>
              </button>
              <div
                className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openFaqs.includes(0) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openFaqs.includes(0) && (
                  <p className="text-gray-600 mt-2">Nuestro <b>asistente multicanal con IA</b> centraliza y automatiza la gestión de todas tus comunicaciones: <b>WhatsApp, Facebook, Instagram, TikTok, tu web e incluso tus emails</b>. Al <b>filtrar y clasificar</b> los mensajes, tu equipo se enfoca solo en leads calificados. Esto significa <b>menos horas en tareas repetitivas y más tiempo en ventas y producción</b>, lo que se traduce directamente en <b>ahorros significativos</b> y un <b>aumento de la productividad</b>.</p>
                )}
              </div>
            </div>
            {/* Pregunta 2 */}
            <div className="bg-white rounded-xl shadow-lg">
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-colors faq-button ${openFaqs.includes(1) ? 'open bg-gray-100' : ''}`}
                onClick={() => toggleFaq(1)}
                aria-expanded={openFaqs.includes(1)}
              >
                <span className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-3">
                    {openFaqs.includes(1) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                      </svg>
                    )}
                  </span>
                  ¿Es complicado integrar este sistema de mensajería objetivo con mis plataformas actuales (WhatsApp Business, Facebook, Instagram, etc.)?
                </span>
              </button>
              <div
                className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openFaqs.includes(1) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openFaqs.includes(1) && (
                  <p className="text-gray-600 mt-2">¡Para nada! Nos encargamos de toda la <b>integración y configuración</b> con tus cuentas de <b>WhatsApp Business, Facebook Messenger, Instagram DMs, TikTok y tu sitio web</b>. Nuestro objetivo es que la implementación sea <b>sencilla y sin estrés</b> para ti, garantizando que el <b>flujo de comunicación</b> sea ininterrumpido desde el primer día.</p>
                )}
              </div>
            </div>
            {/* Pregunta 3 */}
            <div className="bg-white rounded-xl shadow-lg">
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-colors faq-button ${openFaqs.includes(2) ? 'open bg-gray-100' : ''}`}
                onClick={() => toggleFaq(2)}
                aria-expanded={openFaqs.includes(2)}
              >
                <span className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-3">
                    {openFaqs.includes(2) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                      </svg>
                    )}
                  </span>
                  Mi negocio depende mucho del contacto personal. ¿Un chatbot o sistema de IA no restará cercanía a mis clientes?
                </span>
              </button>
              <div
                className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openFaqs.includes(2) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openFaqs.includes(2) && (
                  <p className="text-gray-600 mt-2">¡Al contrario! Nuestro sistema híbrido está diseñado para <b>potenciar la empatía humana</b>. La <b>IA se encarga de las tareas repetitivas y de calificar al cliente</b>, liberando a tu equipo para tener <b>interacciones más personalizadas y significativas</b> con los leads que realmente importan. Así, tu contacto personal se vuelve <b>más valioso y enfocado</b>, aumentando la <b>satisfacción del cliente</b> y la <b>tasa de conversión</b>.</p>
                )}
              </div>
            </div>
            {/* Pregunta 4 */}
            <div className="bg-white rounded-xl shadow-lg">
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-colors faq-button ${openFaqs.includes(3) ? 'open bg-gray-100' : ''}`}
                onClick={() => toggleFaq(3)}
                aria-expanded={openFaqs.includes(3)}
              >
                <span className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-3">
                    {openFaqs.includes(3) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                      </svg>
                    )}
                  </span>
                  ¿Cómo puedo saber si este sistema de automatización es una buena inversión para mi negocio?
                </span>
              </button>
              <div
                className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openFaqs.includes(3) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openFaqs.includes(3) && (
                  <p className="text-gray-600 mt-2">La mejor manera es ver los <b>resultados proyectados</b>. Calcula cuánto tiempo pierde tu equipo diariamente en mensajes y emails. Con nuestro sistema, puedes <b>recuperar miles de dólares anuales por empleado</b>. Te invitamos a <b>agendar una demostración sin costo</b>, donde analizaremos tu caso específico y te mostraremos cómo el <b>Sistema de Mensajería Objetivo</b> se convierte en una <b>inversión rentable</b> que impulsa tu crecimiento.</p>
                )}
              </div>
            </div>
            {/* Pregunta 5 */}
            <div className="bg-white rounded-xl shadow-lg">
              <button
                className={`w-full text-left p-6 flex justify-between items-center transition-colors faq-button ${openFaqs.includes(4) ? 'open bg-gray-100' : ''}`}
                onClick={() => toggleFaq(4)}
                aria-expanded={openFaqs.includes(4)}
              >
                <span className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-3">
                    {openFaqs.includes(4) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                      </svg>
                    )}
                  </span>
                  ¿El sistema incluye soporte técnico y actualizaciones continuas?
                </span>
              </button>
              <div
                className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openFaqs.includes(4) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openFaqs.includes(4) && (
                  <p className="text-gray-600 mt-2">¡Sí! Nos encargamos del <b>mantenimiento y las mejoras continuas del sistema</b>. Al elegir nuestro servicio, obtienes acceso a las últimas funcionalidades y mejoras sin costo adicional (en planes mensuales/anuales). Nuestro equipo de soporte está siempre disponible para asegurar que tu <b>automatización de comunicación</b> funcione sin problemas.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Planes de Inversión */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Elige el Plan que Impulsará tu Crecimiento y Liberará tu Tiempo
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                No es un gasto, es una <span className="font-bold text-[#e78c24]">inversión inteligente</span> que se traduce en <span className="font-bold text-[#e78c24]">más clientes y más eficiencia</span> desde el día uno. Nuestros planes se adaptan a tus necesidades de tráfico y crecimiento.
              </p>
            </div>
            <div className="cards-carousel planes mb-10">
              {/* Plan JR */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border border-gray-200">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Plan JR</h4>
                <div className="text-4xl font-extrabold mb-2">$50 <span className="text-base font-normal">USD/mes</span></div>
                <p className="text-gray-600 mb-4">1 Red Social o Solo WhatsApp. Detección Inteligente de Mensajes, Respuestas Consistentes, App Web para Recordatorios. Ideal para empezar tu automatización.</p>
                <ul className="text-gray-800 text-left mb-6 space-y-2">
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>1 Canal (Red Social o WhatsApp)</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Detección Inteligente de Mensajes</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Respuestas Consistentes</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>App Web para Recordatorios</li>
                </ul>
                <button className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition">Empezar con JR</button>
              </div>
              {/* Plan Mensual */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border border-gray-200">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Plan Mensual</h4>
                <div className="text-4xl font-extrabold mb-2">$150 <span className="text-base font-normal">USD/mes</span></div>
                <p className="text-gray-600 mb-4">Sistema de Mensajería Objetivo Completo: Todas las plataformas (WhatsApp, FB, IG, TikTok, Web), Revisión y Clasificación de Emails, Detección Inteligente, Calificación Profunda, Dirección Estratégica, Reportes Instantáneos, App Web Móvil (Recordatorios, Citas), Operación 100% Automática.</p>
                <ul className="text-gray-800 text-left mb-6 space-y-2">
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Todas las Plataformas (WhatsApp, FB, IG, TikTok, Web)</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Revisión y Clasificación de Emails</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Detección Inteligente Avanzada</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Calificación Profunda de Leads</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Dirección Estratégica</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Reportes Instantáneos</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>App Web Móvil Completa</li>
                  <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span>Operación 100% Automática</li>
                </ul>
                <button className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition">Elegir Plan Mensual</button>
              </div>
              {/* Plan Anual */}
              <div className="relative rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-[#009688] bg-[#009688] text-white">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow">El más Popular</span>
                <h4 className="text-2xl font-bold mb-2">Plan Anual</h4>
                <div className="text-4xl font-extrabold mb-2">$1500 <span className="text-base font-normal">USD/año</span></div>
                <p className="mb-4">¡El más Popular! Todo lo del Plan Mensual, con un ahorro significativo de $300 USD y soporte prioritario. La opción más rentable para tu crecimiento.</p>
                <ul className="text-left mb-6 space-y-2">
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✔</span>Todo lo del Plan Mensual</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✔</span>Ahorro de $300 USD vs Mensual</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✔</span>Soporte Prioritario</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✔</span>Máxima Rentabilidad</li>
                </ul>
                <button className="mt-auto w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 rounded-lg transition">Obtener Plan Anual</button>
              </div>
              {/* Compra del Sistema */}
              <div className="rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-[#1a2236] bg-[#1a2236] text-white">
                <h4 className="text-2xl font-bold mb-2">Compra del Sistema</h4>
                <div className="text-4xl font-extrabold mb-2">$990 <span className="text-base font-normal">USD (Pago Único)</span></div>
                <p className="mb-4">¡Tu propiedad para siempre! Incluye todas las funcionalidades actuales, futuras actualizaciones principales y soporte continuo. Control total para la máxima escalabilidad.</p>
                <ul className="text-left mb-6 space-y-2">
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✔</span>Propiedad Vitalicia del Sistema</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✔</span>Todas las Funcionalidades Actuales</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✔</span>Futuras Actualizaciones Principales Incluidas</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✔</span>Soporte Continuo Dedicado</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">✔</span>Máxima Escalabilidad y Control</li>
                </ul>
                <button className="mt-auto w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 rounded-lg transition">Adquirir Sistema</button>
              </div>
            </div>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mt-8 text-sm">
              <span className="font-semibold text-[#e78c24]">Recomendación:</span> Para maximizar resultados, combina tu Sistema de Mensajería Objetivo con campañas estratégicas en Google Ads o Facebook Ads para optimizar tu tráfico y asegurar un flujo constante de leads.
            </p>
          </div>
        </section>

        {/* Formulario de Propuesta */}
        <PropuestaForm />

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