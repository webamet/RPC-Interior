import {
  ArrowRight, Zap, Cable, Radio, Sun, Wind, BatteryCharging,
  ShieldCheck, Layers, Building2,
  TowerControl, HardHat, FileCheck, Gauge, Users,
  Sparkles, Phone as PhoneIcon, CheckCircle2,
} from 'lucide-react'
import Button from '../components/UI/Button'
import ServiceCard from '../components/UI/ServiceCard'
import { Section, SectionHeading } from '../components/UI/PagePrimitives'
import { coreVerticals, whyRamsang, company } from '../lib/businessData'

const verticalIcons = [Cable, Zap, ShieldCheck, Sun, Layers, Radio, Sparkles, TowerControl]

const bsfScope = [
  { icon: HardHat, title: 'Civil Infrastructure', description: 'Civil works including site preparation, foundations, and structural construction.' },
  { icon: Building2, title: 'Bunker Construction', description: 'Bunker construction and associated bunker civil works.' },
  { icon: Zap, title: 'Electrical Works', description: 'Electrical infrastructure installation and integration.' },
  { icon: Radio, title: 'Mobile Tower Infrastructure', description: 'Mobile tower and telecom infrastructure support.' },
]

const opgwScope = [
  'OPGW Stringing', 'Jointing', 'Splicing', 'Testing Support',
  'Commissioning Support', 'Transmission Route Mobilisation',
]

const renewableScope = [
  { icon: Sun, title: 'Solar', description: 'Ground-mounted and rooftop solar infrastructure.' },
  { icon: Wind, title: 'Wind', description: 'Wind farm infrastructure and balance of plant.' },
  { icon: Zap, title: 'Hybrid', description: 'Solar-wind hybrid projects and grid integration.' },
  { icon: BatteryCharging, title: 'BESS', description: 'Battery energy storage systems and grid stabilization.' },
]

const interiorCategories = [
  'SPC Flooring', 'Polygranite', 'WPC', 'PVC', 'Wall Panels',
  'Charcoal Boards', 'Stone Panels', 'Wallpapers', 'Flooring', 'False Ceiling', 'Commercial Interiors',
]

