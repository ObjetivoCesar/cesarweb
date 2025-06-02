"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MobileSlider from "@/components/mobile-slider"
import ExpandableCard from "@/components/expandable-card"
import NewsletterForm from "@/components/newsletter-form"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import React from "react"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactPhotoSlider from "@/components/contact-photo-slider"

// Componente para el slider de cards móviles con dots
function CardsMobileSlider() {
  const cards = [
    {
      title: "¿Tu Negocio en Riesgo? ¡75% Fracasan!",
      text: "El 75% de las empresas cierran antes de los 2 años por no tener estrategias de ventas claras, ¡sin un estudio de mercado, estás jugando a la ruleta! No dejes que la intuición te cueste tu sueño. Un diagnóstico profundo te ahorra tiempo, dinero y muchísimos dolores de cabeza.",
    },
    {
      title: "El Secreto de los que Crecen",
      text: "Las empresas que usan estudios de mercado crecen casi un 28% más y ¡son 8.9% más rentables! ¿Imaginas ese salto en tu negocio? Deja de adivinar y empieza a construir sobre bases sólidas y datos reales.",
    },
    {
      title: "¿Eres del 70.5% que Aún No Investiga?",
      text: "En Guayaquil, más del 70% de las PYMES nunca hicieron un estudio de mercado, ¡pero el 98% cree que los datos mejoran la competitividad! No es solo una 'gran empresa'; es una necesidad. Tus clientes están cambiando y ¡necesitas conocerlos para adelantarte!",
    },
    {
      title: "¿Qué Tienen en Común Coca-Cola y Marvel? ¡Datos!",
      text: "Grandes como Coca-Cola y Marvel usan el análisis de datos para entender a sus clientes y ¡multiplicar sus ventas y éxitos! No necesitas ser un gigante para pensar como uno. Aprende de los mejores y adapta la inteligencia a tu escala.",
    },
  ];
  const [current, setCurrent] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  // Scroll handler para actualizar el índice
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    const idx = Math.round(scrollLeft / width);
    setCurrent(idx);
  };

  // Scroll a la card seleccionada al hacer click en un dot
  const scrollToCard = (idx: number) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="flex gap-6 min-w-max px-2 overflow-x-auto scroll-smooth"
        onScroll={handleScroll}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full min-w-[85vw] max-w-xs transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{ scrollSnapAlign: 'center' }}
          >
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">{card.title}</h3>
              <p className="text-gray-700 mb-6">{card.text}</p>
            </div>
            <a href="#" className="text-primary font-semibold flex items-center gap-2 group hover:underline transition-colors">
              Leer artículo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
      {/* Dots de navegación fijos debajo del slider */}
      <div className="flex justify-center mt-3 gap-2">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`h-2.5 w-2.5 rounded-full border transition-colors duration-200 ${idx === current ? 'bg-primary border-primary' : 'bg-gray-300 bg-opacity-60 border-gray-300'}`}
            style={{ display: 'inline-block' }}
            aria-label={`Ir a la card ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default function Home() {
  // Imágenes del slide
  const slideImages = [
    { src: "/images/diagnostico_objetivo.webp", alt: "Diagnósitico Inicial" },
    { src: "/images/investigacion_de_mercado_objetivo.webp", alt: "Estudio de Mercado" },
    { src: "/images/recoleccion_de_informacion_objetivo.webp", alt: "Recolección de Información" },
    { src: "/images/informes_resultados_objetivo.webp", alt: "Resultados" },
    { src: "/images/posicionamiento_slide_seo_objetivo.webp", alt: "Posicionamiento_SEO" },
  ];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % slideImages.length);
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);

  // Swipe para lightbox
  let touchStartX: number | null = null;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) prevLightbox();
    else if (deltaX < -50) nextLightbox();
    touchStartX = null;
  };
  // Keyboard navigation
  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/portada_cesarbn.webp"
            alt="César Reyes fondo"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full">
          {/* ...eliminar el texto aquí... */}
        </div>
        {/* Texto en la parte baja del hero */}
        <div className="absolute bottom-10 left-0 w-full flex flex-col items-center z-30 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white drop-shadow-lg mb-2" style={{ fontFamily: 'var(--font-poiret-one)', fontWeight: 900 }}>
              Cada venta que no cierras lo hace otro
            </h1>
          <p className="text-lg md:text-2xl text-white text-center max-w-2xl mx-auto font-normal drop-shadow-lg" style={{ fontFamily: 'var(--font-montserrat)' }}>
              El 50% de las ventas se las lleva quien responde primero a la consulta del cliente. (InsideSales.com)
            </p>
        </div>
      </section>

      {/* Nueva sección de introducción tipo cita */}
      <section className="w-full bg-white py-12 flex flex-col items-center justify-center min-h-[420px] md:min-h-[460px] flex items-center justify-center">
        <blockquote className="max-w-4xl mx-auto text-center text-dark text-lg md:text-xl font-normal italic leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
          "Publicar sin un plan es caminar sin rumbo, y lo más grave, es poner en riesgo el sustento de tu familia y tu propio futuro. Mi misión en 'Objetivo' es eliminar ese riesgo, investigando a fondo tu competencia y los verdaderos deseos de tus clientes, descubriendo el punto exacto donde tu oferta y su demanda hablan el mismo idioma. Orquesto esa conexión en tu página web para que sea un espacio estratégico: un lugar donde tu negocio ofrece exactamente lo que tu cliente anhela, generando ventas y dándole sentido y seguridad a cada paso que das."
        </blockquote>
        <div className="w-full max-w-4xl mx-auto text-right mt-4 pr-2 text-dark font-semibold" style={{ fontFamily: 'var(--font-montserrat)' }}>
          César Reyes - Objetivo
        </div>
      </section>

      {/* Slide de testimonios antes de 'Empieza a Tomar Decisiones con Estrategia' */}
      <section className="w-full bg-[#121212] py-24 mt-12">
        <div className="container mx-auto">
          <TestimonialSlider />
        </div>
      </section>

      {/* Sección 2 - ¿Qué pasa si sigues sin claridad? */}
      <section className="section dark-section">
        <div className="container">
          {/* Mover estos textos antes del slider */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">!Esto haremos con mi equipo por ti!</h2>
          <h3 className="text-xl md:text-2xl mb-8 text-center text-white">Cada desafío tiene su solución. Pero no a ciegas. Analicemos a fondo lo que necesitas y diseñemos el camino perfecto para ti. Así es como lo hacemos:</h3>
          {/* Slider de imágenes agregado */}
          <div className="mb-8">
            <MobileSlider>
              {slideImages.map((img, idx) => (
                <div
                  key={img.src}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.innerWidth > 768) {
                      openLightbox(idx);
                    }
                  }}
                  className="cursor-pointer w-full h-full flex items-center justify-center"
                >
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    width={900} 
                    height={900} 
                    className="rounded-xl object-cover max-w-[80vw] md:max-w-[70%] w-full h-auto aspect-square shadow-[0_0_32px_8px_rgba(255,255,255,0.25)] transition-all duration-500 mx-auto" 
                  />
                </div>
              ))}
            </MobileSlider>
            {/* Lightbox personalizado */}
            {lightboxOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeLightbox}>
                <button onClick={closeLightbox} className="absolute top-6 right-6 text-white text-4xl font-bold z-50 bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/90 transition-all" aria-label="Cerrar">×</button>
                <button onClick={e => { e.stopPropagation(); prevLightbox(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50 bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/90 transition-all" aria-label="Anterior">❮</button>
                <button onClick={e => { e.stopPropagation(); nextLightbox(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50 bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/90 transition-all" aria-label="Siguiente">❯</button>
                <div className="max-w-full w-full flex items-center justify-center p-4 sm:p-8" onClick={e => e.stopPropagation()} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                  <div className="w-full max-w-2xl sm:max-w-3xl aspect-square flex items-center justify-center">
                    <Image
                      src={slideImages[lightboxIndex].src}
                      alt={slideImages[lightboxIndex].alt}
                      width={1200}
                      height={1200}
                      className="rounded-xl object-contain w-full h-full bg-black"
                      style={{ maxHeight: '80vh', maxWidth: '100vw' }}
                      onError={(e) => { e.currentTarget.src = '/images/fallback.webp'; }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cards informativas antes del formulario de contacto */}
      <section className="w-full bg-white py-8 mb-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black mt-12">Es increíble de lo que nos perdemos por no leer</h2>
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">¿Tu Negocio en Riesgo? ¡75% Fracasan!</h3>
                <p className="text-gray-700 mb-6">El 75% de las empresas cierran antes de los 2 años por no tener estrategias de ventas claras, ¡sin un estudio de mercado, estás jugando a la ruleta! No dejes que la intuición te cueste tu sueño. Un diagnóstico profundo te ahorra tiempo, dinero y muchísimos dolores de cabeza.</p>
              </div>
              <a href="#" className="text-primary font-semibold flex items-center gap-2 group hover:underline transition-colors">
                Leer artículo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">El Secreto de los que Crecen</h3>
                <p className="text-gray-700 mb-6">Las empresas que usan estudios de mercado crecen casi un 28% más y ¡son 8.9% más rentables! ¿Imaginas ese salto en tu negocio? Deja de adivinar y empieza a construir sobre bases sólidas y datos reales.</p>
              </div>
              <a href="#" className="text-primary font-semibold flex items-center gap-2 group hover:underline transition-colors">
                Leer artículo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">¿Eres del 70.5% que Aún No Investiga?</h3>
                <p className="text-gray-700 mb-6">En Guayaquil, más del 70% de las PYMES nunca hicieron un estudio de mercado, ¡pero el 98% cree que los datos mejoran la competitividad! No es solo una "gran empresa"; es una necesidad. Tus clientes están cambiando y ¡necesitas conocerlos para adelantarte!</p>
              </div>
              <a href="#" className="text-primary font-semibold flex items-center gap-2 group hover:underline transition-colors">
                Leer artículo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">¿Qué Tienen en Común Coca-Cola y Marvel? ¡Datos!</h3>
                <p className="text-gray-700 mb-6">Grandes como Coca-Cola y Marvel usan el análisis de datos para entender a sus clientes y ¡multiplicar sus ventas y éxitos! No necesitas ser un gigante para pensar como uno. Aprende de los mejores y adapta la inteligencia a tu escala.</p>
              </div>
              <a href="#" className="text-primary font-semibold flex items-center gap-2 group hover:underline transition-colors">
                Leer artículo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
          {/* Mobile slider */}
          <div className="md:hidden w-full overflow-x-auto py-2 relative">
            <CardsMobileSlider />
          </div>
        </div>
      </section>

      {/* Nueva sección Objetivo con banners horizontales */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center flex items-center justify-center gap-2">Mi Blog</h2>
          <h3 className="text-xl font-semibold mb-12 text-center">
            Despierta tu potencial: Explora las estrategias que marcarán la diferencia en tu camino al éxito.
          </h3>

          <div className="contenedor-de-cards">
            <ExpandableCard
              title="IA y Negocios en Latam"
              content="La inteligencia artificial dejará de ser una tendencia lejana para convertirse en el motor de crecimiento en Latinoamérica. Aquellos negocios que la adopten estratégicamente para optimizar procesos, entender a sus clientes y crear ofertas innovadoras, tomarán una ventaja competitiva significativa en los próximos años."
              backgroundImage="/images/negocioslatam.webp"
              link="/blog/ia-y-negocios-en-latam"
            />

            <ExpandableCard
              title="Pensamiento Estratégico y Adaptación"
              content="Visualiza el arte de anticipar los movimientos del mercado, como un ajedrecista experto que planea varios pasos adelante. Observamos las tendencias, analizamos los desafíos y, con una mente ágil, diseñamos estrategias que no solo responden al presente, sino que se adaptan con inteligencia a los cambios que vendrán. Es la capacidad de leer entre líneas y estar siempre un paso adelante."
              backgroundImage="/images/pensamiento1.jpg"
              link="/blog/pensamiento-estrategico-y-adaptacion"
            />

            <ExpandableCard
              title="Propósito/Autoconocimiento/Liderazgo"
              content="Siente la comprensión profunda de cómo suceden realmente las cosas: una venta nace de una conexión genuina, un equipo se une en torno a un ideal compartido, un negocio florece cuando su esencia resuena con sus clientes. Encontrarle sentido a lo que hacemos, porque lo hacemos, para quien lo hacemos y cómo beneficiamos a nuestro cliente es despertar conciencia, ese entendimiento tácito de las dinámicas humanas y del mercado."
              backgroundImage="/images/autoconocimiento1.jpg"
              link="/blog/proposito-autoconocimiento-liderazgo"
            />

            <ExpandableCard
              title="Productividad"
              content="Piensa en cada tarea como un engranaje dentro de una maquinaria compleja. Nuestro enfoque se centra en estudiar cada pieza, en identificar los procesos que pueden fluir con mayor eficiencia, liberando energía y recursos para lo que realmente impulsa tu crecimiento. Buscamos incluir herramientas con Inteligencia Artificial para reducir tus costos y aumentar tus ingresos, es la dedicación a refinar cada acción para lograr el máximo impacto."
              backgroundImage="/images/crecimiento.jpg"
              link="/blog/productividad"
            />

            <ExpandableCard
              title="Crecimiento en Latam"
              content="Considera que tu familia es el motor que hace funcionar a ti y tu empresa, así el conjunto de empresas de una ciudad, una provincia o un estado hacen funcionar a un país, y todos ellos mueven a esa tierra que no tiene fronteras pero que es nuestro hogar Latinoamérica. Estudiamos sus particularidades, cultura y aspectos económicos, para diseñar estrategias de crecimiento que realmente resuenen con su gente y su mercado."
              backgroundImage="/images/crecimiento-latam.webp"
              link="/blog/crecimiento-en-latam"
            />
          </div>
        </div>
      </section>

      {/* Sección de logos después de 'Mi Blog' */}
      <section className="w-full bg-[#121212] py-12">
        <div className="container mx-auto">
          {/* Grid en escritorio, slider en móvil */}
          <div className="hidden md:grid grid-cols-4 gap-8 items-center justify-items-center">
            <img src="/images/logos/cami.png" alt="Logo CAMI" className="h-20 w-auto object-contain" />
            <img src="/images/logos/crecer.png" alt="Logo Crecer" className="h-20 w-auto object-contain" />
            <img src="/images/logos/energym.png" alt="Logo Energym" className="h-20 w-auto object-contain" />
            <img src="/images/logos/grafimundo.png" alt="Logo Grafimundo" className="h-20 w-auto object-contain" />
            <img src="/images/logos/Guido_Diaz.png" alt="Logo Guido Díaz" className="h-20 w-auto object-contain" />
            <img src="/images/logos/Optica_loja.png" alt="Logo Óptica Loja" className="h-20 w-auto object-contain" />
            <img src="/images/logos/San_Gabriel.png" alt="Logo San Gabriel" className="h-20 w-auto object-contain" />
            <img src="/images/logos/Top_dent.png" alt="Logo Top Dente" className="h-20 w-auto object-contain" />
          </div>
          {/* Slider horizontal en móvil */}
          <div className="md:hidden w-full overflow-x-auto py-2">
            <div className="flex gap-6 min-w-max px-2">
              <img src="/images/logos/cami.png" alt="Logo CAMI" className="h-16 w-auto object-contain" />
              <img src="/images/logos/crecer.png" alt="Logo Crecer" className="h-16 w-auto object-contain" />
              <img src="/images/logos/energym.png" alt="Logo Energym" className="h-16 w-auto object-contain" />
              <img src="/images/logos/grafimundo.png" alt="Logo Grafimundo" className="h-16 w-auto object-contain" />
              <img src="/images/logos/Guido-diaz.png" alt="Logo Guido Díaz" className="h-16 w-auto object-contain" />
              <img src="/images/logos/Optica_loja.png" alt="Logo Óptica Loja" className="h-16 w-auto object-contain" />
              <img src="/images/logos/San_Gabriel.png" alt="Logo San Gabriel" className="h-16 w-auto object-contain" />
              <img src="/images/logos/Top_dente.png" alt="Logo Top Dente" className="h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de contacto (Agenda una Llamada) justo antes del newsletter y footer */}
      <section className="w-full bg-[#121212] py-16 border-b border-light-gray">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white text-center">Agenda una Llamada</h2>
          <p className="mb-10 text-lg text-gray-200 text-center">Cuéntame por email tu caso y me pondré en contacto pronto</p>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center min-h-[600px]">
            {/* Slide de fotos cuadradas más grande y centrado */}
            <div className="flex-1 max-w-xl w-full flex items-center justify-center">
              <ContactPhotoSlider large />
            </div>
            {/* Formulario */}
            <form className="flex-1 max-w-xl space-y-6 flex flex-col justify-center">
              <div>
                <label className="block font-semibold mb-1 text-white" htmlFor="nombre">Nombre *</label>
                <input id="nombre" name="nombre" type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#18191b] text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-white" htmlFor="email">Correo electrónico *</label>
                <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#18191b] text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-white" htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="telefono" type="tel" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#18191b] text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-white" htmlFor="mensaje">Mensaje *</label>
                <textarea id="mensaje" name="mensaje" required className="w-full border border-gray-300 rounded px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary bg-[#18191b] text-white placeholder-gray-400"></textarea>
              </div>
              <button type="submit" className="mt-2 px-8 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter minimalista horizontal */}
      <section className="w-full bg-[#121212] py-8 border-t border-neutral-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-0">Suscríbete a mi Newsletter</h3>
          <form className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            <input type="email" required placeholder="Tu correo electrónico" className="px-4 py-2 rounded bg-[#232323] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400 w-full md:w-64" />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="privacidad" required className="accent-primary" />
              <label htmlFor="privacidad" className="text-xs text-gray-300">Acepto la política de privacidad</label>
            </div>
            <button type="submit" className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition text-sm">Suscribirme</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#121212] text-white py-8">
        <div className="container mx-auto text-center">
        </div>
      </footer>
    </>
  )
}
