import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dental Services in Redwood City, CA | Dr. Apurva Dabak, DDS',
  description:
    'Comprehensive dental services in Redwood City, CA including dental implants, teeth whitening, porcelain veneers, general dentistry, and emergency dental care. Serving the Bay Area Peninsula.',
  alternates: { canonical: 'https://apurvadabak.com/services' },
  openGraph: {
    title: 'Dental Services in Redwood City, CA | Dr. Apurva Dabak, DDS',
    description:
      'Dental implants, cosmetic dentistry, teeth whitening, veneers, and preventive care in Redwood City, CA.',
    url: 'https://apurvadabak.com/services',
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Dr. Apurva Dabak, DDS',
  url: 'https://apurvadabak.com/services',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'General Dentistry',
          description: 'Comprehensive exams, cleanings, X-rays, fillings, and preventive dental care.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Dental Implants',
          description: 'Permanent tooth replacement with titanium implants and porcelain crowns.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Teeth Whitening',
          description: 'Professional in-office and take-home teeth whitening treatments.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Porcelain Veneers',
          description: 'Custom porcelain veneers to transform smile aesthetics.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Cosmetic Dentistry',
          description: 'Smile makeovers, dental bonding, contouring, and complete aesthetic redesign.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Emergency Dental Care',
          description: 'Same-day emergency dental appointments in Redwood City.',
        },
      },
    ],
  },
}

const services = [
  {
    id: 'general',
    emoji: '🦷',
    title: 'General Dentistry',
    tagline: 'The foundation of lifelong oral health',
    description:
      'Preventive care is the cornerstone of a healthy smile. Our general dentistry services keep your teeth and gums healthy, catch problems early, and help you avoid costly treatments down the road.',
    procedures: [
      'Comprehensive dental exams',
      'Digital X-rays (low radiation)',
      'Professional teeth cleanings (prophylaxis)',
      'Tooth-colored composite fillings',
      'Dental crowns and bridges',
      'Root canal therapy',
      'Tooth extractions',
      'Night guards for bruxism (teeth grinding)',
      'Gum disease treatment',
    ],
    localSeo:
      'Patients from Redwood City, San Mateo, and Belmont come to our practice for comprehensive preventive care that is gentle, thorough, and tailored to each individual.',
  },
  {
    id: 'implants',
    emoji: '🔩',
    title: 'Dental Implants',
    tagline: 'The gold standard in tooth replacement',
    description:
      'Dental implants are the most natural, durable, and functional solution for missing teeth. Unlike dentures or bridges, implants integrate with your jawbone and are designed to last a lifetime.',
    procedures: [
      'Single tooth dental implants',
      'Multiple tooth implant restorations',
      'Implant-supported dentures',
      'All-on-4 full arch reconstruction',
      'Bone grafting (when needed)',
      'Sinus lift procedures',
      'Same-day temporary crowns',
      '3D implant planning with CBCT imaging',
    ],
    localSeo:
      'We are one of the few dental practices on the Bay Area Peninsula offering comprehensive implant services — from 3D treatment planning to final crown placement — all under one roof in Redwood City.',
  },
  {
    id: 'whitening',
    emoji: '✨',
    title: 'Teeth Whitening',
    tagline: 'Professional results, not drugstore guesses',
    description:
      'Professional teeth whitening at Dr. Dabak\'s Redwood City office delivers results that over-the-counter products simply cannot match — safely brightening your smile by up to 10 shades.',
    procedures: [
      'In-office whitening (same-day results)',
      'Custom take-home whitening trays',
      'Sensitivity-friendly whitening protocols',
      'Touch-up gel refills',
      'Whitening for special occasions',
    ],
    localSeo:
      'Bay Area patients choose professional whitening at our Redwood City office for faster, safer, and more dramatic results than at-home alternatives.',
  },
  {
    id: 'veneers',
    emoji: '💎',
    title: 'Porcelain Veneers',
    tagline: 'Transformative cosmetic dentistry',
    description:
      'Porcelain veneers are ultra-thin ceramic shells custom-designed and bonded to the front of your teeth. They can correct chips, cracks, discoloration, gaps, and uneven sizing — creating a completely transformed smile in as few as two visits.',
    procedures: [
      'Traditional porcelain veneers',
      'No-prep and minimal-prep veneers',
      'Smile design consultation',
      'Digital smile preview',
      'Single veneer to full smile makeovers',
    ],
    localSeo:
      'Patients from Redwood City, Menlo Park, and Palo Alto choose our practice for veneer work because of Dr. Dabak\'s meticulous attention to aesthetics and her ability to achieve natural-looking, stunning results.',
  },
  {
    id: 'cosmetic',
    emoji: '😁',
    title: 'Cosmetic Dentistry',
    tagline: 'Your smile, perfected',
    description:
      'A beautiful smile can change how you feel about yourself. Our cosmetic dental services range from simple bonding to comprehensive smile makeovers, designed to give you the smile you\'ve always wanted.',
    procedures: [
      'Dental bonding (chips, gaps, staining)',
      'Tooth contouring and reshaping',
      'Gum contouring',
      'Complete smile makeovers',
      'Aesthetic crown and bridge work',
      'Combination cosmetic treatment plans',
    ],
    localSeo:
      'Redwood City and Bay Area Peninsula patients seeking a smile transformation trust Dr. Dabak\'s eye for aesthetics and technical precision.',
  },
  {
    id: 'emergency',
    emoji: '🚨',
    title: 'Emergency Dental Care',
    tagline: 'Same-day relief when you need it most',
    description:
      'Dental emergencies don\'t wait for convenient timing. Dr. Dabak\'s Redwood City office reserves appointments every day for urgent dental situations. Call us first — we will do our best to see you the same day.',
    procedures: [
      'Severe toothache',
      'Broken or chipped tooth',
      'Knocked-out (avulsed) tooth',
      'Dental abscess and infection',
      'Lost filling or crown',
      'Broken denture',
      'Soft tissue injury',
      'Post-procedure complications',
    ],
    localSeo:
      'Serving dental emergencies in Redwood City, San Mateo, Belmont, and the surrounding Peninsula communities. Call [PHONE] for same-day emergency dental care.',
  },
]

