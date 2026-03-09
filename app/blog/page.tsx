import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Dental Health Blog | Redwood City Dentist | Dr. Apurva Dabak, DDS',
  description:
    'Dental health articles, patient guides, and oral care tips from Dr. Apurva Dabak, DDS in Redwood City, CA. Learn about dental implants, teeth whitening, cosmetic dentistry, and more.',
  alternates: { canonical: 'https://apurvadabak.com/blog' },
  openGraph: {
    title: 'Dental Health Blog | Dr. Apurva Dabak, DDS — Redwood City, CA',
    description:
      'Expert dental health guides and tips from a Redwood City, CA dentist. Topics include implants, whitening, cosmetic dentistry, and oral health.',
    url: 'https://apurvadabak.com/blog',
  },
}

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Dr. Apurva Dabak Dental Health Blog',
  description: 'Dental health articles and patient resources from Dr. Apurva Dabak, DDS in Redwood City, CA.',
  url: 'https://apurvadabak.com/blog',
  publisher: {
    '@type': 'Dentist',
    name: 'Dr. Apurva Dabak, DDS',
    url: 'https://apurvadabak.com',
  },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://apurvadabak.com/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorTitle,
    },
  })),
}

const categories = ['All', 'Dental Health', 'Dental Implants', 'Cosmetic Dentistry', 'Patient Resources']

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Patient Resources</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Dental Health Blog
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Expert dental health guides, patient education, and oral care tips from Dr. Apurva Dabak, DDS —
            your Redwood City dentist.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter (visual only — can be enhanced with JS) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'bg-navy-700 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-navy-50 hover:text-navy-700'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full block"
                >
                  {/* Thumbnail */}
                  <div className="h-48 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <div className="text-5xl">{post.category === 'Dental Implants' ? '🔩' : post.category === 'Cosmetic Dentistry' ? '✨' : post.category === 'Patient Resources' ? '📋' : '🦷'}</div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 text-navy-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="font-serif font-bold text-navy-800 text-lg leading-snug mb-3 group-hover:text-navy-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-navy-100 rounded-full flex items-center justify-center">
                          <span className="text-navy-700 text-xs font-bold">AD</span>
                        </div>
                        <span className="text-xs text-gray-500">{post.author}, {post.authorTitle}</span>
                      </div>
                      <span className="text-navy-600 font-medium text-sm group-hover:text-gold-600 transition-colors flex items-center gap-1">
                        Read
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-3">
            Have a Dental Question?
          </h2>
          <p className="text-gray-500 mb-6">
            Our Redwood City dental team is happy to answer your questions and help you find the right treatment.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Dr. Dabak&apos;s Office
          </Link>
        </div>
      </section>
    </>
  )
}
