'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const StrategyTabs = () => {
  const [activeTab, setActiveTab] = useState('porque');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Definir las imágenes para cada pestaña
  const tabImages = {
    porque: [
      '/images/tabs/César Reyes.webp',
      '/images/tabs/Estadísticas_César Reyes.webp',
      '/images/tabs/Dr. Guido Díaz.webp',
      '/images/tabs/Estadísticas_ Dr. Guido Díaz.webp',
      '/images/tabs/Impermeabiisa.webp',
      '/images/tabs/Estadísticas_Impermeabiisa.webp'
    ],
    donde: [
      '/images/efecto_parallax/proteger-lo_que_has_construido_color.webp',
      '/images/blog_cesar_bn.webp',
      '/images/informes_resultados_objetivo.webp',
      '/images/posicionamiento_web.webp'
    ],
    como: [
      '/images/tabs/Publicaciones_sin-Objetivo1.webp',
      '/images/tabs/Publicaciones_con_Objetivo1.webp',
      '/images/tabs/Publicidad_con_un_Objetivo.webp',
      '/images/tabs/Publicidad_con_un_Objetivo2.webp'
    ]
  };

  // Función para formatear el texto con saltos de línea y viñetas
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, i) => {
      if (paragraph.startsWith('• ')) {
        return (
          <p key={i} className="flex items-start mb-2">
            <span className="mr-2">•</span>
            <span>{paragraph.substring(2)}</span>
          </p>
        );
      }
      return <p key={i} className="mb-4">{paragraph}</p>;
    });
  };

  const tabs = [
    {
      id: 'porque',
      title: '¿El Porqué?',
      content: (
        <div className="space-y-4">
          <p>Tus clientes están en internet, buscándote ahora mismo… pero si no te encuentran, están comprando en otro lado. Trabajamos con empresas que invierten en redes, en anuncios y en diseños bonitos… sin lograr clientes reales.</p>
          <p className="font-medium">Por ejemplo:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Publican a diario, pero no aparecen en Google.</li>
            <li>Pagan publicidad sin saber si hay mercado para su producto.</li>
            <li>No tienen claro qué busca su cliente ni cómo decide comprar.</li>
          </ul>
          <p>Nosotros cambiamos eso. Analizamos tu sector, detectamos oportunidades y usamos palabras clave que sí generan negocio. Cada acción se basa en datos reales, no en suposiciones. Así dejamos de adivinar y empezamos a ganar.</p>
        </div>
      ),
      images: tabImages.porque
    },
    {
      id: 'donde',
      title: '¿El Dónde?',
      content: (
        <div className="space-y-4">
          <p>En 2025, el problema es asumir que conocemos el mercado y que, con métodos tradicionales, vamos a seguir en la normalidad. La realidad es otra, y es tan abismal que, si no cambiamos AHORA, simplemente vendrá alguien más y nos reemplazará.</p>
          <p className="font-medium">Considera esto:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Diariamente se crean 4,000 posts nuevos en redes sociales; imagina la suerte que deberás tener para que alguien vea los tuyos.</li>
            <li>Ustedes son expertos en vender sus productos, pero adaptarse a nuevos conceptos como página web o e-commerce se convierte en un reto.</li>
            <li>Aplicar una planificación estratégica basada en estadísticas siempre será mejor que actuar por impulso.</li>
          </ul>
        </div>
      ),
      images: tabImages.donde
    },
    {
      id: 'como',
      title: '¿El Cómo?',
      content: (
        <div className="space-y-4">
          <p>Una empresa que toma decisiones en base a estudios va por buen camino. Adaptarse al nuevo entorno para competir en igualdad de condiciones complementa su estrategia, pero el éxito está en la ejecución; está en el personal que ejecutará esta planificación.</p>
          <p className="font-medium">Nuestro enfoque:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La expresión "zapatero a tu zapato" es la forma más simple de entender por qué es importante asociarse con personas con experiencia y conocimientos reales.</li>
            <li>Usemos la inteligencia artificial personalizada para realizar ciertas acciones repetitivas, convirtiendo a la empresa en eficiente y reduciendo costos.</li>
            <li>Capacitarse y automatizar procesos para centrarnos en lo que realmente da valor a nuestros servicios y productos.</li>
          </ul>
        </div>
      ),
      images: tabImages.como
    }
  ];

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    if (currentTab) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentTab.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [activeTab]);

  // Configurar el intervalo para cambiar de imagen cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Reiniciar el índice de la imagen cuando se cambia de pestaña
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium relative transition-colors ${
                  activeTab === tab.id
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="prose max-w-none pr-0 md:pr-8"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {tabs.find(tab => tab.id === activeTab)?.title}
                    </h3>
                    <div className="text-gray-600 leading-relaxed space-y-4">
                      {tabs.find(tab => tab.id === activeTab)?.content}
                    </div>
                    <a 
                      href="https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20una%20consultoría%20personalizada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-6"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Quiero Contratar Una Consultoría
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Contenido multimedia - Video para 'donde', imágenes para otras pestañas */}
              {activeTab === 'donde' ? (
                <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
                    <div className="w-full" style={{ position: 'relative', paddingTop: '133.33%' }}>
                      <iframe 
                        src="https://iframe.mediadelivery.net/embed/455329/8ba3b9be-7353-4c14-8f46-1a0b647bfcf0?autoplay=true&loop=true&muted=true&preload=true&responsive=true" 
                        loading="lazy" 
                        style={{ 
                          border: 0, 
                          position: 'absolute', 
                          top: 0, 
                          left: 0, 
                          width: '100%', 
                          height: '100%' 
                        }} 
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" 
                        allowFullScreen
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full max-w-[400px] md:max-w-[500px] mx-auto"
                      style={{ aspectRatio: '3/4' }}
                    >
                      {(() => {
                        const currentTab = tabs.find(tab => tab.id === activeTab);
                        const imageSrc = currentTab?.images?.[currentImageIndex];
                        
                        if (!imageSrc) return null;
                        
                        return (
                          <Image
                            src={imageSrc}
                            alt={`${currentTab?.title || 'Imagen'} ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 30vw"
                            priority={currentImageIndex === 0}
                          />
                        );
                      })()}
                    </motion.div>
                  </AnimatePresence>
                  {/* Indicadores de navegación */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                    {tabs.find(tab => tab.id === activeTab)?.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                        }`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyTabs;
