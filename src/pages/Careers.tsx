import { Mail, MapPin, Briefcase, ArrowRight } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'
import Button from '../components/UI/Button'

const positions = [
  { title: 'Senior Electrical Engineer — Power Transmission', location: 'Pan-India Site', experience: '8+ years', responsibilities: ['Lead transmission line and substation engineering', 'Coordinate with site teams and clients', 'Ensure compliance with industry standards'] },
  { title: 'Project Manager — Renewable Energy', location: 'Pan-India Site', experience: '10+ years', responsibilities: ['Manage solar, wind, and BESS infrastructure projects', 'Drive schedule, cost, and quality outcomes', 'Lead client and stakeholder coordination'] },
  { title: 'Business Development Manager — Government Sector', location: 'Corporate Office', experience: '6+ years', responsibilities: ['Identify government and PSU tender opportunities', 'Build relationships with utilities and agencies', 'Coordinate bid preparation and submission'] },
  { title: 'Site Supervisor — Civil & Electrical Construction', location: 'Project Site', experience: '5+ years', responsibilities: ['Supervise civil and electrical site works', 'Enforce safety and quality protocols', 'Track daily progress and documentation'] },
  { title: 'Telecom / Mobile Tower Site Engineer', location: 'Project Site', experience: '4+ years', responsibilities: ['Support mobile tower infrastructure projects', 'Coordinate civil and electrical site work', 'Manage preventive maintenance and fault response'] },
  { title: 'Procurement & Supply Chain Executive', location: 'Corporate Office', experience: '4+ years', responsibilities: ['Manage vendor coordination and PO processing', 'Track deliveries and logistics', 'Ensure material traceability and documentation'] },
]

export default function Careers() {
  return (
    <>
      <PageHero
        title="Build Infrastructure. Build Your Career."
        subtitle="RSIPL INDIA hires engineers, project managers, safety professionals, and procurement specialists to deliver multidisciplinary infrastructure projects across India."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />

      <Section>
        <SectionHeading eyebrow="Culture" title="An execution-led culture built on safety and quality" description="We foster a collaborative, safety-first environment where engineers and project professionals grow through hands-on delivery of complex infrastructure projects across power, civil, telecom, renewable, and interior verticals." />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-6">
            <Briefcase className="h-8 w-8 text-electric-600" />
            <h3 className="mt-4 font-bold text-navy">Meaningful Projects</h3>
            <p className="mt-2 text-sm text-navy-300">Work on power, government, telecom, renewable, and interior projects that power India's growth.</p>
          </div>
          <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-6">
            <MapPin className="h-8 w-8 text-amber" />
            <h3 className="mt-4 font-bold text-navy">Pan-India Exposure</h3>
            <p className="mt-2 text-sm text-navy-300">Gain experience across diverse project environments and remote site locations.</p>
          </div>
          <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-6">
            <ArrowRight className="h-8 w-8 text-electric-600" />
            <h3 className="mt-4 font-bold text-navy">Growth Pathways</h3>
            <p className="mt-2 text-sm text-navy-300">Structured progression from site engineering to project leadership.</p>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeading eyebrow="Open Positions" title="Current opportunities" light />
        <div className="mt-10 space-y-4">
          {positions.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-navy-100/75">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {p.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {p.experience}</span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-navy-100/70">
                    {p.responsibilities.map((r) => <li key={r} className="flex items-start gap-2"><span className="text-amber">•</span> {r}</li>)}
                  </ul>
                </div>
                <a href="mailto:info@rsiplindia.com" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-bold text-navy hover:bg-amber-300">
                  <Mail className="h-4 w-4" /> Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-8 text-center">
          <h2 className="text-2xl font-bold text-navy">General Application</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-300">Don't see a role that fits? Submit your profile for future opportunities and we'll reach out when a suitable position opens.</p>
          <div className="mt-6">
            <Button href="mailto:info@rsiplindia.com" variant="secondary">Submit Your Profile <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </Section>

      <CtaBanner title="Join the RSIPL INDIA team" description="Build infrastructure that powers India's future." buttonText="Contact Us" buttonTo="/contact" />
    </>
  )
}
