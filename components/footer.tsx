import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-200 border-t border-neutral-800">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Columna 1: Datos de contacto y ubicación */}
        <div className="flex flex-col gap-2 text-sm min-w-[220px] items-start md:items-center">
          <h3 className="text-lg font-bold mb-2 text-white">Contacto</h3>
          <span>info@cesarreyesjaramillo.com</span>
          <span>+593 963410409</span>
          <span>Loja, Ecuador</span>
          <span>Lunes a Viernes: 9:00 - 18:00</span>
          <span>Sábados: 10:00 - 14:00</span>
        </div>
        {/* Columna 2: Artículos del blog */}
        <div className="flex flex-col gap-2 text-sm min-w-[220px] items-start md:items-center">
          <h3 className="text-lg font-bold mb-2 text-white">Artículos</h3>
          <Link href="/blog/ia-negocios-latam" className="hover:underline">IA y Negocios en Latam</Link>
          <Link href="/blog/estrategia-crecimiento" className="hover:underline">Estrategia de Crecimiento</Link>
          <Link href="/blog/gestion-cambio" className="hover:underline">Gestión del Cambio</Link>
        </div>
        {/* Columna 3: Páginas del sitio */}
        <div className="flex flex-col gap-2 text-sm min-w-[220px] items-start md:items-center">
          <h3 className="text-lg font-bold mb-2 text-white">Páginas</h3>
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/sobre-mi" className="hover:underline">Sobre mí</Link>
        </div>
      </div>
      <div className="w-full text-center mt-8 text-gray-400 text-sm">
        © 2020 César Reyes. Todos los derechos reservados.
      </div>
    </footer>
  )
}
