import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poiret_One, Montserrat } from "next/font/google"
import TransparentHeader from "@/components/transparent-header"
import Footer from "@/components/footer"
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/bn.webp`;

export const metadata: Metadata = {
  title: {
    default: "César Reyes Jaramillo - Consultor Estratégico y Experto en Automatización",
    template: "%s | César Reyes Jaramillo"
  },
  description: "Transforma tu negocio con estrategias de automatización, marketing digital y consultoría empresarial. Soluciones personalizadas para hacer crecer tu empresa en el entorno digital.",
  keywords: ["consultor empresarial", "automatización de negocios", "marketing digital", "estrategia de crecimiento", "asesoría empresarial", "transformación digital"],
  authors: [{ name: "César Reyes Jaramillo" }],
  creator: "César Reyes Jaramillo",
  publisher: "César Reyes Jaramillo",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "César Reyes Jaramillo - Consultor Estratégico y Experto en Automatización",
    description: "Transforma tu negocio con estrategias de automatización, marketing digital y consultoría empresarial. Soluciones personalizadas para hacer crecer tu empresa.",
    url: SITE_URL,
    siteName: "César Reyes Jaramillo",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1080,
        height: 1920,
        alt: 'César Reyes Jaramillo - Consultor Estratégico'
      }
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "César Reyes Jaramillo - Consultor Estratégico y Experto en Automatización",
    description: "Transforma tu negocio con estrategias de automatización y marketing digital. Soluciones personalizadas para hacer crecer tu empresa.",
    images: [DEFAULT_OG_IMAGE],
    creator: '@cesarreyesj',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplaza con tu código de verificación de Google Search Console
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'es-EC': '/es-EC',
    },
  },
  metadataBase: new URL(SITE_URL),
  generator: 'Next.js',
  applicationName: 'César Reyes Jaramillo - Consultoría Empresarial',
  referrer: 'origin-when-cross-origin',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  category: 'Consultoría Empresarial',
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
