import Link from "next/link"
import NewsletterForm from "./newsletter-form"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Columna 1: Contacto */}
          <div className="md:col-span-3 flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <ul className="space-y-1 text-sm mb-4">
              <li className="flex items-center justify-center md:justify-start">
                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/593963410409" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  +593 963410409
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@cesarreyesjaramillo.com</span>
              </li>
            </ul>
            <div className="w-full flex justify-center md:justify-start">
              <NewsletterForm />
            </div>
          </div>

          {/* Columna 2: Mapa (más grande en escritorio) */}
          <div className="md:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full h-[300px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.059524261072!2d-79.20041672412255!3d-4.008184944661261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb394e9738cbaf%3A0xa39122abcd11b315!2sautomatizotunegocio!5e0!3m2!1ses-419!2sus!4v1745421438012!5m2!1ses-419!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)', borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de César Reyes Jaramillo"
              ></iframe>
            </div>
          </div>

          {/* Columna 3: Enlaces rápidos + últimas entradas del blog */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-2 text-center md:text-right">Enlaces Rápidos</h3>
            <ul className="space-y-1 text-sm text-center md:text-right">
              <li><Link href="/" className="hover:text-primary">Inicio</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-primary">Contacto</Link></li>
              <li><Link href="/maspacientes" className="hover:text-primary">Más Pacientes</Link></li>
              <li><Link href="/mensajeria" className="hover:text-primary">Mensajería</Link></li>
            </ul>
            <div className="mt-6 w-full">
              <h4 className="text-lg font-semibold mb-2 text-primary text-center md:text-right">Últimas entradas</h4>
              <ul className="space-y-2 text-sm text-center md:text-right">
                <li><Link href="/blog/automatizacion-para-tu-empresa/como-la-automatizacion-puede-transformar-tu-negocio" className="hover:text-primary">Cómo la automatización puede transformar tu negocio</Link></li>
                <li><Link href="/blog/diseno-web-para-empresas/tendencias-de-diseno-web-para-2023" className="hover:text-primary">Tendencias de diseño web para 2023</Link></li>
                <li><Link href="/blog/seo-y-campanas-de-marketing/estrategias-de-seo-efectivas-para-pequenas-empresas" className="hover:text-primary">Estrategias de SEO efectivas para pequeñas empresas</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
