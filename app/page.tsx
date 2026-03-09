import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Dentist in Redwood City, CA | Dr. Apurva Dabak, DDS',
  description:
    'Dr. Apurva Dabak, DDS provides compassionate general and cosmetic dentistry in Redwood City, CA. Dental implants, teeth whitening, veneers, and same-day emergency care. Serving the Bay Area Peninsula.',
  alternates: { canonical: 'https://apurvadabak.com' },
}

const services = [
  {
    id: 'general',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'General Dentistry',
    description:
      'Comprehensive exams, professional cleanings, fillings, crowns, and preventive care to keep your smile healthy for life.',
  },
  {
    id: 'implants',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking tooth replacement. Titanium implants fuse with your jawbone to restore your smile and confidence.',
  },
  {
    id: 'whitening',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Teeth Whitening',
    description:
      'Professional in-office whitening delivers results up to 10 shades brighter in a single visit. Custom take-home trays also available.',
  },
  {
    id: 'veneers',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Porcelain Veneers',
    description:
      'Ultra-thin porcelain shells custom-crafted to correct chips, gaps, discoloration, and uneven teeth for a flawless smile.',
  },
  {
    id: 'cosmetic',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cosmetic Dentistry',
    description:
      'Full smile makeovers including bonding, contouring, and complete aesthetic redesign. Transform your smile with a personalized plan.',
  },
  {
    id: 'emergency',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Emergency Dental Care',
    description:
      'Toothache, broken tooth, knocked-out tooth? We offer same-day emergency appointments in Redwood City. Call now.',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Redwood City, CA',
    rating: 5,
    text: "I had serious dental anxiety before coming here. Dr. Dabak was incredibly patient and walked me through every step. I actually look forward to my appointments now — something I never thought I'd say about a dentist.",
    treatment: 'General Dentistry',
  },
  {
    name: 'James K.',
    location: 'San Mateo, CA',
    rating: 5,
    text: "I needed two dental implants and was nervous about the process. The team made it comfortable start to finish. The results are incredible — they look and feel completely natural. Worth every penny.",
    treatment: 'Dental Implants',
  },
  {
    name: 'Priya L.',
    location: 'Belmont, CA',
    rating: 5,
    text: "After years of self-consciousness about my smile, the veneers Dr. Dabak did changed everything. The office is modern, the staff is warm, and the attention to detail is unmatched. Highly recommend.",
    treatment: 'Porcelain Veneers',
  },
]

const stats = [
  { value: '15+', label: 'Years of Experience', icon: '🏆' },
  { value: '3,000+', label: 'Happy Patients', icon: '😊' },
  { value: '5.0 ★', label: 'Google Rating', icon: '⭐' },
  { value: 'Same Day', label: 'Emergency Care', icon: '⚡' },
]

