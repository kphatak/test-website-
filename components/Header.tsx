'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On non-home pages, always show solid header
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent py-5' : 'bg-white shadow-md py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Dr. Apurva Dabak Dental - Home">
            <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C9.5 2 7.5 3.5 6 5.5c-1 1.4-1.5 3-1.5 4.7 0 2.4.8 4.7 1.3 7 .3 1.3.5 2.8 1.7 2.8 1.3 0 1.5-1.5 2-3 .3-1 .7-1.5 1.5-1.5s1.2.5 1.5 1.5c.5 1.5.7 3 2 3 1.2 0 1.4-1.5 1.7-2.8.5-2.3 1.3-4.6 1.3-7 0-1.7-.5-3.3-1.5-4.7C16.5 3.5 14.5 2 12 2z" />
              </svg>
            </div>
            <div>
              <div
                className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-navy-800'
                }`}
              >
                Dr. Apurva Dabak
              </div>
              <div
                className={`text-xs transition-colors duration-300 ${
                  isTransparent ? 'text-blue-200' : 'text-gray-500'
                }`}
              >
                DDS &middot; Redwood City, CA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  pathname === link.href
                    ? 'text-gold-500'
                    : isTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-600 hover:text-navy-700'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:[PHONE]"
              className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-navy-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              [PHONE]
            </a>
            <Link
              href="/contact"
              className="bg-gold-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-600 transition-colors duration-200 shadow-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-navy-50 text-navy-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 px-1">
                <a
                  href="tel:[PHONE]"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 px-4 py-2.5"
                >
                  <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  [PHONE]
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gold-500 text-white px-5 py-3 rounded-lg font-semibold text-sm text-center hover:bg-gold-600 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
