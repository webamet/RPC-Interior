import { Target, Eye, ShieldCheck, HardHat, Award, Users, Leaf, FileCheck, Layers, MapPin, LifeBuoy } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'

const values = [
  { icon: ShieldCheck, title: 'Integrity', description: 'Transparent communication and ethical conduct across every project interaction.' },
  { icon: HardHat, title: 'Safety First', description: 'Zero-harm commitment embedded in site planning, supervision, and daily toolbox talks.' },
  { icon: Award, title: 'Technical Excellence', description: 'Engineering-led delivery aligned with industry standards and state grid codes.' },
  { icon: Users, title: 'Client Partnership', description: 'Long-term relationships with government and PSU clients built on reliable delivery.' },
  { icon: Leaf, title: 'Sustainability', description: 'Responsible construction practices supporting India\'s energy transition goals.' },
  { icon: FileCheck, title: 'Compliance', description: 'Audit-ready documentation and regulatory alignment throughout the project lifecycle.' },
  { icon: Layers, title: 'Multidisciplinary Capability', description: 'Power, civil, telecom, renewable, and interior capabilities under one organisation.' },
  { icon: MapPin, title: 'Remote Site Execution', description: 'Proven ability to mobilise teams and resources to challenging project sites.' },
  { icon: LifeBuoy, title: 'Lifecycle Support', description: 'From feasibility and design through commissioning and long-term O&M.' },
]

export default function VisionMissionValues() {
  return (
    <>
      <PageHero
        title="Vision, Mission & Values"
        subtitle="The principles and aspirations that guide RSIPL INDIA's multidisciplinary infrastructure execution."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Vision, Mission & Values' }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-8">
            <Target className="h-10 w-10 text-amber" />
            <h3 className="mt-4 text-xl font-bold text-navy">Our Mission</h3>
            <p className="mt-3 text-navy-300 leading-relaxed">
              To deliver reliable, compliant, and scalable infrastructure solutions that accelerate India's development and support national energy and infrastructure goals across power, civil, telecom, renewable, and interior project verticals.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-8">
            <Eye className="h-10 w-10 text-electric-600" />
            <h3 className="mt-4 text-xl font-bold text-navy">Our Vision</h3>
            <p className="mt-3 text-navy-300 leading-relaxed">
              To be a trusted multidisciplinary infrastructure partner recognised for technical excellence, safety, and sustainable impact across power, government, renewable, telecom, and interior project domains.
            </p>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading eyebrow="Core Values" title="The principles that guide our work" light center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <v.icon className="h-8 w-8 text-amber" />
              <h3 className="mt-4 text-lg font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner title="Partner with RSIPL INDIA" description="Let's discuss how our values-aligned approach can support your next project." />
    </>
  )
}
