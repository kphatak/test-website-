import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    const { name, email, phone, service, message } = body

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 },
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // ─────────────────────────────────────────────────────────────────────────
    // TODO: Integrate your email service here.
    //
    // Option 1 – Resend (recommended):
    //   npm install resend
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'website@apurvadabak.com',
    //     to: 'office@apurvadabak.com',
    //     subject: `New appointment request from ${name}`,
    //     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Service: ${service}</p><p>Message: ${message}</p>`,
    //   })
    //
    // Option 2 – Nodemailer with Gmail/SMTP:
    //   npm install nodemailer @types/nodemailer
    //
    // Option 3 – Formspree:
    //   Replace the form action with your Formspree endpoint
    // ─────────────────────────────────────────────────────────────────────────

    // Development: log submission
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'not provided',
      service: service || 'not specified',
      message,
      timestamp: new Date().toISOString(),
      source: 'apurvadabak.com',
    })

    return NextResponse.json(
      { success: true, message: 'Thank you for contacting our Redwood City dental office. We will be in touch shortly.' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or call us directly.' },
      { status: 500 },
    )
  }
}
