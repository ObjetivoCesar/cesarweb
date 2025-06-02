import React, { useState, useEffect } from "react"

const testimonials = [
  {
    img: "/images/testimonios/test1.jpg",
    name: "Ana Martínez",
    text: "Gracias a su asesoría, mi negocio digitalizó procesos y ahora vendo el doble sin estrés.",
  },
  {
    img: "/images/testimonios/test2.jpg",
    name: "Carlos Pérez",
    text: "El diagnóstico fue tan claro que por fin entendí qué necesitaba mi web para atraer clientes reales.",
  },
  {
    img: "/images/testimonios/test3.jpg",
    name: "Lucía Gómez",
    text: "No solo mejoré mi presencia online, sino que ahora recibo consultas todos los días.",
  },
  {
    img: "/images/testimonios/test4.jpg",
    name: "Jorge Ramírez",
    text: "El equipo me acompañó en cada paso, la estrategia fue personalizada y efectiva.",
  },
  {
    img: "/images/testimonios/test5.jpg",
    name: "María Fernanda",
    text: "Recomiendo totalmente, el cambio en mi negocio fue inmediato y notorio.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
      <div className="relative w-full flex flex-col md:flex-row bg-[#18191b] rounded-2xl overflow-hidden shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] transition-all duration-500">
        {/* Imagen */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-[#18191b] p-8">
          <img
            src={testimonials[current].img}
            alt={testimonials[current].name}
            className="rounded-xl object-cover w-64 h-64 md:w-80 md:h-80 shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] border-4 border-[#232323] bg-[#232323]"
          />
        </div>
        {/* Testimonio */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#232323] p-8 min-h-[320px]">
          <p className="text-xl md:text-2xl text-white mb-6 font-light">{testimonials[current].text}</p>
          <div className="text-lg text-gray-300 font-semibold mb-2">{testimonials[current].name}</div>
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full border border-white transition-all duration-300 ${idx === current ? "bg-white" : "bg-gray-700"}`}
            aria-label={`Ver testimonio ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 