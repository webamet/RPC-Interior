import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { PageHero, Section, CtaBanner } from '../components/UI/PagePrimitives'
import { projects, projectFilters } from '../lib/businessData'

const typeColors: Record<string, string> = {
  Transmission: 'bg-electric-100 text-electric-700',
  OPGW: 'bg-electric-100 text-electric-700',
  'Government & Defence': 'bg-amber-100 text-amber-700',
  Civil: 'bg-navy-100 text-navy-700',
  Electrical: 'bg-navy-100 text-navy-700',
  Telecom: 'bg-cyan-100 text-cyan-700',
  'Renewable Energy': 'bg-emerald-100 text-emerald-700',
  Interior: 'bg-rose-100 text-rose-700',
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.type === filter)
  const featured = projects.find((p) => p.featured)

  return (
    <>
      <PageHero
        title="Project Portfolio"
        subtitle="RSIPL INDIA's project experience spans power transmission, OPGW, government and defence, civil, electrical, telecom, renewable energy, and interior project solutions."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Project Portfolio' }]}
      />

      {/* Featured BSF Block */}
      {featured && (
        <Section dark>
          <div className="rounded-2xl border border-amber/30 bg-amber/5 p-8 md:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
              <ShieldCheck className="h-3.5 w-3.5" /> Featured Project Experience
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">{featured.name}</h2>
            <p className="mt-2 text-sm text-electric-200">{featured.sector}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featured.scope.map((s) => (
                <div key={s} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{s}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy-100/75">
              {featured.overview[0]}
            </p>
            <div className="mt-8">
              <Link to={`/projects/${featured.id}`} className="inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 text-sm font-bold text-navy hover:bg-amber-300">
                View Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f ? 'bg-navy text-white' : 'bg-navy-50 text-navy-300 hover:bg-navy-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy-50 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-40 bg-gradient-to-br from-navy via-navy-600 to-electric-700">
                <div className="absolute inset-0 hero-grid-bg opacity-30" />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${typeColors[p.type] || 'bg-navy-100 text-navy-700'}`}>
                  {p.type}
                </span>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider text-navy-100/80">{p.location}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-navy">{p.name}</h3>
                <p className="mt-1 text-xs font-semibold text-electric-600">{p.sector}</p>
                <dl className="mt-3 space-y-1 text-sm text-navy-300">
                  <div className="flex justify-between"><dt className="font-medium">Status</dt><dd>{p.status}</dd></div>
                  <div className="flex justify-between"><dt className="font-medium">Client</dt><dd className="text-right">{p.clientType}</dd></div>
                </dl>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 group-hover:gap-2.5">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner title="Discuss a Similar Project" description="Share your requirements and our team will structure a tailored engagement." buttonText="Request RFQ" />
    </>
  )
}
