import { ShieldCheck, Cable, Zap, Sun, Wind, Radio, Building2, HardHat, Sparkles } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'
import { industriesServed } from '../lib/businessData'

const industryIcons = [Cable, Zap, Building2, ShieldCheck, ShieldCheck, ShieldCheck, Radio, Sun, Sun, Wind, Building2, HardHat, Building2, Sparkles]

export default function Industries() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="RSIPL INDIA supports infrastructure requirements across power, government, defence, telecom, renewable, and interior project sectors — with strong visibility for government and defence infrastructure."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries We Serve' }]}
      />

      {/* Government & Defence Featured Block */}
      <Section dark>
        <div className="rounded-2xl border border-amber/30 bg-amber/5 p-8 md:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            <ShieldCheck className="h-3.5 w-3.5" /> BSF Project Experience
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">Government & Defence Infrastructure</h2>
          <p className="mt-4 max-w-3xl text-navy-100/85">
            RSIPL has project experience working for and in connection with BSF infrastructure requirements. Our scope includes civil infrastructure works, bunker construction, electrical works, and mobile tower / telecom infrastructure support.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <HardHat className="h-8 w-8 text-amber" />
              <h3 className="mt-3 font-bold text-white">Civil Infrastructure</h3>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <Building2 className="h-8 w-8 text-amber" />
              <h3 className="mt-3 font-bold text-white">Bunker Construction</h3>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <Zap className="h-8 w-8 text-amber" />
              <h3 className="mt-3 font-bold text-white">Electrical Works</h3>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <Radio className="h-8 w-8 text-amber" />
              <h3 className="mt-3 font-bold text-white">Mobile Tower Infrastructure</h3>
            </div>
          </div>
        </div>
      </Section>

      {/* All Industries */}
      <Section>
        <SectionHeading
          eyebrow="Sectors We Serve"
          title="Diverse industry capabilities"
          description="RSIPL INDIA's multidisciplinary execution model supports clients across power, government, telecom, renewable, and interior project sectors."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industriesServed.map((ind, i) => {
            const Icon = industryIcons[i % industryIcons.length]
            return (
              <div key={ind.title} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <Icon className="h-8 w-8 text-electric-600" />
                <h3 className="mt-4 font-bold text-navy">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">{ind.description}</p>
              </div>
            )
          })}
        </div>
      </Section>

      <CtaBanner title="Discuss your industry requirements" description="Connect with our team to discuss sector-specific infrastructure needs." buttonText="Request RFQ" />
    </>
  )
}
