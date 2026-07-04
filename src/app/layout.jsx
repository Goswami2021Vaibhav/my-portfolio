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
  title: 'Vaibhav Goswami - Full Stack Developer & Custom Software Developer', //
  description: 'Vaibhav Goswami is a Full Stack Developer with 4+ years of experience in MERN & Next.js. Building custom software, ERP, and high-converting web apps.', //
  keywords: 'Full Stack Developer, Custom Software Developer, ERP Developer, MERN Stack, Next.js, React, Node.js, India', //
  authors: [{ name: 'Vaibhav Goswami' }], //
  openGraph: {
    title: 'Vaibhav Goswami - Full Stack Developer & Custom Software Developer',
    description: 'Building custom software, ERP, and high-converting web apps.',
    url: 'https://vaibhavgoswami.com',
    siteName: 'Vaibhav Goswami',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Goswami - Full Stack Developer & Custom Software Developer',
    description: 'Building custom software, ERP, and high-converting web apps.',
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