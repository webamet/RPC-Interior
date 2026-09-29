import { Target, Eye, ShieldCheck, HardHat, Award, Users, Leaf, FileCheck, Phone } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'
import { company } from '../lib/businessData'

const values = [
  { icon: ShieldCheck, title: 'Integrity', description: 'Transparent communication and ethical conduct across every project interaction.' },
  { icon: HardHat, title: 'Safety First', description: 'Zero-harm commitment embedded in site planning, supervision, and daily toolbox talks.' },
  { icon: Award, title: 'Technical Excellence', description: 'Engineering-led delivery aligned with industry standards and state grid codes.' },
  { icon: Users, title: 'Client Partnership', description: 'Long-term relationships with government and PSU clients built on reliable delivery.' },
  { icon: Leaf, title: 'Sustainability', description: 'Responsible construction practices supporting India\'s energy transition goals.' },
  { icon: FileCheck, title: 'Compliance', description: 'Audit-ready documentation and regulatory alignment throughout the project lifecycle.' },
]

const verticals = [
  'Power Transmission & OPGW', 'Power Distribution', 'Civil & Government Infrastructure',
  'Renewable Energy', 'EPC Project Delivery', 'Mobile Tower / Telecom Infrastructure',
  'Interior Project Solutions', 'AIS/GIS Substations (Newly Diversified)',
]

export default function About() {
  return (
    <>
      <PageHero
        title="About RSIPL INDIA"
        subtitle="Ramsang Infrastructure Pvt Ltd is a diversified Indian infrastructure and EPC organisation delivering multidisciplinary project capabilities across power transmission, OPGW, civil infrastructure, renewable energy, government projects, telecom infrastructure, and project-scale interior solutions."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <Section>
        <SectionHeading eyebrow="Our Story" title="Engineering infrastructure with responsibility" />
        <div className="mt-8 max-w-3xl space-y-5 text-navy-300 leading-relaxed">
          <p>RSIPL INDIA was founded with a vision to bridge India's infrastructure gap through disciplined, multidisciplinary execution. From early engagements in power transmission and civil infrastructure, the company has grown into a diversified organisation capable of handling complex projects across multiple connected verticals.</p>
          <p>Our growth trajectory has been shaped by a commitment to execution discipline, safety, and compliance. We have progressively expanded capabilities across power distribution, renewable energy, mobile tower and telecom infrastructure, government and defence infrastructure, and project-scale interior solutions — building a mixed delivery model that combines EPC services, material supply, and consulting.</p>
          <p>RSIPL has project experience working for and in connection with BSF infrastructure requirements, delivering civil works, bunker construction, electrical works, and mobile tower infrastructure support. This experience demonstrates our capability to execute in high-responsibility government and defence environments with controlled mobilisation and safety discipline.</p>
          <p>Our commitment to quality is reflected in audit-ready documentation, safety-first site culture, and alignment with industry standards. We continue to invest in engineering capacity, safety infrastructure, and diversified capabilities to support India's national development goals.</p>
        </div>
      </Section>

      <Section dark>
        <SectionHeading eyebrow="Business Verticals" title="A diversified infrastructure organisation" light />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((v) => (
            <div key={v} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
      </Section>

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
        <SectionHeading eyebrow="Leadership" title="Meet our leadership team" light center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {company.leaders.map((l) => (
            <div key={l.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-navy text-xl font-bold text-white">
                {l.name.split(' ').slice(-2, -1)[0][0]}{l.name.split(' ').slice(-1)[0][0]}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{l.name}</h3>
              <p className="text-sm font-semibold text-electric-200">{l.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-100/75">{l.bio}</p>
              <a href={`tel:${l.phone.replace(/\s/g, '')}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-amber-300">
                <Phone className="h-4 w-4" /> {l.phone}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Core Values" title="The principles that guide our work" center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm">
              <v.icon className="h-8 w-8 text-amber" />
              <h3 className="mt-4 text-lg font-bold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner title="Partner with RSIPL INDIA" description="Let's discuss how we can support your next infrastructure programme." />
    </>
  )
}
