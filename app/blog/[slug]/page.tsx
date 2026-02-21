import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blogPosts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Dr. Apurva Dabak, DDS`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: `${post.author}, ${post.authorTitle}` }],
    alternates: { canonical: `https://apurvadabak.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://apurvadabak.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [`${post.author}, ${post.authorTitle}`],
    },
  }
}

function formatContent(content: string): string {
  return content
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-serif text-xl font-bold text-navy-700 mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-gray-600"><span class="mt-1.5 w-2 h-2 bg-gold-500 rounded-full flex-shrink-0"></span><span>$1</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-2 my-4">$&</ul>')
    .replace(/^\| (.+) \|$/gm, (match) => {
      const cells = match.split('|').filter(Boolean).map((c) => c.trim())
      return '<tr>' + cells.map((c) => `<td class="px-4 py-2 border border-gray-200 text-sm text-gray-700">${c}</td>`).join('') + '</tr>'
    })
    .replace(/^---$/gm, '<hr class="my-10 border-gray-200" />')
    .replace(/^([^<\n].+)$/gm, '<p class="text-gray-600 leading-relaxed">$1</p>')
    .replace(/\n\n/g, '')
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(params.slug, 2)
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `https://apurvadabak.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorTitle,
      worksFor: {
        '@type': 'Dentist',
        name: 'Dr. Apurva Dabak, DDS',
        url: 'https://apurvadabak.com',
      },
    },
    publisher: {
      '@type': 'Dentist',
      name: 'Dr. Apurva Dabak, DDS',
      url: 'https://apurvadabak.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://apurvadabak.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://apurvadabak.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://apurvadabak.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://apurvadabak.com/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-blue-600">/</span></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><span className="text-blue-600">/</span></li>
              <li className="text-white/70 truncate max-w-xs">{post.title}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-blue-300 text-sm">{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center border-2 border-gold-500/30">
              <span className="font-serif font-bold text-gold-300">AD</span>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">
                {post.author}, {post.authorTitle}
              </p>
              <p className="text-blue-300 text-xs">
                {formattedDate} &middot; Redwood City, CA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Body */}
            <article className="lg:col-span-3">
              {/* Featured image placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl flex items-center justify-center mb-10">
                <div className="text-center">
                  <div className="text-6xl mb-2">
                    {post.category === 'Dental Implants' ? '🔩' : post.category === 'Cosmetic Dentistry' ? '✨' : '🦷'}
                  </div>
                  <p className="text-navy-400 text-sm">[ Add featured image here ]</p>
                </div>
              </div>

              {/* Post content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-500 mb-3">Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author box */}
              <div className="mt-10 bg-navy-50 border border-navy-100 rounded-2xl p-6 flex gap-5 items-start">
                <div className="w-16 h-16 bg-navy-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-serif font-bold text-navy-700 text-lg">AD</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-navy-800 text-lg">{post.author}, {post.authorTitle}</p>
                  <p className="text-navy-600 text-sm mb-2">General &amp; Cosmetic Dentist &middot; Redwood City, CA</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dr. Apurva Dabak is a general and cosmetic dentist serving patients in Redwood City and
                    across the Bay Area Peninsula. She is passionate about patient education and helping her
                    community achieve and maintain optimal oral health.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* CTA card */}
              <div className="bg-navy-800 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-serif text-lg font-bold mb-3">
                  Ready for Your Appointment?
                </h3>
                <p className="text-blue-200 text-sm mb-5">
                  Dr. Dabak&apos;s Redwood City dental office is welcoming new patients from across the Bay Area Peninsula.
                </p>
                <Link href="/contact" className="btn-gold w-full text-center">
                  Book Appointment
                </Link>
                <a href="tel:[PHONE]" className="mt-3 block text-center text-blue-300 text-sm hover:text-white transition-colors">
                  Or call [PHONE]
                </a>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-semibold text-navy-800 text-sm mb-4 uppercase tracking-wider">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="w-16 h-16 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                          {rel.category === 'Dental Implants' ? '🔩' : rel.category === 'Cosmetic Dentistry' ? '✨' : '🦷'}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy-800 group-hover:text-navy-600 leading-snug transition-colors">
                            {rel.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{rel.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-3">
            Questions About Your Dental Care?
          </h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            Contact Dr. Dabak&apos;s Redwood City office — we&apos;re happy to answer your questions and help you
            schedule the care you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book an Appointment
            </Link>
            <Link href="/blog" className="btn-primary" style={{ background: 'transparent', border: '2px solid #153672', color: '#153672' }}>
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
