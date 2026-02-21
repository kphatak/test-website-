import Link from 'next/link'

const services = [
  { label: 'General Dentistry', href: '/services#general' },
  { label: 'Dental Implants', href: '/services#implants' },
  { label: 'Teeth Whitening', href: '/services#whitening' },
  { label: 'Porcelain Veneers', href: '/services#veneers' },
  { label: 'Cosmetic Dentistry', href: '/services#cosmetic' },
  { label: 'Emergency Dental Care', href: '/services#emergency' },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Dr. Dabak' },
  { href: '/services', label: 'Dental Services' },
  { href: '/blog', label: 'Patient Resources' },
  { href: '/contact', label: 'Contact & Directions' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="Home">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C9.5 2 7.5 3.5 6 5.5c-1 1.4-1.5 3-1.5 4.7 0 2.4.8 4.7 1.3 7 .3 1.3.5 2.8 1.7 2.8 1.3 0 1.5-1.5 2-3 .3-1 .7-1.5 1.5-1.5s1.2.5 1.5 1.5c.5 1.5.7 3 2 3 1.2 0 1.4-1.5 1.7-2.8.5-2.3 1.3-4.6 1.3-7 0-1.7-.5-3.3-1.5-4.7C16.5 3.5 14.5 2 12 2z" />
                </svg>
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white leading-tight">Dr. Apurva Dabak</div>
                <div className="text-xs text-gray-400">DDS &middot; Redwood City, CA</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing exceptional dental care to Redwood City and the Bay Area Peninsula with a gentle approach
              and state-of-the-art technology.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.google.com/maps/search/Dr+Apurva+Dabak+Redwood+City"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Google Reviews"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/search?find_desc=Dr+Apurva+Dabak&find_loc=Redwood+City+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Yelp Reviews"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.16 12.73l-4.703 1.13c-.896.215-1.636-.8-1.129-1.579l2.688-4.09c.512-.78 1.676-.573 1.9.33l1.006 4.009a.826.826 0 01-.762 1.2zM9.25 20.91l1.07-4.697c.204-.895 1.396-1.09 1.865-.295l2.624 4.132c.469.738-.155 1.692-1.017 1.56L9.94 21.4a.826.826 0 01-.69-.49zm-6.3-8.73l4.378-2.004c.834-.381 1.72.425 1.45 1.286l-1.454 4.608c-.274.866-1.44 1.021-1.93.252L2.66 12.79a.826.826 0 01.29-1.61zM8.8 3.75l-.08 4.822c-.016.916-1.098 1.33-1.718.685L4.028 6.22c-.62-.644-.24-1.7.619-1.798L8.08 3.93A.826.826 0 018.8 3.75zm3.13-1.88v4.822c0 .916 1.082 1.38 1.736.762l3.13-3.02c.655-.633.321-1.707-.511-1.843L12.87.85a.826.826 0 00-.94 1.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full flex-shrink-0 group-hover:bg-gold-400" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full flex-shrink-0 group-hover:bg-gold-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">[STREET ADDRESS]</p>
                  <p className="text-sm text-gray-400">Redwood City, CA [ZIP]</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:[PHONE]" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  [PHONE]
                </a>
              </div>

              <div className="flex gap-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:[EMAIL]" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  [EMAIL]
                </a>
              </div>

              <div className="flex gap-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Mon &ndash; Fri: 8:00 AM &ndash; 5:00 PM</p>
                  <p className="text-sm text-gray-400">Saturday: 9:00 AM &ndash; 2:00 PM</p>
                  <p className="text-sm text-gold-400 font-medium">Emergency: Same-Day Available</p>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dr. Apurva Dabak, DDS. All rights reserved. &middot; Redwood City, CA
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
