import { Quote, Phone } from 'lucide-react'
import { PageHero, Section, CtaBanner } from '../components/UI/PagePrimitives'
import { company } from '../lib/businessData'

export default function ChairmansMessage() {
  const chairman = company.leaders[0]

  return (
    <>
      <PageHero
        title="Chairman's Message"
        subtitle="A vision for disciplined, multidisciplinary infrastructure execution across India."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: "Chairman's Message" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <Quote className="h-10 w-10 text-amber" />
          <div className="mt-6 space-y-5 text-navy-300 leading-relaxed text-lg">
            <p>Infrastructure is the backbone of a nation's progress. At Ramsang Infrastructure Pvt Ltd, we have built our organisation on a simple principle: execute with discipline, deliver with safety, and maintain integrity in every project interaction.</p>
            <p>India's infrastructure needs are growing rapidly — across power transmission, distribution, renewable energy, government projects, telecom, and the built environment. We recognised early that a single-service contractor model would not meet the scale and complexity of these requirements. That is why RSIPL has evolved into a diversified organisation with multidisciplinary capabilities.</p>
            <p>Our experience working in connection with BSF infrastructure requirements has reinforced our belief that high-responsibility environments demand more than technical capability — they demand controlled mobilisation, documentation discipline, and dependable site coordination. We bring this same rigour to every project we undertake.</p>
            <p>As we expand into AIS and GIS substation infrastructure through specialised technical teams, we remain committed to honest positioning. We will never claim experience we have not earned. Instead, we invest in the teams, engineering coordination, and execution resources needed to deliver on our commitments.</p>
            <p>I invite you to partner with RSIPL INDIA — an organisation built for serious infrastructure execution, driven by a responsive leadership team, and committed to powering India's progress responsibly.</p>
          </div>
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-navy-50 bg-navy-50/50 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-navy text-xl font-bold text-white">
              {chairman.name.split(' ').slice(-2, -1)[0][0]}{chairman.name.split(' ').slice(-1)[0][0]}
            </div>
            <div>
              <p className="font-bold text-navy">{chairman.name}</p>
              <p className="text-sm text-electric-600">{chairman.role}</p>
              <a href={`tel:${chairman.phone.replace(/\s/g, '')}`} className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-amber">
                <Phone className="h-4 w-4" /> {chairman.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner title="Speak with our leadership" description="Connect with our team to discuss your infrastructure project requirements." buttonText="Contact Us" buttonTo="/contact" />
    </>
  )
}
