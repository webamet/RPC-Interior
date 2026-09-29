import { ShieldCheck, HardHat, FileCheck, Users, Eye, AlertTriangle, ClipboardCheck, Leaf } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'

const hsePillars = [
  { icon: ShieldCheck, title: 'Zero-Harm Culture', description: 'A commitment to zero lost-time incidents embedded in every project plan and site activity.' },
  { icon: HardHat, title: 'PPE & Site Safety', description: 'Personal protective equipment, work-at-height controls, and excavation safety on every site.' },
  { icon: AlertTriangle, title: 'Hazard Identification', description: 'Daily hazard identification, risk assessment, and permit-to-work systems.' },
  { icon: Users, title: 'Toolbox Talks', description: 'Daily toolbox talks and safety briefings before all site activities.' },
  { icon: FileCheck, title: 'Safety Documentation', description: 'Safety plans, incident records, and audit-ready HSE documentation.' },
  { icon: Eye, title: 'Site Supervision', description: 'Dedicated safety supervisors monitoring compliance across all work fronts.' },
  { icon: ClipboardCheck, title: 'Safety Audits', description: 'Regular independent safety audits and corrective action tracking.' },
  { icon: Leaf, title: 'Environmental Care', description: 'Responsible construction practices to minimise environmental impact.' },
]

export default function HSE() {
  return (
    <>
      <PageHero
        title="Health, Safety & Environment"
        subtitle="Safety is not a compliance overhead — it is the foundation of every project we execute."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'HSE & Quality' }, { label: 'Health, Safety & Environment' }]}
      />

      <Section>
        <SectionHeading
          eyebrow="HSE Framework"
          title="Eight pillars of our safety culture"
          description="Government and defence-related projects demand execution discipline and controlled mobilisation. Our HSE framework ensures safety is embedded in the daily site rhythm."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hsePillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm">
              <p.icon className="h-8 w-8 text-amber" />
              <h3 className="mt-4 font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHeading
          eyebrow="High-Responsibility Environments"
          title="Safety discipline for government and defence projects"
          description="RSIPL's experience working in connection with BSF infrastructure requirements has reinforced our commitment to controlled mobilisation, documentation, and dependable site coordination."
          light
          center
        />
      </Section>

      <CtaBanner title="Safety-first project delivery" description="Discuss your project requirements with our HSE-aware team." buttonText="Request RFQ" />
    </>
  )
}
