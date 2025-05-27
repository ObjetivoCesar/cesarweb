import Link from "next/link"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Contacto - César Reyes Jaramillo",
  description:
    "¿Listo para llevar tu negocio al siguiente nivel? Contáctame hoy y comencemos a construir juntos el camino hacia el éxito.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-100px)] md:h-[400px] flex items-center justify-center mb-8">
        {/* Background Images */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <div className="relative w-full h-full hidden md:block">
            <Image
              src="/images/banb.webp"
              alt="Contacto hero background desktop"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
          {/* Mobile Image */}
          <div className="relative w-full h-full block md:hidden">
            <Image
              src="/images/banb.webp"
              alt="Contacto hero background mobile"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-10" />
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Contacto</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white drop-shadow-lg">¿Listo para crecer?</h2>
          <p className="text-xl mb-8 text-white drop-shadow-lg">Hablemos sobre cómo llevar tu negocio al siguiente nivel</p>
          <Link 
            href="/contacto" 
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            ⬇️ Agrégame
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

            <div className="lg:col-span-4">
              <div className="bg-light p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Teléfono:</p>
                      <p>+593 963410409</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>info@cesarreyesjaramillo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-medium">Dirección:</p>
                      <p>Loja, Ecuador</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
                  <p className="mb-2">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps - ubicación (Versión más grande) */}
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.059524261072!2d-79.20041672412255!3d-4.008184944661261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb394e9738cbaf%3A0xa39122abcd11b315!2sautomatizotunegocio!5e0!3m2!1ses-419!2sus!4v1745421438012!5m2!1ses-419!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de César Reyes Jaramillo"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
