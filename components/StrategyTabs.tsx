'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const StrategyTabs = () => {
  const [activeTab, setActiveTab] = useState('porque');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Definir las imágenes para cada pestaña con las rutas correctas
  const tabImages = {
    porque: [
      '/images/efecto_parallax/porque_la-estrategia-nace-del-conocimiento,_no_del_azar_BN.webp',
      '/images/efecto_parallax/porque_la-estrategia-nace-del-conocimiento,_no_del_azar.webp',
      '/images/investigacion_de_mercado_objetivo.webp',
      '/images/recoleccion_de_informacion_objetivo.webp'
    ],
    donde: [
      '/images/efecto_parallax/proteger-lo_que_has_construido_color.webp',
      '/images/blog_cesar_bn.webp',
      '/images/informes_resultados_objetivo.webp',
      '/images/posicionamiento_web.webp' // Usando una imagen existente como reemplazo de 'web.webp'
    ],
    como: [
      '/images/efecto_parallax/Objetivo.webp',
      '/images/posicionamiento_slide_seo_objetivo.webp',
      '/images/efecto_parallax/posicionamiento_web.webp',
      '/images/efecto_parallax/proteger-lo_que_has_construido_color.webp'
    ]
  };

  const tabs = [
    {
      id: 'porque',
      title: '¿El Porqué?',
      content: 'El análisis profundo del mercado es la base de toda estrategia exitosa. Estudiamos a fondo tu sector, identificando oportunidades únicas y palabras clave estratégicas que realmente importan. Este diagnóstico inicial nos permite entender por qué ciertas tácticas funcionarán mejor que otras, asegurando que cada acción esté respaldada por datos concretos y no por suposiciones.',
      images: tabImages.porque
    },
    {
      id: 'donde',
      title: 'El Dónde',
      content: 'Con el diagnóstico en mano, determinamos los canales y plataformas ideales para tu mensaje. Aquí es donde transformamos la teoría en acción, seleccionando cuidadosamente los espacios digitales donde tu audiencia ya está presente. Optimizamos tu presencia existente y abrimos nuevos canales de crecimiento, asegurando que cada recurso se invierta en los lugares que ofrecen el mayor retorno.',
      images: tabImages.donde
    },
    {
      id: 'como',
      title: 'El Cómo',
      content: 'La implementación estratégica es donde la magia sucede. Convertimos los insights en acciones concretas a través de un sitio web optimizado y estrategias de posicionamiento efectivas. Aquí es donde tu marca comienza a destacar, atrayendo al público adecuado y convirtiendo visitantes en clientes leales, todo mientras construyes una presencia digital sólida y duradera.',
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
        <div className="max-w-5xl mx-auto">
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
                    className="prose max-w-none"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {tabs.find(tab => tab.id === activeTab)?.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {tabs.find(tab => tab.id === activeTab)?.content}
                    </p>
                    <a 
                      href="#contacto" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Quiero Contratar Una Consultoría
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Image Slider */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={tabs.find(tab => tab.id === activeTab)?.images[currentImageIndex] || ''}
                      alt={`${tabs.find(tab => tab.id === activeTab)?.title} - Imagen ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Indicadores de navegación */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                  {tabs.find(tab => tab.id === activeTab)?.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
                      }`}
                      aria-label={`Ir a la imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyTabs;