const faqs = [
  {
    q: 'How much do dental implants cost in Redwood City, CA?',
    a: 'Dental implant costs in Redwood City and the Bay Area typically range from $3,000 to $6,000 per tooth, including the implant, abutment, and crown. Additional procedures like bone grafts may affect total cost. We provide a detailed, transparent cost estimate before beginning any treatment.',
  },
  {
    q: 'How long does professional teeth whitening last?',
    a: 'With good oral hygiene and avoiding heavy staining foods, professional whitening results typically last 1–3 years. Custom take-home trays allow for easy periodic touch-ups to maintain brightness.',
  },
  {
    q: 'Can I get same-day emergency dental care in Redwood City?',
    a: 'Yes. We reserve daily appointments for dental emergencies. Call [PHONE] and we will do our best to see you the same day.',
  },
  {
    q: 'How many veneers do I need to transform my smile?',
    a: 'It depends on your smile goals. Some patients need as few as 2 veneers to correct a specific issue, while a full smile makeover typically involves 6–10 veneers for the most visible teeth.',
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

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Comprehensive Care</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Dental Services in Redwood City, CA
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            From your first cleaning to a complete smile transformation, our Redwood City dental office
            offers everything you need under one roof — with the expertise and technology to do it right.
          </p>
        </div>
      </section>

      {/* Service nav */}
      <nav className="sticky top-[60px] bg-white border-b border-gray-200 z-40 shadow-sm" aria-label="Services navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-navy-50 hover:text-navy-700 transition-colors whitespace-nowrap"
              >
                {s.emoji} {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${index < services.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-4xl mb-4">{service.emoji}</div>
                <span className="section-label">{service.tagline}</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 mt-2 mb-5">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <p className="text-navy-600 text-sm leading-relaxed mb-8 italic border-l-4 border-gold-400 pl-4">
                  {service.localSeo}
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold text-navy-800 mb-3">What We Offer:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.procedures.map((proc) => (
                      <li key={proc} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {proc}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="btn-primary">
                  Schedule a Consultation
                </Link>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-3xl h-80 flex items-center justify-center border border-navy-200/50">
                  <div className="text-center">
                    <div className="text-7xl mb-3">{service.emoji}</div>
                    <p className="text-navy-400 text-sm font-medium">{service.title}</p>
                    <p className="text-navy-300 text-xs mt-1">[ Add procedure photo here ]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Questions &amp; Answers</span>
            <h2 className="section-title">Frequently Asked Service Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <div className="p-5">
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
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 mb-8">
            Call our Redwood City office or book online. We&apos;re accepting new patients from across the Bay Area Peninsula.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Book an Appointment
            </Link>
            <a href="tel:[PHONE]" className="btn-outline">
              Call [PHONE]
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
