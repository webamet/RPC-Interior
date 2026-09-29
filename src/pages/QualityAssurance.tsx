import { FileCheck, Gauge, ClipboardCheck, ShieldCheck, Layers, Eye } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'

const qaPillars = [
  { icon: FileCheck, title: 'ITP-Aligned Inspection', description: 'Inspection test plans aligned with project specifications and utility requirements.' },
  { icon: Gauge, title: 'Material Traceability', description: 'Material records, batch tracking, and quality verification from supplier to site.' },
  { icon: ClipboardCheck, title: 'Non-Conformance Management', description: 'Non-conformance reports, corrective actions, and punch-list closure tracking.' },
  { icon: ShieldCheck, title: 'Standards Compliance', description: 'Work aligned with CEA regulations, BIS standards, and state grid codes.' },
  { icon: Layers, title: 'Documentation Cell', description: 'Dedicated documentation cell maintaining daily quality records.' },
  { icon: Eye, title: 'Independent Audits', description: 'Regular quality audits and milestone certification support.' },
]

export default function QualityAssurance() {
  return (
    <>
      <PageHero
        title="Quality Assurance"
        subtitle="Audit-ready documentation and compliance-first quality control across every project lifecycle stage."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'HSE & Quality' }, { label: 'Quality Assurance' }]}
      />

      <Section>
        <SectionHeading
          eyebrow="QA Framework"
          title="Quality embedded in every project stage"
          description="Government clients increasingly evaluate partners on quality non-conformance trends. Our QA framework ensures inspection, traceability, and documentation are part of the daily site rhythm."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qaPillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm">
              <p.icon className="h-8 w-8 text-electric-600" />
              <h3 className="mt-4 font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          eyebrow="Documentation Discipline"
          title="Audit-ready records for government and PSU clients"
          description="Inspection test plans, material traceability records, non-conformance reports, and punch-list closures form the audit trail that supports milestone certification."
          light
          center
        />
      </Section>

      <CtaBanner title="Quality-controlled project delivery" description="Discuss your project requirements with our QA-focused team." buttonText="Request RFQ" />
    </>
  )
}
