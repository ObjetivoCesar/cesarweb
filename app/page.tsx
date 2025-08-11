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
import EmbeddedChat from '../embedded-chat-component/src/components/EmbeddedChat'
import { LogoSlider } from "@/components/logo-slider"
import BusinessSuccessQuiz from "@/components/BusinessSuccessQuiz"
import ParallaxSection from "@/components/ParallaxSection"
import StrategyTabs from "@/components/StrategyTabs"
import PopularArticlesSlider from "@/components/PopularArticlesSlider"

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
  // Estados y funciones del componente principal
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[475px] md:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/portada_cesarbn.webp"
            alt="César Reyes fondo"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
            style={{ objectPosition: 'center center' }}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full">
          {/* ...eliminar el texto aquí... */}
        </div>
        {/* Texto en la parte baja del hero */}
        <div className="absolute bottom-32 left-0 w-full flex flex-col items-center z-30 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white drop-shadow-lg mb-2" style={{ fontFamily: 'var(--font-poiret-one)', fontWeight: 900 }}>
              Cada venta que no cierras lo hace otro
            </h1>
          <p className="text-lg md:text-2xl text-white text-center max-w-2xl mx-auto font-normal drop-shadow-lg" style={{ fontFamily: 'var(--font-montserrat)' }}>
              El 50% de las ventas se las lleva quien responde primero a la consulta del cliente. (InsideSales.com)
            </p>
        </div>
      </section>

      {/* Sección de Logos de Clientes con Slider Infinito */}
      <section className="relative w-full py-16 bg-white overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        
        {/* Contenido */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <LogoSlider />
          </div>
        </div>
      </section>

      {/* Sección del cuestionario de éxito empresarial */}
      <section className="w-full bg-[#121212] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">Responde 4 preguntas rápidas y descubre cómo podemos ayudarte a crecer</p>
          <div className="max-w-4xl mx-auto">
            <BusinessSuccessQuiz 
              title=""
              submitButtonText="Enviar"
              onSubmit={(data: { name: string; whatsapp: string; company: string; message: string }, answers: any) => {
                console.log('Datos del formulario:', data);
                console.log('Respuestas del quiz:', answers);
                // Aquí puedes agregar la lógica para enviar los datos a tu backend
                // Por ejemplo: sendFormDataToBackend({ ...data, answers });
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sección con efecto parallax */}
      <ParallaxSection />

      {/* Nueva sección: Cómo cambiar la realidad de tu empresa */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">¿Cómo cambiar la realidad de tu empresa?</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
              "Imagina lo siguiente: Dejar de publicar todos los días para concentrarte en cumplir un solo objetivo, posicionar una idea, un servicio, tu producto, dejar de invadir la privacidad de los demás y solamente atender a quienes te buscan."
            </p>
          </div>
        </div>
      </section>

      {/* Sección de estrategia con pestañas */}
      <StrategyTabs />

      {/* Sección de Artículos Populares */}
      <PopularArticlesSlider />

      {/* Slide de testimonios */}
      <section className="w-full bg-[#121212] py-24">
        <div className="container mx-auto">
          <TestimonialSlider />
        </div>
      </section>

      {/* Sección de contacto (Agenda una Llamada) con foto y chat */}
      <section className="w-full bg-[#121212] py-16 border-b border-light-gray">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white text-center">Agenda una Llamada</h2>
          <p className="mb-10 text-lg text-gray-200 text-center">Cuéntame por email tu caso y me pondré en contacto pronto</p>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center min-h-[600px]">
            {/* Columna de la foto */}
            <div className="flex-1 max-w-xl w-full flex items-center justify-center">
              <Image 
                src="/images/cesar_trabajando.png"
                alt="César Reyes trabajando bn"
                width={500}
                height={600}
                className="object-contain w-full h-auto max-h-[500px]"
              />
            </div>
            {/* Columna del componente de chat */}
            <div className="flex-1 max-w-xl space-y-6 flex flex-col justify-center">
              <EmbeddedChat />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter minimalista horizontal */}
      <section className="w-full bg-[#121212] py-10 border-t border-neutral-800">
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


    </>
  )
}
