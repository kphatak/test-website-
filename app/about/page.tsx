import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Dr. Apurva Dabak, DDS | Dentist in Redwood City, CA',
  description:
    'Meet Dr. Apurva Dabak, DDS — compassionate general and cosmetic dentist in Redwood City, CA. Learn about her credentials, training, and patient-centered approach to dental care.',
  alternates: { canonical: 'https://apurvadabak.com/about' },
  openGraph: {
    title: 'About Dr. Apurva Dabak, DDS | Dentist in Redwood City, CA',
    description:
      'Compassionate, experienced dentist serving Redwood City and the Bay Area Peninsula. General dentistry, cosmetic dentistry, and dental implants.',
    url: 'https://apurvadabak.com/about',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Apurva Dabak',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'DDS',
  jobTitle: 'Doctor of Dental Surgery',
  description:
    'General and cosmetic dentist in Redwood City, CA specializing in dental implants, cosmetic dentistry, and comprehensive family dental care.',
  url: 'https://apurvadabak.com/about',
  worksFor: {
    '@type': 'Dentist',
    name: 'Dr. Apurva Dabak, DDS',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Redwood City',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  },
  medicalSpecialty: 'Dentistry',
}

const credentials = [
  {
    icon: '🎓',
    label: 'Education',
    value: 'Doctor of Dental Surgery (DDS)',
    sub: '[Dental School Name] — [Year]',
  },
  {
    icon: '🏆',
    label: 'Experience',
    value: '15+ Years in Practice',
    sub: 'Redwood City, Bay Area, CA',
  },
  {
    icon: '🦷',
    label: 'Specialization',
    value: 'General & Cosmetic Dentistry',
    sub: 'Implants, Veneers, Whitening',
  },
  {
    icon: '📋',
    label: 'Memberships',
    value: 'ADA & CDA Member',
    sub: 'American & California Dental Assoc.',
  },
]

const values = [
  {
    title: 'Compassionate Care First',
    description:
      'Dental anxiety is real and valid. Every aspect of our practice — from the moment you call to the moment you leave — is designed to help you feel safe, heard, and cared for.',
  },
  {
    title: 'Evidence-Based Dentistry',
    description:
      'Treatment recommendations are grounded in current clinical evidence and tailored to your specific situation. We never recommend procedures you don\'t need.',
  },
  {
    title: 'Continuing Education',
    description:
      'Dentistry evolves rapidly. Dr. Dabak regularly pursues advanced training to ensure Bay Area patients benefit from the latest techniques and materials.',
  },
  {
    title: 'Community Connection',
    description:
      'As a Redwood City dentist, we\'re invested in the health of our local community. We treat patients like neighbors — because many of them are.',
  },
]

const faqs = [
  {
    q: 'Where did Dr. Dabak attend dental school?',
    a: 'Dr. Dabak earned her Doctor of Dental Surgery (DDS) degree from [Dental School Name]. Please update this section with the actual institution.',
  },
  {
    q: 'How long has Dr. Dabak been practicing in Redwood City?',
    a: 'Dr. Dabak has been serving patients in Redwood City and the Bay Area Peninsula for over 15 years.',
  },
  {
    q: 'Does Dr. Dabak accept new patients?',
    a: 'Yes, we are always welcoming new patients from Redwood City, San Mateo, Belmont, Foster City, Menlo Park, and the broader Bay Area Peninsula.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-label">Meet Your Dentist</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Dr. Apurva Dabak, DDS
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Compassionate, skilled, and genuinely invested in the oral health of every patient
              in Redwood City and across the Bay Area Peninsula.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photo + Quick credentials */}
            <div className="lg:col-span-2">
              {/* Doctor photo placeholder */}
              <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-3xl w-full aspect-[3/4] flex items-center justify-center mb-6">
                {/* Replace with: <Image src="/dr-dabak-profile.jpg" alt="Dr. Apurva Dabak, DDS" fill className="object-cover rounded-3xl" /> */}
                <div className="text-center">
                  <div className="w-28 h-28 bg-navy-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-4xl font-bold text-navy-700">AD</span>
                  </div>
                  <p className="text-navy-500 text-sm">[ Add Dr. Dabak&apos;s photo here ]</p>
                </div>
              </div>

              {/* Credential cards */}
              <div className="grid grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div key={c.label} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="text-sm font-bold text-navy-800 leading-tight">{c.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio content */}
            <div className="lg:col-span-3">
              <span className="section-label">About Dr. Dabak</span>
              <h2 className="font-serif text-3xl font-bold text-navy-800 mt-2 mb-6">
                Dedicated to Exceptional Dental Care on the Bay Area Peninsula
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Dr. Apurva Dabak, DDS has been providing comprehensive dental care to patients in Redwood City
                  and throughout San Mateo County for over 15 years. With a background spanning general dentistry,
                  cosmetic procedures, and dental implant therapy, Dr. Dabak brings a rare breadth of expertise
                  to her patients&apos; oral health needs.
                </p>
                <p>
                  After earning her Doctor of Dental Surgery degree, Dr. Dabak pursued additional training in
                  cosmetic dentistry and implant procedures — areas she is particularly passionate about.
                  She understands that a healthy, confident smile can profoundly impact a person&apos;s quality
                  of life, and approaches every case with that in mind.
                </p>
                <p>
                  What sets Dr. Dabak apart is her commitment to seeing patients as whole people, not just as
                  a set of teeth. She takes time to listen, to understand individual concerns, and to craft
                  treatment plans that are realistic, effective, and minimally invasive whenever possible.
                  Many of her patients have been with the practice for over a decade — and bring their families.
                </p>
                <p>
                  Dr. Dabak is an active member of the American Dental Association (ADA) and California Dental
                  Association (CDA), and regularly completes continuing education in digital dentistry,
                  implantology, and aesthetic techniques to ensure her Redwood City patients receive
                  the most current, evidence-based care available.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book an Appointment
                </Link>
                <Link href="/services" className="btn-primary" style={{ background: 'transparent', border: '2px solid #153672', color: '#153672' }}>
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-title">The Values Behind Our Practice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-800 mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Our Office</span>
              <h2 className="section-title mb-6">A Welcoming Environment in Redwood City</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Redwood City dental office is designed to feel like anything but a dental office.
                We&apos;ve created a calm, modern, and welcoming space where patients — especially those with
                dental anxiety — can relax and feel at ease.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Digital X-ray technology (80% less radiation)',
                  'Intraoral cameras for full visibility',
                  '3D cone beam CT for implant planning',
                  'Comfortable treatment chairs',
                  'TV screens and headphones available',
                  'Ample free parking',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-5 h-5 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-3xl h-80 flex items-center justify-center">
              {/* Replace with office photos */}
              <div className="text-center">
                <p className="text-navy-400 text-sm">[ Add office interior photos here ]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">About Dr. Dabak — FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-5 bg-white">
                  <h3 className="font-semibold text-navy-800">{faq.q}</h3>
                </div>
                <div className="p-5 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Schedule your first appointment with Dr. Dabak in Redwood City.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Your Appointment Today
          </Link>
        </div>
      </section>
    </>
  )
}
