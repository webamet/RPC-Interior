import type { LucideIcon } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner, ChecklistGrid } from './PagePrimitives'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

interface ServicePageProps {
  title: string
  subtitle: string
  overview: string
  offerings: string[]
  benefits: Benefit[]
  industries: string[]
  badge?: string
  breadcrumbs?: { label: string; to?: string }[]
  ctaTitle?: string
  ctaButton?: string
  ctaTo?: string
}

export default function ServicePage({
  title, subtitle, overview, offerings, benefits, industries,
  badge, breadcrumbs, ctaTitle, ctaButton = 'Request RFQ', ctaTo = '/rfq',
}: ServicePageProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        badge={badge}
        breadcrumbs={breadcrumbs ?? [{ label: 'Home', to: '/' }, { label: title }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="What RSIPL INDIA delivers" />
            <p className="mt-4 text-navy-300 leading-relaxed">{overview}</p>
          </div>
          <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-8">
            <h3 className="text-lg font-bold text-navy">What We Offer</h3>
            <ul className="mt-4 space-y-3">
              {offerings.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-navy-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading eyebrow="Key Benefits" title="Why clients choose this capability" light center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <b.icon className="h-8 w-8 text-amber" />
              <h3 className="mt-4 font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Industries Served" title="Sectors we support" />
        <div className="mt-8">
          <ChecklistGrid items={industries} columns={4} />
        </div>
      </Section>

      <CtaBanner
        title={ctaTitle ?? `Request RFQ for ${title}`}
        description="Share your project requirements and our team will structure a tailored engagement."
        buttonText={ctaButton}
        buttonTo={ctaTo}
      />
    </>
  )
}
