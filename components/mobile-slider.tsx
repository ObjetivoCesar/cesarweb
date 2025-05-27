"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MobileSliderProps {
  children: ReactNode[]
  className?: string
}

export default function MobileSlider({ children, className = "" }: MobileSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = children.length
  const sliderRef = useRef<HTMLDivElement>(null)

  // Automatic sliding (opcional, solo en móvil)
  useEffect(() => {
    if (window.innerWidth > 768) return // Solo en móvil
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 6000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  return (
    <div className={`relative overflow-x-hidden ${className} pb-8`}> {/* Espacio para los dots */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 px-2 flex flex-col justify-center items-center h-full"
          >
            <div className="flex flex-col h-full w-full max-w-xs mx-auto bg-gray-800 rounded-lg shadow-lg p-4 text-center break-words overflow-hidden">
              {child}
            </div>
          </div>
        ))}
      </div>
      {/* Botones de navegación más grandes y visibles solo en móvil */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-between px-4 md:hidden">
        <button
          onClick={prevSlide}
          className="bg-white/80 p-3 rounded-full shadow-lg border border-gray-200"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/80 p-3 rounded-full shadow-lg border border-gray-200"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-6 w-6 text-primary" />
        </button>
      </div>
      {/* Dots de navegación */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full border ${index === currentSlide ? "bg-primary border-primary" : "bg-white/60 border-gray-300"}`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
