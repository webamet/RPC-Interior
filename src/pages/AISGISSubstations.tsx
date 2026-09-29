import { Layers, FileCheck, HardHat, Zap } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner, ChecklistGrid } from '../components/UI/PagePrimitives'

const aisScope = [
  'Engineering coordination', 'Civil readiness', 'Equipment installation coordination',
  'Electrical systems', 'Control and protection coordination', 'Cable systems',
  'Earthing', 'Testing', 'Commissioning', 'Documentation', 'HSE', 'QA',
]

const gisScope = [
  'Engineering coordination', 'Civil building readiness', 'GIS equipment installation coordination',
  'Gas handling support', 'Control and protection coordination', 'Cable systems',
  'Earthing', 'Testing', 'Commissioning', 'Documentation', 'HSE', 'QA',
]

const diversificationReasons = [
  { icon: Zap, title: 'Integrated Line & Substation Capability', description: 'Power transmission projects increasingly require integrated line and substation capability for complete project delivery.' },
  { icon: Layers, title: 'Broader Project Lifecycle', description: 'RSIPL\'s expansion is designed to support a broader project lifecycle from transmission to substation infrastructure.' },
  { icon: HardHat, title: 'Specialised Technical Teams', description: 'Dedicated teams with substation engineering, installation, and commissioning capability.' },
  { icon: FileCheck, title: 'Engineering-Led Diversification', description: 'Strategic expansion through engineering coordination and project execution resources.' },
]

export default function AISGISSubstations() {
  return (
    <>
      <PageHero
        title="AIS & GIS Substation Project Capability"
        subtitle="Ramsang Infrastructure Pvt Ltd is strategically expanding into AIS and GIS substation infrastructure through specialised technical and project execution teams capable of supporting engineering coordination, installation, civil integration, testing and commissioning requirements."
        badge="Newly Diversified Business Vertical"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Substations' }, { label: 'AIS & GIS Substations' }]}
      />

      <Section>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            Newly Diversified Capability
          </span>
          <h2 className="mt-4 text-xl font-bold text-navy">Engineering-led expansion into substation infrastructure</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-300">
            RSIPL India is expanding its power infrastructure capabilities into AIS and GIS substation projects through specialised technical and project execution teams. This diversification is supported by specialised team capability, project readiness, engineering coordination, and strategic expansion into substation infrastructure.
          </p>
        </div>
      </Section>

      {/* AIS Section */}
      <Section dark>
        <SectionHeading
          eyebrow="Air Insulated Substations"
          title="AIS — Air Insulated Substation Capability"
          description="Engineering coordination, civil readiness, equipment installation, and commissioning support for outdoor air-insulated substation projects."
          light
        />
        <div className="mt-8">
          <ChecklistGrid items={aisScope} columns={4} />
        </div>
      </Section>

      {/* GIS Section */}
      <Section>
        <SectionHeading
          eyebrow="Gas Insulated Substations"
          title="GIS — Gas Insulated Substation Capability"
          description="Engineering coordination, civil building readiness, GIS equipment installation, gas handling support, and commissioning for compact, indoor gas-insulated substation projects."
        />
        <div className="mt-8">
          <ChecklistGrid items={gisScope} columns={4} />
        </div>
      </Section>

      {/* Why This Diversification */}
      <Section dark>
        <SectionHeading
          eyebrow="Why This Diversification"
          title="Strategic expansion for integrated project delivery"
          description="Power transmission projects increasingly require integrated line and substation capability. RSIPL's expansion is designed to support a broader project lifecycle."
          light
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diversificationReasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <r.icon className="h-8 w-8 text-amber" />
              <h3 className="mt-4 font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{r.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-8">
          <h3 className="text-lg font-bold text-navy">Important Positioning</h3>
          <p className="mt-3 text-sm leading-relaxed text-navy-300">
            RSIPL has not yet completed AIS/GIS substation projects as an established project portfolio. This capability represents a newly diversified business vertical supported by specialised technical teams, experienced project professionals, engineering coordination capability, and project execution resources. No completed AIS/GIS project cards or statistics are presented, as actual verified project evidence will be supplied as this vertical develops.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Discuss AIS & GIS Substation Requirements"
        description="Connect with our team to discuss substation project requirements and our diversification roadmap."
        buttonText="Request RFQ"
      />
    </>
  )
}
