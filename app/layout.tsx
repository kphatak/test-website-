import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://apurvadabak.com'),
  title: {
    default: 'Dr. Apurva Dabak, DDS | Dentist in Redwood City, CA',
    template: '%s | Dr. Apurva Dabak, DDS',
  },
  description:
    'Dr. Apurva Dabak, DDS offers compassionate general and cosmetic dentistry in Redwood City, CA. Services include dental implants, teeth whitening, porcelain veneers, and complete family dental care. Serving the Bay Area Peninsula.',
  keywords: [
    'dentist Redwood City',
    'dentist Redwood City CA',
    'dental implants Redwood City',
    'cosmetic dentist Bay Area',
    'teeth whitening Redwood City',
    'general dentist San Mateo County',
    'veneers Redwood City',
    'family dentist Redwood City',
    'Dr Apurva Dabak',
    'Apurva Dabak DDS',
    'dental care Peninsula Bay Area',
  ],
  authors: [{ name: 'Dr. Apurva Dabak, DDS' }],
  creator: 'Dr. Apurva Dabak, DDS',
  publisher: 'Dr. Apurva Dabak Dental',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apurvadabak.com',
    siteName: 'Dr. Apurva Dabak, DDS',
    title: 'Dr. Apurva Dabak, DDS | Dentist in Redwood City, CA',
    description:
      'Compassionate general and cosmetic dentistry in Redwood City, CA. Dental implants, teeth whitening, veneers, and preventive care for the Bay Area Peninsula.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Apurva Dabak Dental Office — Redwood City, CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Apurva Dabak, DDS | Dentist in Redwood City, CA',
    description:
      'Compassionate dental care in Redwood City, CA. General dentistry, cosmetic dentistry, and dental implants.',
  },
  alternates: {
    canonical: 'https://apurvadabak.com',
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
}

const practiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': 'https://apurvadabak.com/#dentist',
  name: 'Dr. Apurva Dabak, DDS',
  description:
    'General and cosmetic dentistry practice in Redwood City, CA offering dental implants, teeth whitening, porcelain veneers, and comprehensive dental care for the Bay Area Peninsula.',
  url: 'https://apurvadabak.com',
  telephone: '[PHONE]',
  email: '[EMAIL]',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[STREET ADDRESS]',
    addressLocality: 'Redwood City',
    addressRegion: 'CA',
    postalCode: '[ZIP]',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4848,
    longitude: -122.2281,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Insurance, CareCredit',
  image: 'https://apurvadabak.com/og-image.jpg',
  hasMap: 'https://maps.google.com/?q=Redwood+City+CA',
  founder: {
    '@type': 'Person',
    name: 'Dr. Apurva Dabak',
    jobTitle: 'Doctor of Dental Surgery',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'DDS',
  },
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'General Dentistry',
      description: 'Comprehensive dental exams, cleanings, fillings, and preventive care.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Dental Implants',
      description:
        'Permanent tooth replacement solution that looks and functions like natural teeth.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Cosmetic Dentistry',
      description: 'Smile makeovers, teeth whitening, veneers, and bonding.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Teeth Whitening',
      description: 'Professional in-office and custom take-home teeth whitening treatments.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Porcelain Veneers',
      description: 'Custom porcelain veneers to transform your smile.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Emergency Dental Care',
      description: 'Same-day emergency dental appointments for urgent dental problems.',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Redwood City', containedInPlace: 'San Mateo County, CA' },
    { '@type': 'City', name: 'San Mateo', containedInPlace: 'San Mateo County, CA' },
    { '@type': 'City', name: 'Belmont', containedInPlace: 'San Mateo County, CA' },
    { '@type': 'City', name: 'Foster City', containedInPlace: 'San Mateo County, CA' },
    { '@type': 'City', name: 'Menlo Park', containedInPlace: 'San Mateo County, CA' },
    { '@type': 'City', name: 'Palo Alto', containedInPlace: 'Santa Clara County, CA' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
