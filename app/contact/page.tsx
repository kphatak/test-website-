import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact a Dentist in Redwood City, CA | Dr. Apurva Dabak, DDS',
  description:
    'Contact Dr. Apurva Dabak\'s Redwood City dental office. Book appointments online, call for same-day emergencies, get directions, and view office hours. Serving the Bay Area Peninsula.',
  alternates: { canonical: 'https://apurvadabak.com/contact' },
  openGraph: {
    title: 'Contact Dr. Apurva Dabak, DDS | Dentist in Redwood City, CA',
    description:
      'Book your dental appointment in Redwood City, CA. New patients welcome. Same-day emergency care available.',
    url: 'https://apurvadabak.com/contact',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Dr. Apurva Dabak, DDS',
  url: 'https://apurvadabak.com/contact',
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
  hasMap: 'https://maps.google.com/?q=Redwood+City+CA',
}

const hours = [
  { day: 'Monday', time: '8:00 AM – 5:00 PM', open: true },
  { day: 'Tuesday', time: '8:00 AM – 5:00 PM', open: true },
  { day: 'Wednesday', time: '8:00 AM – 5:00 PM', open: true },
  { day: 'Thursday', time: '8:00 AM – 5:00 PM', open: true },
  { day: 'Friday', time: '8:00 AM – 5:00 PM', open: true },
  { day: 'Saturday', time: '9:00 AM – 2:00 PM', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get In Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Contact Our Redwood City Dental Office
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Book an appointment, ask a question, or call for a same-day dental emergency.
            We&apos;re here for patients across the Bay Area Peninsula.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 text-white">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-semibold text-sm">
            Dental Emergency? Call{' '}
            <a href="tel:[PHONE]" className="underline hover:no-underline font-bold">
              [PHONE]
            </a>{' '}
            for same-day emergency care in Redwood City.
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Info Cards */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="font-serif text-xl font-bold text-navy-800 mb-5">Office Information</h2>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">Address</p>
                      <address className="not-italic text-gray-600 text-sm leading-relaxed">
                        [STREET ADDRESS]<br />
                        Redwood City, CA [ZIP]
                      </address>
                      <a
                        href="https://maps.google.com/?q=Redwood+City+CA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-600 text-xs font-medium hover:text-gold-600 transition-colors mt-1 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">Phone</p>
                      <a href="tel:[PHONE]" className="text-navy-600 hover:text-gold-600 transition-colors font-medium">
                        [PHONE]
                      </a>
                      <p className="text-gray-500 text-xs mt-0.5">Call or text</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">Email</p>
                      <a href="mailto:[EMAIL]" className="text-navy-600 hover:text-gold-600 transition-colors">
                        [EMAIL]
                      </a>
                      <p className="text-gray-500 text-xs mt-0.5">Response within 1 business day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="font-serif text-xl font-bold text-navy-800 mb-5">Office Hours</h2>
                <div className="space-y-2.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{h.day}</span>
                      <span className={`text-sm ${h.open ? 'text-gray-600' : 'text-red-400'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-red-50 border border-red-100 rounded-lg p-3 flex items-start gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-red-700">
                    <strong>Dental Emergency?</strong> Call <a href="tel:[PHONE]" className="underline">[PHONE]</a> — we provide same-day emergency care.
                  </p>
                </div>
              </div>

              {/* Insurance */}
              <div className="bg-navy-800 rounded-2xl p-6">
                <h2 className="font-serif text-lg font-bold text-white mb-3">Insurance &amp; Payment</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  We accept most major PPO dental insurance plans. Don&apos;t have insurance? Ask about our
                  flexible financing and in-office dental savings plan.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'United', 'Guardian', 'CareCredit'].map((ins) => (
                    <span key={ins} className="bg-navy-700 text-blue-200 text-xs px-3 py-1 rounded-full">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-navy-800 mb-2">
                  Book an Appointment
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form and our team will contact you within one business day to confirm your appointment.
                  For same-day emergencies, please call us directly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6 text-center">
            Find Us in Redwood City
          </h2>
          {/* Google Maps embed placeholder */}
          <div className="w-full h-80 bg-navy-100 rounded-2xl flex items-center justify-center border border-navy-200">
            <div className="text-center">
              <svg className="w-12 h-12 text-navy-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-navy-600 font-medium text-sm">Google Maps Embed</p>
              <p className="text-navy-400 text-xs mt-1">
                Replace this div with a Google Maps iframe for your address
              </p>
              {/*
                Example embed code:
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Dr. Apurva Dabak Dental Office - Redwood City, CA"
                />
              */}
            </div>
          </div>

          {/* Nearby cities */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Conveniently located in Redwood City, CA — easy access from{' '}
              <strong>San Mateo</strong>, <strong>Belmont</strong>, <strong>Foster City</strong>,{' '}
              <strong>Menlo Park</strong>, <strong>Palo Alto</strong>, and <strong>San Carlos</strong>{' '}
              via Hwy 101 and El Camino Real.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
