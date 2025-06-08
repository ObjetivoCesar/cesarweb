import { getAllArticles } from "@/lib/utils-node";
import Link from "next/link";
import BlogCard from "@/components/blog-card"
import Image from "next/image";

export const metadata = {
  title: "Blog - César Reyes Jaramillo",
  description:
    "Artículos sobre IA y negocios en LATAM, pensamiento estratégico, propósito y liderazgo, productividad y crecimiento empresarial.",
}

// Datos de categorías actualizados
const categories = [
  {
    id: "ia-y-negocios-en-latam",
    title: "IA y Negocios en LATAM",
    description:
      "Explora cómo la Inteligencia Artificial está transformando los negocios en América Latina. Descubre casos de éxito, tendencias y estrategias para implementar IA en tu empresa.",
    link: "/blog/ia-y-negocios-en-latam",
  },
  {
    id: "pensamiento-estrategico-y-adaptacion",
    title: "Pensamiento Estratégico y Adaptación",
    description:
      "Aprende sobre estrategias de adaptación y pensamiento estratégico para mantener tu negocio competitivo en un entorno cambiante. Descubre cómo anticipar cambios y tomar decisiones efectivas.",
    link: "/blog/pensamiento-estrategico-y-adaptacion",
  },
  {
    id: "proposito-autoconocimiento-liderazgo",
    title: "Propósito, Autoconocimiento y Liderazgo",
    description:
      "Profundiza en el desarrollo personal y profesional. Explora temas de liderazgo, autoconocimiento y cómo encontrar tu propósito para impulsar el éxito en tu carrera y negocio.",
    link: "/blog/proposito-autoconocimiento-liderazgo",
  },
  {
    id: "productividad",
    title: "Productividad",
    description:
      "Descubre técnicas, herramientas y estrategias para maximizar tu productividad personal y empresarial. Aprende a optimizar procesos y alcanzar más con menos esfuerzo.",
    link: "/blog/productividad",
  },
  {
    id: "crecimiento-en-latam",
    title: "Crecimiento en LATAM",
    description:
      "Analiza las oportunidades y desafíos del crecimiento empresarial en América Latina. Conoce estrategias efectivas para expandir tu negocio en la región.",
    link: "/blog/crecimiento-en-latam",
  },
]

// Limitar descripciones a 15 palabras
const shortCategories = categories.map(cat => ({
  ...cat,
  shortDescription: cat.description.split(" ").slice(0, 15).join(" ") + (cat.description.split(" ").length > 15 ? "..." : "")
}));

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero principal */}
      <section className="relative w-full h-screen flex items-center justify-center mb-8">
        <Image
          src="/images/blog_cesar_bn.webp"
          alt="Blog Hero"
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-10" />
        <div className="relative z-20 text-white text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Blog</h1>
          <p className="text-xl drop-shadow-lg">Artículos sobre IA, negocios, estrategia, liderazgo, productividad y crecimiento en LATAM.</p>
        </div>
      </section>
      <div className="container mx-auto flex flex-col md:flex-row gap-8 py-12">
        {/* Sidebar de categorías */}
        <aside className="md:w-1/4 w-full mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Categorías</h2>
          <ul className="space-y-4">
            {shortCategories.map((cat) => (
              <li key={cat.id} className="border-b border-gray-200 pb-4">
                <Link href={cat.link} className="block">
                  <h3 className="text-primary hover:underline font-medium mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600">{cat.shortDescription}</p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        {/* Listado de artículos */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Últimas Entradas</h1>
          {articles.length === 0 ? (
            <p className="text-gray-500">No hay artículos disponibles aún.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((post, idx) => (
                <BlogCard key={idx} {...post} />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
