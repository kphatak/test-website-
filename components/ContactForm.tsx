'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(data: FormData) {
    const errs: Record<string, string> = {}
    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const message = data.get('message') as string

    if (!name || name.trim().length < 2) errs.name = 'Please enter your full name.'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.'
    if (phone && !/^[\d\s()\-+.]{7,20}$/.test(phone)) errs.phone = 'Please enter a valid phone number.'
    if (!message || message.trim().length < 10) errs.message = 'Please include a message (at least 10 characters).'

    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const validationErrors = validate(data)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setState('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          service: data.get('service'),
          message: data.get('message'),
        }),
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for reaching out to our Redwood City dental office. We&apos;ll be in touch within one business day.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-4 text-sm text-green-600 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {state === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          Something went wrong. Please try again or call us directly at [PHONE].
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className={`input-field ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className={`input-field ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
            placeholder="(650) 555-0100"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
          placeholder="jane@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Interested In
        </label>
        <select id="service" name="service" className="input-field">
          <option value="">Select a service (optional)</option>
          <option value="general">General Dentistry / Cleaning</option>
          <option value="implants">Dental Implants</option>
          <option value="whitening">Teeth Whitening</option>
          <option value="veneers">Porcelain Veneers</option>
          <option value="cosmetic">Cosmetic Dentistry / Smile Makeover</option>
          <option value="emergency">Emergency Dental Care</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
          placeholder="Tell us how we can help, preferred appointment times, or any questions you have..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <p className="text-xs text-gray-400">
        By submitting this form, you agree to our Privacy Policy. We will never share your information with third parties.
      </p>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-gold w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
