import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poiret_One, Montserrat } from "next/font/google"
import TransparentHeader from "@/components/transparent-header"
import Footer from "@/components/Footer"
import Head from "next/head"
import VisitTracker from '@/components/VisitTracker'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poiretOne = Poiret_One({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-poiret-one",
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "César Reyes Jaramillo - Consultor SEO y Automatización",
  description:
    "Tu Socio Estratégico para el Éxito Empresarial. Servicios de consultoría en automatización, diseño web, SEO y asesoría de negocios.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="César Reyes Jaramillo" />
        <meta property="og:title" content="César Reyes Jaramillo - Consultor SEO y Automatización" key="og:title" />
        <meta property="og:description" content="Tu Socio Estratégico para el Éxito Empresarial. Servicios de consultoría en automatización, diseño web, SEO y asesoría de negocios." key="og:description" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"} />
        <meta property="og:image" content="/images/banb.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="César Reyes Jaramillo - Consultor SEO y Automatización" />
        <meta name="twitter:description" content="Tu Socio Estratégico para el Éxito Empresarial. Servicios de consultoría en automatización, diseño web, SEO y asesoría de negocios." />
        <meta name="twitter:image" content="/images/banb.webp" />
      </Head>
      <body className={`${inter.variable} ${poiretOne.variable} ${montserrat.variable} font-sans`}>
        <VisitTracker />
        <TransparentHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
