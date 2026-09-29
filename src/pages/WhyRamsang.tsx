import { Landmark, Layers, MapPin, FileCheck, Users, LifeBuoy, HardHat, ShieldCheck, Phone } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'
import { whyRamsang, company } from '../lib/businessData'

const differentiators = [
  { icon: Landmark, title: 'Government & PSU Expertise', description: 'Deep understanding of tender processes, compliance requirements, and public sector procurement frameworks — built through engagement with state and central utilities.' },
  { icon: Layers, title: 'Integrated Delivery Model', description: 'EPC, material supply, and consulting under one coordination cell — reducing interface risk and shortening project timelines for clients.' },
  { icon: MapPin, title: 'Remote Site Mobilisation', description: 'Proven ability to mobilise teams and resources to remote and challenging project sites with dedicated site teams.' },
  { icon: FileCheck, title: 'Compliance-First Approach', description: 'All work aligned with industry standards and state grid codes — supported by audit-ready documentation throughout the project lifecycle.' },
  { icon: Users, title: 'Experienced Leadership', description: 'A responsive leadership team with direct access for decision-making and escalation across all project verticals.' },
  { icon: LifeBuoy, title: 'End-to-End Lifecycle Support', description: 'From feasibility and design through procurement, construction, commissioning, and long-term O&M.' },
  { icon: HardHat, title: 'BSF / Defence Project Experience', description: 'Project experience working in connection with BSF infrastructure requirements including civil, bunker, electrical, and telecom works.' },
  { icon: ShieldCheck, title: 'Safety Culture', description: 'Zero-harm commitment embedded in site planning, supervision, and daily toolbox talks across all project environments.' },
]

export default function WhyRamsang() {
  return (
    <>
      <PageHero
        title="Why Ramsang"
        subtitle="RSIPL INDIA is developing as a multidisciplinary infrastructure organisation — combining power, civil, telecom, renewable, government, and interior capabilities with disciplined execution."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Why Ramsang' }]}
      />

      <Section>
        <SectionHeading eyebrow="Our Differentiators" title="Why clients partner with RSIPL INDIA" center />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.title} className="flex gap-5 rounded-2xl border border-navy-50 bg-white p-6 shadow-sm">
              <div className="shrink-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-navy shadow-md">
                  <d.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading eyebrow="Execution Strengths" title="Ten reasons clients choose RSIPL INDIA" light center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyRamsang.map((w) => (
            <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber/40">
              <h3 className="font-bold text-white text-sm">{w.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-navy-100/75">{w.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership Access" title="Speak directly with our leadership" center />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {company.leaders.map((l) => (
            <div key={l.name} className="rounded-2xl border border-navy-50 bg-white p-6 text-center shadow-sm">
              <p className="font-bold text-navy">{l.name}</p>
              <p className="mt-1 text-sm text-electric-600">{l.role}</p>
              <a href={`tel:${l.phone.replace(/\s/g, '')}`} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy-50 px-4 py-2 text-sm font-semibold text-navy hover:bg-navy-100">
                <Phone className="h-4 w-4" /> {l.phone}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner title="Build your next project with RSIPL INDIA" description="Discover the RSIPL INDIA difference on your next engagement." buttonText="Request RFQ" />
    </>
  )
}
