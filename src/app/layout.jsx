import { Outfit, DM_Sans } from 'next/font/google' // Updated import
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // Outfit offers a great range
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Vaibhav Goswami — Full Stack Developer & E-commerce Expert', //
  description: 'Vaibhav Goswami is a Full Stack Developer with 4+ years of experience in PHP, Laravel, MERN, Next.js & Shopify. Building high-converting ecommerce websites and apps.', //
  keywords: 'Full Stack Developer, Shopify Expert, Laravel Developer, MERN Stack, Next.js, Ecommerce Developer, India', //
  authors: [{ name: 'Vaibhav Goswami' }], //
  openGraph: {
    title: 'Vaibhav Goswami — Full Stack Developer & E-commerce Expert',
    description: 'Building high-converting ecommerce websites and apps.',
    url: 'https://vaibhavgoswami.com',
    siteName: 'Vaibhav Goswami',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Goswami — Full Stack Developer & E-commerce Expert',
    description: 'Building high-converting ecommerce websites and apps.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}