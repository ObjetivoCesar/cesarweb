import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MobileSlider from "@/components/mobile-slider"
import ExpandableCard from "@/components/expandable-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-100px)] md:min-h-screen">
        {/* Background Images */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <div className="relative w-full h-full hidden md:block">
            <Image
              src="/images/portada.jpg"
              alt="Hero background desktop"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Mobile Image */}
          <div className="relative w-full h-full block md:hidden">
            <Image
              src="/images/bn.webp"
              alt="Hero background mobile"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative h-screen z-20 container mx-auto px-4 flex items-end md:items-center pb-16 md:pb-0">
          <div className="max-w-2xl text-white">
            {/* Mobile: Nuevo h1 y h2 */}
            <h1 className="text-3xl font-bold mb-2 md:hidden">
              Tus Clientes No se Van
            </h1>
            <h2 className="text-2xl font-semibold mb-4 md:hidden">
              Se los Lleva tu Competencia
            </h2>
            
            {/* Desktop: original h1 y h2 */}
            <h1 className="hidden md:block text-5xl font-bold mb-4">
              Tus Clientes No se Van
            </h1>
            <h2 className="hidden md:block text-3xl font-semibold mb-4">
              Se los Lleva tu Competencia
            </h2>
            
            {/* Desktop: texto */}
            <div className="hidden md:block">
              <p className="text-xl mb-8">
                Cada venta que no cierras, otro sí lo hace. Yo te doy el plan exacto para cambiar eso.
              </p>
            </div>
            
            <Link href="/contacto" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Quiero mi hoja de Ruta
            </Link>
            
            <h2 className="mt-8 text-base md:text-xl font-semibold">
              Atraer clientes no es suerte. Es tener un buen plan.
            </h2>
          </div>
        </div>
      </section>

      {/* Sección 1 - El Costo de No Tener un Diagnóstico */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video first on mobile, second on desktop */}
            <div className="md:order-last order-first aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zMiqzJTXIZU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Estás Tomando Decisiones sin Ver el Mapa Completo</h2>
              <p className="text-lg mb-6">
                Actuar sin antes haber planeado es como manejar con los ojos vendados. Sin una visión clara, cada acción
                es una apuesta… y cada error cuesta.
              </p>
              <h3 className="text-xl font-semibold mb-6">
                Tu intuición es valiosa, pero tu estrategia necesita datos.
              </h3>
              <Link href="/contacto" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Quiero Mejorar mis decisiones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 - ¿Qué pasa si sigues sin claridad? */}
      <section className="section dark-section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">¡Tomemos Decisiones Estratégicas Juntos!</h2>
          <h3 className="text-xl md:text-2xl mb-8 text-center">Cada desafío tiene su solución. Pero no a ciegas. Analicemos a fondo lo que necesitas y diseñemos el camino perfecto para ti. Así es como lo hacemos:</h3>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Clientes que no te conocen</h3>
              <p>
                ¿Clientes que buscan tus servicios pero no pueden encontrarte? Entonces, simplemente encuentran a otro.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">😕</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Inviertes en Redes Sociales, pero no te contratan</h3>
              <p>Si solo atraes curiosos y no compradores, es hora de revisar tu mensaje y tu estrategia.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🌀</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Tienes un gran potencial, pero nadie lo sabe</h3>
              <p>
                Alrededor de 4000 nuevos post diarios en Redes sociales. El problema no es tu esfuerzo. Es la falta de
                un plan.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Tus ingresos no reflejan tu talento</h3>
              <p>El saber comunicar es el santo grial en la era de la IA, la pregunta es ¿Sabes cómo usarla?.</p>
            </div>
          </div>

          {/* Mobile slider */}
          <div className="md:hidden mb-12">
            <MobileSlider>
              {/* Card 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Clientes que no te conocen</h3>
                <p>
                  ¿Clientes que buscan tus servicios pero no pueden encontrarte? Entonces, simplemente encuentran a
                  otro.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">😕</div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Inviertes en Redes Sociales, pero no te contratan
                </h3>
                <p>Si solo atraes curiosos y no compradores, es hora de revisar tu mensaje y tu estrategia.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">🌀</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Tienes un gran potencial, pero nadie lo sabe</h3>
                <p>
                  Alrededor de 4000 nuevos post diarios en Redes sociales. El problema no es tu esfuerzo. Es la falta de
                  un plan.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">📉</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Tus ingresos no reflejan tu talento</h3>
                <p>El saber comunicar es el santo grial en la era de la IA, la pregunta es ¿Sabes cómo usarla?.</p>
              </div>
            </MobileSlider>
          </div>

          <h3 className="text-xl font-semibold text-center">
            Ignorar estos puntos no solo afecta tu negocio. También desgasta tu energía y mina tu motivación.
          </h3>
        </div>
      </section>

      {/* Imagen de scroll horizontal */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image
          src="/images/aje.webp"
          alt="Imagen de scroll horizontal"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
          style={{ transform: 'none' }}
        />
      </div>

      {/* Sección 3 - Aquí es donde entra "Objetivo" */}
      <section className="section dark-section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Empieza a Tomar Decisiones con Estrategia</h2>
          <h3 className="text-xl font-semibold mb-12 text-center">
            Cada problema que enfrentas tiene solución. Pero no cualquier solución. Una que parte de un diagnóstico
            real, con acciones pensadas para ti. Así es como lo hago:
          </h3>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Quiero que te encuentren, no que te busquen</h3>
              <p>
                Analizo cómo te buscan tus clientes en Google y diseño un plan para que aparezcas en el momento justo.
                Así dejas de perder oportunidades que ya existen.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">😕</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Transforma tus redes en una máquina de confianza</h3>
              <p>
                Reviso tu mensaje y te ayudo a conectar con quienes sí están listos para comprar. Porque la clave no es
                estar en redes... es saber qué decir.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🌀</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Destaca sin gritar en medio del ruido digital</h3>
              <p>
                Creo contigo una estrategia clara, que convierta tu experiencia en contenido de valor y posicionamiento
                real. Que no te tape la multitud.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Usa la IA con propósito, no por moda</h3>
              <p>
                Te enseño a comunicar tu valor con herramientas inteligentes. Así, tus ingresos reflejan tu talento… y
                tu mensaje lo amplifica.
              </p>
            </div>
          </div>

          {/* Mobile slider */}
          <div className="md:hidden mb-12">
            <MobileSlider>
              {/* Card 1 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Quiero que te encuentren, no que te busquen</h3>
                <p>
                  Analizo cómo te buscan tus clientes en Google y diseño un plan para que aparezcas en el momento justo.
                  Así dejas de perder oportunidades que ya existen.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">😕</div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Transforma tus redes en una máquina de confianza
                </h3>
                <p>
                  Reviso tu mensaje y te ayudo a conectar con quienes sí están listos para comprar. Porque la clave no
                  es estar en redes... es saber qué decir.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">🌀</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Destaca sin gritar en medio del ruido digital</h3>
                <p>
                  Creo contigo una estrategia clara, que convierta tu experiencia en contenido de valor y
                  posicionamiento real. Que no te tape la multitud.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg m-3 h-full">
                <div className="text-3xl mb-4">📉</div>
                <h3 className="text-xl font-bold mb-3 text-primary">Usa la IA con propósito, no por moda</h3>
                <p>
                  Te enseño a comunicar tu valor con herramientas inteligentes. Así, tus ingresos reflejan tu talento… y
                  tu mensaje lo amplifica.
                </p>
              </div>
            </MobileSlider>
          </div>

          <h3 className="text-xl font-semibold text-center">
            El plan existe. La diferencia es que tú lo tendrás por escrito, adaptado a tu realidad, y listo para poner
            en marcha.
          </h3>
        </div>
      </section>

      {/* Imagen de Separación */}
      <div className="relative h-[750px] w-full overflow-hidden">
        <Image
          src="/images/banb.webp"
          alt="Imagen de separación"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
          style={{ transform: 'none' }}
        />
      </div>

      {/* Sección de Portafolio */}
      <section className="section bg-light py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">📂 Nuestro Portafolio de Éxitos</h2>
          <h3 className="text-xl font-semibold mb-12 text-center">
            Explora nuestros proyectos destacados donde hemos transformado la presencia online de médicos.
          </h3>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-72">
                <Image
                  src="https://topdentcuenca.com/wp-content/uploads/2025/02/DSC09751-1.png.webp"
                  alt="TopdentCuenca"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TopdentCuenca</h3>
                <h4 className="text-lg font-semibold mb-3">Web Empresarial</h4>
                <p className="mb-4">Web Empresarial para clínica dental</p>
                <a
                  href="https://topdentcuenca.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-72">
                <Image
                  src="https://drguidodiazortega.com/imagenes/fotodeperfilguidodiaz.jpg"
                  alt="Dr. Guido Díaz Ortega"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Guido Díaz Ortega</h3>
                <h4 className="text-lg font-semibold mb-3">Web Pro Go</h4>
                <p className="mb-4">Sitio web profesional para médico especialista</p>
                <a
                  href="https://drguidodiazortega.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-72">
                <Image
                  src="https://automatizotunegocio.net/wp-content/uploads/2025/03/Imagen-de-WhatsApp-2025-02-06-a-las-09.53.41_e131afce.jpg"
                  alt="Dr. Patricio Reyes Pólit"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Patricio Reyes Pólit</h3>
                <h4 className="text-lg font-semibold mb-3">Tarjetas Digitales</h4>
                <p className="mb-4">Tarjeta digital profesional para intensivista</p>
                <a
                  href="https://automatizotunegocio.net/pulmocor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile slider */}
          <div className="md:hidden mb-12">
            <MobileSlider>
              {/* Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg m-3">
                <div className="relative h-64">
                  <Image
                    src="https://topdentcuenca.com/wp-content/uploads/2025/02/DSC09751-1.png.webp"
                    alt="TopdentCuenca"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">TopdentCuenca</h3>
                  <h4 className="text-lg font-semibold mb-3">Web Empresarial</h4>
                  <p className="mb-4">Web Empresarial para clínica dental</p>
                  <a
                    href="https://topdentcuenca.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline flex items-center"
                  >
                    Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg m-3">
                <div className="relative h-64">
                  <Image
                    src="https://drguidodiazortega.com/imagenes/fotodeperfilguidodiaz.jpg"
                    alt="Dr. Guido Díaz Ortega"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dr. Guido Díaz Ortega</h3>
                  <h4 className="text-lg font-semibold mb-3">Web Pro Go</h4>
                  <p className="mb-4">Sitio web profesional para médico especialista</p>
                  <a
                    href="https://drguidodiazortega.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline flex items-center"
                  >
                    Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg m-3">
                <div className="relative h-64">
                  <Image
                    src="https://automatizotunegocio.net/wp-content/uploads/2025/03/Imagen-de-WhatsApp-2025-02-06-a-las-09.53.41_e131afce.jpg"
                    alt="Dr. Patricio Reyes Pólit"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dr. Patricio Reyes Pólit</h3>
                  <h4 className="text-lg font-semibold mb-3">Tarjetas Digitales</h4>
                  <p className="mb-4">Tarjeta digital profesional para intensivista</p>
                  <a
                    href="https://automatizotunegocio.net/pulmocor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline flex items-center"
                  >
                    Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </MobileSlider>
          </div>
        </div>
      </section>

      {/* Nueva sección Objetivo con banners horizontales */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center flex items-center justify-center gap-2">🎯 Objetivo</h2>
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
    </>
  )
}
