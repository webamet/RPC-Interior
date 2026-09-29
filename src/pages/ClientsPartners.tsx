import { ShieldCheck, Building2, Cog, Wrench, Handshake, Sparkles } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'

const govExperience = [
  'State Transmission Utilities',
  'State DISCOMs',
  'Central Transmission Utility',
  'Government Infrastructure Departments',
  'BSF Project Experience',
  'Defence / Border Infrastructure',
]

const infraAssociations = [
  'EPC Company Associations',
  'Renewable Developer Engagements',
  'Telecom Infrastructure Projects',
  'Civil Infrastructure Projects',
  'Electrical Infrastructure Projects',
  'Mobile Tower Network Projects',
]

const techPartners = [
  { icon: Cog, title: 'Equipment Manufacturers', description: 'Transformers, switchgear, conductors, and BESS equipment supply partners.' },
  { icon: Wrench, title: 'Testing & Certification Bodies', description: 'Independent testing agencies and certification partners for commissioning.' },
  { icon: Handshake, title: 'Technology Partners', description: 'SCADA, protection, and grid integration technology providers.' },
]

export default function ClientsPartners() {
  return (
    <>
      <PageHero
        title="Clients & Partners"
        subtitle="RSIPL INDIA serves government agencies, state utilities, PSUs, and developers — supported by a network of equipment, technology, and certification partners."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Clients & Partners' }]}
      />

      {/* Government / Public-Sector Experience */}
      <Section>
        <SectionHeading
          eyebrow="Government / Public-Sector Experience"
          title="Trusted by government and public sector infrastructure stakeholders"
          description="RSIPL INDIA's client base spans state electricity boards, DISCOMs, central utilities, and government infrastructure departments."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {govExperience.map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-navy to-electric-800 px-5 py-4 text-sm font-semibold text-white shadow-md">
              <ShieldCheck className="h-5 w-5 text-amber" /> {c}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-navy-300">Text references represent verified project, client, or business relationships. Logos are not displayed unless logo-display permission is confirmed.</p>
      </Section>

      {/* Infrastructure Project Associations */}
      <Section dark>
        <SectionHeading
          eyebrow="Infrastructure Project Associations"
          title="Project engagement across infrastructure verticals"
          light
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infraAssociations.map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white">
              <Building2 className="h-5 w-5 text-electric-300" /> {c}
            </div>
          ))}
        </div>
      </Section>

      {/* Supply / Technology / Product Relationships */}
      <Section>
        <SectionHeading eyebrow="Supply / Technology / Product Relationships" title="Partner categories" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {techPartners.map((p) => (
            <div key={p.title} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm">
              <p.icon className="h-8 w-8 text-electric-600" />
              <h3 className="mt-4 text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-navy-300">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Interior Product Ecosystem */}
      <Section dark>
        <SectionHeading
          eyebrow="Interior Product Ecosystem"
          title="Business Bench product relationship"
          description="Interior product solutions supported through the Business Bench product ecosystem for selected interior product and project requirements."
          light
        />
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
          <Sparkles className="h-8 w-8 text-amber" />
          <h3 className="mt-4 text-lg font-bold text-white">In association with Business Bench</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-100/75">
            Interior product solutions supported through the Business Bench product ecosystem. This relationship supports material supply coordination without claiming ownership, exclusive dealership, or exclusive distribution rights.
          </p>
        </div>
      </Section>

      <CtaBanner title="Partner with RSIPL INDIA" description="Explore partnership and project engagement opportunities." buttonText="Contact Us" buttonTo="/contact" />
    </>
  )
}