const hseQuality = [
  { icon: ShieldCheck, title: 'Safety', description: 'Zero-harm culture with permit systems and PPE.' },
  { icon: FileCheck, title: 'Quality', description: 'ITP-aligned inspection and audit-ready documentation.' },
  { icon: Gauge, title: 'Site Controls', description: 'Controlled mobilisation and site supervision.' },
  { icon: Users, title: 'Supervision', description: 'Dedicated site engineers and daily progress tracking.' },
]

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-navy pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 hero-grid-bg opacity-30" />
        <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1E6FD9" stopOpacity="0" />
              <stop offset="50%" stopColor="#1E6FD9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1E6FD9" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[80, 180, 280, 380, 480].map((y) => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="url(#lineGrad)" strokeWidth="1.5" />
          ))}
          {[200, 400, 600, 800, 1000].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="600" stroke="#1E6FD9" strokeOpacity="0.08" strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-electric-500/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-amber/10 blur-3xl" />
        <div className="container-rsipl relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/40 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-200">
              <Zap className="h-3.5 w-3.5" /> EPC · Infrastructure · Energy
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Engineering Infrastructure. <span className="text-amber">Powering Progress.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/85">
              Ramsang Infrastructure Pvt Ltd delivers multidisciplinary infrastructure and EPC capabilities across power transmission, OPGW, civil infrastructure, renewable energy, government projects, telecom infrastructure, and project-scale interior solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">Discuss a Project <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/rfq" variant="outline">Request RFQ</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE BUSINESS VERTICALS */}
      <Section>
        <SectionHeading
          eyebrow="Core Business Verticals"
          title="Multidisciplinary infrastructure capabilities"
          description="RSIPL INDIA operates as a diversified infrastructure and EPC organisation across connected project verticals — demonstrating execution-focused capability rather than a single-service contractor."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreVerticals.map((v, i) => {
            const Icon = verticalIcons[i] || Building2
            return (
              <ServiceCard
                key={v.title}
                icon={Icon}
                title={v.title}
                description={v.description}
                to={v.to}
                accent={i % 3 === 0 ? 'electric' : i % 3 === 1 ? 'amber' : 'navy'}
              />
            )
          })}
        </div>
      </Section>

      {/* SECTION 3: GOVERNMENT & DEFENCE EXPERIENCE */}
      <Section dark>
        <SectionHeading
          eyebrow="Government & Defence Experience"
          title="Infrastructure execution for high-responsibility environments"
          description="Government and defence-related projects demand execution discipline, controlled mobilisation, safety, documentation, and dependable site coordination."
          light
          center
        />
        <div className="mt-10 rounded-2xl border border-amber/30 bg-amber/5 p-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            <ShieldCheck className="h-3.5 w-3.5" /> BSF Project Experience
          </span>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bsfScope.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <s.icon className="h-8 w-8 text-amber" />
              <h3 className="mt-4 font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/industries" variant="outline">Learn More About Government & Defence <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </Section>

      {/* SECTION 4: POWER TRANSMISSION */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Power Transmission"
              title="Transmission corridors from foundation to commissioning"
              description="RSIPL INDIA delivers EHV transmission line construction including tower foundations, erection, conductor stringing, OPGW, and testing and commissioning."
            />
            <ul className="mt-6 space-y-3">
              {['Transmission corridors', 'Tower foundations', 'Tower erection', 'Conductor stringing', 'OPGW installation', 'Testing and commissioning'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/services/power-transmission-epc" variant="secondary">Explore Transmission EPC <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-50 bg-gradient-to-br from-navy to-electric-800 p-8">
            <Cable className="h-12 w-12 text-electric-300" />
            <h3 className="mt-4 text-xl font-bold text-white">EHV Transmission Lines</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-100/80">
              Engineering, procurement, and construction for high-voltage transmission corridors with route survey, tower spotting, foundation works, and stringing operations.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-amber">132kV–765kV</p>
                <p className="mt-1 text-xs text-navy-100/70">Voltage Range</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-amber">EPC</p>
                <p className="mt-1 text-xs text-navy-100/70">Delivery Model</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: OPGW */}
      <Section dark>
        <SectionHeading
          eyebrow="OPGW Authority"
          title="Optical Ground Wire installation and commissioning"
          description="RSIPL INDIA provides specialised OPGW stringing, jointing, splicing, testing, and commissioning support for transmission corridors."
          light
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {opgwScope.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
              <span className="text-sm font-medium text-navy-100">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/services/opgw-installation" variant="primary">Explore OPGW Capability <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </Section>

      {/* SECTION 6: RENEWABLE ENERGY */}
      <Section>
        <SectionHeading
          eyebrow="Renewable Energy"
          title="Solar, wind, hybrid, and energy storage infrastructure"
          description="RSIPL INDIA supports renewable energy projects with grid connectivity, power evacuation, and balance of plant works."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {renewableScope.map((r) => (
            <div key={r.title} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <r.icon className="h-8 w-8 text-electric-600" />
              <h3 className="mt-4 font-bold text-navy">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{r.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/services/renewable-energy" variant="secondary">Explore Renewable Energy <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </Section>

      {/* SECTION 7: INTERIOR PROJECT SOLUTIONS */}
      <Section dark>
        <SectionHeading
          eyebrow="Interior Project Solutions"
          title="Project-scale interior materials and execution"
          description="Premium interior materials, supply, installation, and interior project execution for commercial, institutional, government, and large built-environment requirements."
          light
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {interiorCategories.map((cat) => (
            <span key={cat} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-navy-100">
              {cat}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy-100/75">
          Interior product solutions supported through the Business Bench product ecosystem for selected interior product and project requirements.
        </p>
        <div className="mt-8">
          <Button to="/services/interior-project-solutions" variant="primary">Discuss an Interior Project <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </Section>

      {/* SECTION 8: AIS/GIS DIVERSIFICATION */}
      <Section>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 md:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            Newly Diversified Capability
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-navy md:text-4xl">Expanding into AIS & GIS Substation Projects</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-300">
            RSIPL India is expanding its power infrastructure capabilities into AIS and GIS substation projects through specialised technical and project execution teams. This strategic expansion is designed to support a broader project lifecycle, integrating line and substation capability.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-300">
            Our diversification is supported by specialised technical teams, experienced project professionals, engineering coordination capability, project execution resources, and strategic expansion into substation infrastructure.
          </p>
          <div className="mt-8">
            <Button to="/services/ais-gis-substations" variant="secondary">Explore AIS & GIS Capability <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </Section>

      {/* SECTION 9: WHY RAMSANG */}
      <Section dark>
        <SectionHeading eyebrow="Why Ramsang" title="Built for multidisciplinary project execution" light center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyRamsang.map((w) => (
            <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber/40">
              <h3 className="font-bold text-white text-sm">{w.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-navy-100/75">{w.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 10: PROJECT EXPERIENCE */}
      <Section>
        <SectionHeading
          eyebrow="Project Experience"
          title="Execution across connected infrastructure verticals"
          description="RSIPL INDIA's project experience spans power transmission, OPGW, government and defence, civil, electrical, telecom, renewable energy, and interior project solutions."
          center
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Power Transmission', 'OPGW', 'Government & Defence', 'BSF Infrastructure', 'Civil', 'Electrical', 'Mobile Tower / Telecom', 'Renewable Energy', 'Interior'].map((cat) => (
            <span key={cat} className="rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy">
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/projects" variant="secondary">View Project Portfolio <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </Section>

      {/* SECTION 11: HSE + QUALITY */}
      <Section dark>
        <SectionHeading eyebrow="HSE & Quality" title="Safety and quality embedded in every project" light center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hseQuality.map((h) => (
            <div key={h.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h.icon className="h-8 w-8 text-amber" />
              <h3 className="mt-4 font-bold text-white">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{h.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 12: FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-electric-700 py-16 md:py-24">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="container-rsipl relative text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Build the Next Project with RSIPL INDIA</h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-100/85">
            Connect with our leadership team to discuss your infrastructure, power, government, renewable, telecom, or interior project requirements.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {company.leaders.map((l) => (
              <div key={l.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="font-bold text-white">{l.name}</p>
                <p className="mt-1 text-xs text-electric-200">{l.role}</p>
                <a href={`tel:${l.phone.replace(/\s/g, '')}`} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber/10 px-4 py-2 text-sm font-semibold text-amber hover:bg-amber/20">
                  <PhoneIcon className="h-4 w-4" /> {l.phone}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/rfq" variant="primary">Request RFQ <ArrowRight className="h-4 w-4" /></Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
