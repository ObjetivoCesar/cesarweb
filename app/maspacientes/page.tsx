'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

type SliderType = 'consequences' | 'services' | 'statistics';

interface SliderState {
  currentIndex: number;
  maxIndex: number;
}

interface Sliders {
  [key: string]: SliderState;
}

export default function MasPacientesPage() {
  useEffect(() => {
    // Slider functionality
    const sliders: Sliders = {
      consequences: { currentIndex: 0, maxIndex: 0 },
      services: { currentIndex: 0, maxIndex: 0 },
      statistics: { currentIndex: 0, maxIndex: 0 }
    };

    function getItemsPerView(type: SliderType) {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return type === 'statistics' ? 2 : 2;
      return type === 'statistics' ? 3 : 4;
    }

    function updateSlider(type: SliderType) {
      const track = document.getElementById(type + 'Track');
      const items = track?.children;
      if (!track || !items) return;

      const itemsPerView = getItemsPerView(type);
      const maxIndex = Math.max(0, Math.ceil(items.length / itemsPerView) - 1);
      
      sliders[type].maxIndex = maxIndex;
      
      // Update item widths
      for (let item of Array.from(items)) {
        if (window.innerWidth < 640) {
          (item as HTMLElement).style.width = '100%';
        } else if (window.innerWidth < 1024) {
          (item as HTMLElement).style.width = '50%';
        } else {
          (item as HTMLElement).style.width = type === 'statistics' ? '33.333%' : '25%';
        }
      }
      
      const offset = -sliders[type].currentIndex * (100 / itemsPerView);
      track.style.transform = `translateX(${offset}%)`;
      
      // Update navigation visibility
      const prevBtn = document.getElementById(type + 'Prev');
      const nextBtn = document.getElementById(type + 'Next');
      
      if (prevBtn) prevBtn.style.display = sliders[type].currentIndex > 0 ? 'block' : 'none';
      if (nextBtn) nextBtn.style.display = sliders[type].currentIndex < maxIndex ? 'block' : 'none';
      
      // Update dots for statistics
      if (type === 'statistics') {
        updateDots(type);
      }
    }

    function updateDots(type: SliderType) {
      const dotsContainer = document.getElementById(type + 'Dots');
      if (!dotsContainer) return;
      
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= sliders[type].maxIndex; i++) {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${i === sliders[type].currentIndex ? 'active' : ''}`;
        dot.onclick = () => goToSlide(type, i);
        dotsContainer.appendChild(dot);
      }
    }

    function goToSlide(type: SliderType, index: number) {
      sliders[type].currentIndex = index;
      updateSlider(type);
    }

    // Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 10) {
        header?.classList.add('header-scrolled');
      } else {
        header?.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        if (emailInput) {
          alert('¡Gracias por suscribirte a nuestro boletín!');
          emailInput.value = '';
        }
      });
    }

    // Initialize sliders
    updateSlider('consequences');
    updateSlider('services');
    updateSlider('statistics');

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Actualizar los colores de azul a naranja
  const primaryColor = 'orange';
  const primaryColorHover = 'orange-600';
  const primaryColorLight = 'orange-100';
  const primaryColorDark = 'orange-50';

  // Actualizar el formulario de newsletter
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput') as HTMLInputElement;
    if (emailInput) {
      try {
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailInput.value }),
        });
        
        if (response.ok) {
          alert('¡Gracias por suscribirte a nuestro boletín!');
          emailInput.value = '';
        } else {
          alert('Hubo un error al suscribirte. Por favor, intenta de nuevo.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al suscribirte. Por favor, intenta de nuevo.');
      }
    }
  };

  // Actualizar los enlaces de WhatsApp
  const whatsappNumber = '593963425323';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Definir fuera del useEffect:
  const prevSlide = (type: SliderType) => {
    const track = document.getElementById(type + 'Track');
    if (!track) return;
    const itemsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? (type === 'statistics' ? 2 : 2) : (type === 'statistics' ? 3 : 4);
    const maxIndex = Math.max(0, Math.ceil(track.children.length / itemsPerView) - 1);
    let currentIndex = Number(track.getAttribute('data-current-index')) || 0;
    if (currentIndex > 0) {
      currentIndex--;
      track.setAttribute('data-current-index', String(currentIndex));
      track.style.transform = `translateX(${-currentIndex * (100 / itemsPerView)}%)`;
    }
  };

  const nextSlide = (type: SliderType) => {
    const track = document.getElementById(type + 'Track');
    if (!track) return;
    const itemsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? (type === 'statistics' ? 2 : 2) : (type === 'statistics' ? 3 : 4);
    const maxIndex = Math.max(0, Math.ceil(track.children.length / itemsPerView) - 1);
    let currentIndex = Number(track.getAttribute('data-current-index')) || 0;
    if (currentIndex < maxIndex) {
      currentIndex++;
      track.setAttribute('data-current-index', String(currentIndex));
      track.style.transform = `translateX(${-currentIndex * (100 / itemsPerView)}%)`;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
            <p className="mt-4 text-xl text-orange-500 font-semibold fade-in">
              🌟 Imagina tu agenda llena de pacientes.
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-6xl fade-in">
              👨⚕️ <span className="text-gradient">Confianza es más Pacientes</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 fade-in">
              ¿Tus pacientes buscan un profesional para cuidar su salud?
            </p>
            <h3 className="mt-4 text-xl font-semibold fade-in">
              Esta es tu oportunidad de destacar, generar confianza y llenar tu agenda.
            </h3>
            <div className="mt-10 flex items-center gap-x-6 fade-in">
              <a
                href="https://wa.me/593963410409"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                🚀 ¡No esperes más!
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 lg:mt-0 fade-in">
            <div className="relative">
              <Image
                src="/images/maspacientes/dr-patricio.jpg"
                alt="Dr. Patricio Reyes Pólit"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-black">🗣️ La confianza convierte pacientes.</h2>
            <p className="text-xl text-gray-600 mb-8">
              Médicos como tú llenan sus agendas con nuestras webs optimizadas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 fade-in">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg text-gray-600 mb-4">Video Testimonial</p>
                <p className="text-sm text-gray-500">(Aquí se mostraría el video de testimonio)</p>
              </div>
            </div>
          </div>

          <div className="text-center fade-in">
            <a href="https://wa.me/593963410409" target="_blank" rel="noopener noreferrer" className="primary-button">
              💡 ¡Quiero mi propia página web!
            </a>
            <h3 className="mt-8 text-xl font-semibold text-black">
              👌 Esa decisión cambiará tu vida, te lo prometo.
            </h3>
          </div>
        </div>
      </section>

      {/* Consequences Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-black">🤔 ¿Qué sucede si no contratas ya tu página web?</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-12">
              🚨 Nada. Todo seguirá igual... pero es importante entender lo que estás perdiendo.
            </h3>
          </div>

          <div className="slider-container" id="consequencesSlider">
            <div className="slider-track" id="consequencesTrack">
              <div className="slider-item consequences">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">Clientes que no te conocen</h3>
                  <p className="text-gray-600">Pacientes que buscan tus servicios pero no pueden encontrarte.</p>
                </div>
              </div>
              <div className="slider-item consequences">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold mb-2">Posicionamiento orgánico</h3>
                  <p className="text-gray-600">El éxito de una página web profesional depende de las palabras clave. Nos especializamos en optimizarlas para que tu sitio destaque.</p>
                </div>
              </div>
              <div className="slider-item consequences">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">🕒</div>
                  <h3 className="text-xl font-semibold mb-2">Ahorro de tiempo</h3>
                  <p className="text-gray-600">Una agenda automatizada mejora la percepción de profesionalismo, lo que facilita que los pacientes decidan agendar una cita.</p>
                </div>
              </div>
              <div className="slider-item consequences">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold mb-2">Destacar entre la competencia</h3>
                  <p className="text-gray-600">Mantener informada a tu comunidad con artículos escritos no solo refuerza tu profesionalismo, sino que también genera confianza en tu labor.</p>
                </div>
              </div>
            </div>
            <div className="slider-nav prev" onClick={() => prevSlide('consequences')} id="consequencesPrev">
              <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="slider-nav next" onClick={() => nextSlide('consequences')} id="consequencesNext">
              <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <p className="text-center text-lg text-gray-600 mt-12 mb-8 fade-in">
            Descuidar estos aspectos puede hacerte perder pacientes y afectar tu reputación.
          </p>

          <h2 className="text-center text-3xl font-bold text-black fade-in">
            ✅ TRANQUILO, NOSOTROS LO HACEMOS POR TI
          </h2>
        </div>
      </section>

      {/* Services Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-black">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 mb-8">
              Soluciones diseñadas para médicos que quieren destacar y atraer más pacientes
            </p>
          </div>

          <div className="slider-container" id="servicesSlider">
            <div className="slider-track" id="servicesTrack">
              <div className="slider-item services">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">🖥️</div>
                  <h3 className="text-xl font-semibold mb-2">Estudio de palabras clave</h3>
                  <p className="text-gray-600">Analizamos las búsquedas de tus pacientes, evaluamos la estrategia de tu competencia y optimizamos tu sitio web para que sea fácil de encontrar.</p>
                </div>
              </div>
              <div className="slider-item services">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">🗓️</div>
                  <h3 className="text-xl font-semibold mb-2">Manual del usuario</h3>
                  <p className="text-gray-600">Recibirás una guía detallada sobre cómo posicionar tu sitio web estratégicamente utilizando redes sociales.</p>
                </div>
              </div>
              <div className="slider-item services">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">Automatización de tareas repetitivas</h3>
                  <p className="text-gray-600">Responder a unos pocos mensajes al día es sencillo, pero si se convierten en cientos, necesitarás ayuda. Implementamos automatizaciones para que optimices tu tiempo.</p>
                </div>
              </div>
              <div className="slider-item services">
                <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold mb-2">Aprovecha el momento</h3>
                  <p className="text-gray-600">Muchos profesionales son autodidactas. Con nuestro asesoramiento, aprovecharás todo ese tiempo que ellos pierden; te posicionaremos profesionalmente y captarás más pacientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">📂 Nuestro Portafolio de Éxitos</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explora nuestros proyectos destacados donde hemos transformado la presencia online de médicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-100 fade-in">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/maspacientes/topdent.jpg"
                  alt="TopdentCuenca"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium text-orange-400 mb-1">Web Empresarial</div>
                    <h3 className="text-xl font-semibold mb-2">TopdentCuenca</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Web Empresarial para clínica dental</p>
                <a href="https://topdentcuenca.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline inline-flex items-center">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-100 fade-in">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/maspacientes/dr-guido.jpg"
                  alt="Dr. Guido Díaz Ortega"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium text-orange-400 mb-1">Web Pro Go</div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Guido Díaz Ortega</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Sitio web profesional para médico especialista</p>
                <a href="https://drguidodiazortega.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline inline-flex items-center">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-100 fade-in">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/maspacientes/dr-patricio-2.jpg"
                  alt="Dr. Patricio Reyes Pólit"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium text-orange-400 mb-1">Tarjetas Digitales</div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Patricio Reyes Pólit</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Tarjeta digital profesional para intensivista</p>
                <a href="https://automatizotunegocio.net/pulmocor/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline inline-flex items-center">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-center text-2xl font-semibold text-black mt-12 fade-in">
            y muchísimos proyectos más
          </h3>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-black">📈 Nuestra Experiencia y Trayectoria</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/maspacientes/cesar-reyes.jpg"
                  alt="César Reyes"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="fade-in">
              <p className="text-xl text-gray-700 mb-6">
                Más de 23 años ayudando a profesionales y dueños de negocios a impulsar sus ventas y maximizar su potencial online.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-black">📈 Decide por estadísticas, no por intuición</h2>
              <a href="https://wa.me/593963410409" target="_blank" rel="noopener noreferrer" className="primary-button">
                Agenda una consultoría gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-8 text-black">Estadísticas que no puedes ignorar</h2>
            <p className="text-xl text-gray-600 mb-8">📈 Decide por estadísticas, no por intuición</p>
          </div>

          <div className="slider-container" id="statisticsSlider">
            <div className="slider-track" id="statisticsTrack">
              <div className="slider-item stats">
                <div className="stat-card">
                  <div className="text-2xl font-bold text-orange-500 mb-2">✅ El 69%</div>
                  <h3 className="text-lg font-semibold mb-2">De las citas en línea son agendadas por mujeres</h3>
                  <p className="text-gray-600 mb-4">Quienes toman la mayoría de decisiones de salud en sus familias.</p>
                  <p className="text-sm text-gray-400">Fuente: Doctoralia</p>
                </div>
              </div>
              <div className="slider-item stats">
                <div className="stat-card">
                  <div className="text-2xl font-bold text-orange-500 mb-2">✅ El 65%</div>
                  <h3 className="text-lg font-semibold mb-2">De los pacientes descartan médicos sin una web profesional</h3>
                  <p className="text-gray-600 mb-4">Prefieren información clara y confiable antes de agendar.</p>
                  <p className="text-sm text-gray-400">Fuente: Estudio de Mercado Libre Ecuador, 2023</p>
                </div>
              </div>
              <div className="slider-item stats">
                <div className="stat-card">
                  <div className="text-2xl font-bold text-orange-500 mb-2">🩺 75%</div>
                  <h3 className="text-lg font-semibold mb-2">De los pacientes afirman que la información en línea influye en su decisión</h3>
                  <p className="text-gray-600 mb-4">La información en línea es clave para elegir un médico.</p>
                  <p className="text-sm text-gray-400">Fuente: Pew Research</p>
                </div>
              </div>
              <div className="slider-item stats">
                <div className="stat-card">
                  <div className="text-2xl font-bold text-orange-500 mb-2">🔍 80%</div>
                  <h3 className="text-lg font-semibold mb-2">De los pacientes investigan detenidamente antes de agendar una cita</h3>
                  <p className="text-gray-600 mb-4">La búsqueda previa es esencial para tomar una decisión.</p>
                  <p className="text-sm text-gray-400">Fuente: Google Health Survey</p>
                </div>
              </div>
              <div className="slider-item stats">
                <div className="stat-card">
                  <div className="text-2xl font-bold text-orange-500 mb-2">🌍 72%</div>
                  <h3 className="text-lg font-semibold mb-2">De los adultos buscan información sobre salud y médicos en línea antes de consultar</h3>
                  <p className="text-gray-600 mb-4">La mayoría investiga en internet antes de acudir a un especialista.</p>
                  <p className="text-sm text-gray-400">Fuente: Pew Research</p>
                </div>
              </div>
              <div className="slider-item stats">
                <div className="stat-card">
                  <div className="text-2xl font-bold text-orange-500 mb-2">⭐ 94%</div>
                  <h3 className="text-lg font-semibold mb-2">De los pacientes consideran que la reputación en línea de un médico es clave</h3>
                  <p className="text-gray-600 mb-4">Las reseñas y opiniones influyen en la elección del profesional de salud.</p>
                  <p className="text-sm text-gray-400">Fuente: Doctor.com</p>
                </div>
              </div>
            </div>
            <div className="slider-nav prev" onClick={() => prevSlide('statistics')} id="statisticsPrev">
              <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="slider-nav next" onClick={() => nextSlide('statistics')} id="statisticsNext">
              <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="slider-dots" id="statisticsDots"></div>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative w-full overflow-hidden bg-white py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10"></div>
        <div className="marquee">
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #e5993b' }}>
              Confianza es más Pacientes
            </span>
          </div>
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #e5993b' }}>
              Confianza es más Pacientes
            </span>
          </div>
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #e5993b' }}>
              Confianza es más Pacientes
            </span>
          </div>
          <div className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4" style={{ WebkitTextStroke: '1px #e5993b' }}>
              Confianza es más Pacientes
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold mb-4 text-black">📍 Ubicación y Contacto</h2>
            <p className="text-xl text-gray-600 mb-8">Estamos aquí para ayudarte a potenciar tu presencia online.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg fade-in">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-600 mb-6 flex-grow">Loja, Ecuador.</p>
              <a href="https://maps.app.goo.gl/M51LRhnF79X5cPNB9" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline inline-flex items-center">
                📥 Descargar ubicación
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg fade-in">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-6 flex-grow">Contáctanos directamente para resolver tus inquietudes.</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${primaryColor}-500 hover:text-${primaryColorHover}`}
              >
                📱 Contactar por WhatsApp
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600 bg-white p-6 rounded-lg fade-in">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold mb-2">Contacto</h3>
              <p className="text-gray-600 mb-6 flex-grow">Descarga mi contacto y te ayudare a a crear una web profesional.</p>
              <a
                href="/Cesar-Reyes-Contacto.vcf"
                download
                className="text-orange-500 hover:text-orange-600 inline-flex items-center"
              >
                🗓️ Agregar contacto
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <h3 className="text-center text-2xl font-semibold text-black fade-in">
            ⏳ No pierdas más pacientes por falta de un sitio profesional.
          </h3>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 shadow-lg fade-in">
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Mantente Informado</h2>
            <p className="text-gray-600 mb-6 text-center">
              Suscríbete a nuestro boletín para recibir las últimas actualizaciones sobre marketing médico y estrategias para atraer pacientes.
            </p>
            <form id="newsletterForm" className="space-y-4">
              <input
                type="email"
                id="emailInput"
                placeholder="Ingresa tu correo electrónico"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className={`w-full bg-${primaryColor}-500 hover:bg-${primaryColorHover} text-white font-semibold py-3 px-6 rounded-full transition-colors`}
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 