const faqs = [
  {
    q: 'Does Dr. Dabak accept new patients in Redwood City?',
    a: "Yes, we warmly welcome new patients of all ages. Call [PHONE] or book online to schedule your new patient exam. We serve patients from Redwood City, San Mateo, Belmont, Foster City, Menlo Park, and the broader Bay Area Peninsula.",
  },
  {
    q: 'What dental insurance plans do you accept?',
    a: 'We accept most major PPO dental insurance plans. We will verify your benefits before your appointment so you know exactly what to expect. We also offer CareCredit financing and flexible payment plans for patients without insurance.',
  },
  {
    q: 'Do you offer same-day emergency dental care in Redwood City?',
    a: 'Yes. We reserve appointments for dental emergencies and make every effort to see urgent cases the same day. Call [PHONE] right away if you have a toothache, broken tooth, swollen jaw, or knocked-out tooth.',
  },
  {
    q: 'How long does a dental implant procedure take?',
    a: 'The implant placement itself takes 1–2 hours. The full process — from placement to final crown — typically spans 3–6 months to allow for osseointegration (implant-to-bone fusion). In select cases, same-day temporary crowns are possible.',
  },
  {
    q: 'Is Dr. Dabak accepting patients from San Mateo, Belmont, and Menlo Park?',
    a: "Absolutely. Our Redwood City dental office is centrally located on the Bay Area Peninsula and easily accessible from San Mateo, Belmont, Foster City, Menlo Park, and Palo Alto via Highway 101 or El Camino Real.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

const recentPosts = blogPosts.slice(0, 3)

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-700/30" />
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-white/5" />
          <div className="absolute top-40 right-40 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-gold-500/10" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-navy-600/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">Now Accepting New Patients in Redwood City</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Redwood City&apos;s{' '}
              <span className="text-gold-400">Premier</span>{' '}
              Dental Care
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
              Dr. Apurva Dabak, DDS offers compassionate, comprehensive dentistry — from routine cleanings
              to dental implants and smile makeovers — for patients across the Bay Area Peninsula.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className="btn-gold text-base py-4 px-8">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </Link>
              <a href="tel:[PHONE]" className="btn-outline text-base py-4 px-8">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call [PHONE]
              </a>
            </div>

            {/* Mini trust badges */}
            <div className="flex flex-wrap gap-4">
              {['ADA Member', 'CDA Member', 'AACD Member', 'Accepting Insurance'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-blue-200 text-sm">
                  <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main placeholder card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Replace this div with <Image> of Dr. Dabak's headshot */}
                <div className="w-full h-72 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gold-500/20 border-2 border-gold-400/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif text-3xl font-bold text-gold-300">AD</span>
                    </div>
                    <p className="text-white/60 text-sm">
                      [ Add Dr. Dabak&apos;s photo here ]
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-serif text-xl font-bold text-white mb-1">Dr. Apurva Dabak, DDS</p>
                  <p className="text-blue-300 text-sm mb-4">General &amp; Cosmetic Dentist</p>
                  <div className="flex justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-blue-200 text-sm">5.0 stars &middot; 127 Google reviews</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="font-bold text-lg leading-none">15+</p>
                <p className="text-xs text-gold-100">Years of Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-navy-800 py-6" aria-label="Practice highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-serif font-bold text-gold-400 mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Comprehensive Care</span>
            <h2 className="section-title">Dental Services in Redwood City, CA</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From your child&apos;s first checkup to a complete smile transformation, our Redwood City dental office
              offers everything your family needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-navy-700 mb-5 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-navy-600 font-semibold text-sm hover:text-gold-600 transition-colors flex items-center gap-1.5 group/link"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-3xl w-full h-[480px] flex items-center justify-center overflow-hidden">
                {/* Replace with <Image src="/dr-dabak.jpg" ... /> */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-navy-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-4xl font-bold text-navy-700">AD</span>
                  </div>
                  <p className="text-navy-600 text-sm">[ Add doctor photo here ]</p>
                </div>
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-6 bg-navy-800 text-white rounded-2xl p-5 shadow-xl">
                <p className="font-serif text-2xl font-bold text-gold-400">15+</p>
                <p className="text-sm text-blue-200">Years Serving</p>
                <p className="text-sm text-blue-200">the Bay Area</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">Meet Your Dentist</span>
              <h2 className="section-title mb-6">
                Dr. Apurva Dabak, DDS
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Dr. Apurva Dabak has been serving patients in Redwood City and the San Mateo County Peninsula
                with dedicated, patient-centered dental care. With extensive training in general and cosmetic
                dentistry, Dr. Dabak combines advanced clinical expertise with a genuinely gentle approach
                that puts even anxious patients at ease.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Dr. Dabak is committed to continuing education and stays current with the latest advances
                in implant dentistry, cosmetic techniques, and minimally invasive procedures — ensuring
                Bay Area patients always receive care that reflects the highest standards of modern dentistry.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Doctor of Dental Surgery (DDS)',
                  'American Dental Association Member',
                  'California Dental Association Member',
                  'Advanced Implant Training',
                  'Cosmetic Dentistry Certification',
                  'Digital Dentistry Trained',
                ].map((credential) => (
                  <div key={credential} className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{credential}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary">
                Learn More About Dr. Dabak
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Why Patients Choose Us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              A Different Kind of Dental Experience
            </h2>
            <p className="text-lg text-blue-200 mt-4 max-w-2xl mx-auto">
              At Dr. Dabak&apos;s Redwood City office, we&apos;ve built our practice around one principle:
              every patient deserves exceptional care delivered with warmth and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Gentle, Anxiety-Free Care',
                desc: 'We specialize in caring for nervous patients. Our calm environment and gentle technique make dental visits genuinely comfortable.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'State-of-the-Art Technology',
                desc: 'Digital X-rays, 3D imaging, intraoral cameras, and same-day CEREC crowns mean more precise, efficient, and comfortable treatment.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Flexible Hours',
                desc: 'Early morning, evening, and Saturday appointments available to fit Bay Area lifestyles. Same-day emergency slots reserved daily.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Accepts Most Insurance',
                desc: 'We work with most PPO dental insurance plans and offer CareCredit financing and in-office payment plans for all budgets.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Convenient Peninsula Location',
                desc: 'Centrally located in Redwood City with easy freeway access and ample parking. Minutes from San Mateo, Belmont, and Menlo Park.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Transparent, Honest Treatment',
                desc: 'We explain every diagnosis and treatment option clearly, present costs upfront, and never recommend procedures you don\'t need.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy-700/50 border border-navy-600/50 rounded-2xl p-6 hover:bg-navy-700 transition-colors duration-200">
                <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center text-gold-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Patient Reviews</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Real stories from real patients across Redwood City, San Mateo, and the Bay Area Peninsula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                    <span className="font-serif font-bold text-navy-700 text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location} &middot; {t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/Dr+Apurva+Dabak+Redwood+City"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-600 font-semibold hover:text-gold-600 transition-colors"
            >
              Read All Reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── INSURANCE CTA ─── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-navy-800 mb-2">
                We Accept Most PPO Dental Insurance Plans
              </h2>
              <p className="text-gray-500">
                Including Delta Dental, Cigna, Aetna, MetLife, United Healthcare, Guardian, and more.
                Don&apos;t have insurance? Ask about our in-office dental savings plan and CareCredit financing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {['Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'United'].map((ins) => (
                <span key={ins} className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  {ins}
                </span>
              ))}
              <span className="bg-gold-50 border border-gold-200 text-gold-700 text-xs font-medium px-3 py-1.5 rounded-full">
                + many more
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="section-label">Patient Resources</span>
              <h2 className="section-title">Dental Health Insights</h2>
            </div>
            <Link href="/blog" className="text-navy-600 font-semibold hover:text-gold-600 transition-colors flex items-center gap-1.5 flex-shrink-0">
              View All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                {/* Thumbnail placeholder */}
                <div className="h-44 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                  <span className="text-navy-400 text-4xl">🦷</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gold-50 text-gold-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gold-200">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-navy-800 text-lg leading-snug mb-3 group-hover:text-navy-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-navy-600 font-medium text-sm group-hover:text-gold-600 transition-colors">
                    Read Article
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Questions from Redwood City and Bay Area patients about our dental services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-5 bg-gray-50">
                  <h3 className="font-semibold text-navy-800">{faq.q}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Ready for a Healthier, More Beautiful Smile?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied patients in Redwood City and across the Bay Area Peninsula.
            New patients always welcome — same-day emergencies accommodated.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-gold text-base py-4 px-10">
              Book Your Appointment
            </Link>
            <a href="tel:[PHONE]" className="btn-outline text-base py-4 px-10">
              Call [PHONE]
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Serving Redwood City &middot; San Mateo &middot; Belmont &middot; Foster City &middot; Menlo Park &middot; Palo Alto
          </p>
        </div>
      </section>
    </>
  )
}
