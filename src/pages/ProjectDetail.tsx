import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, MapPin, Building, ArrowRight, ShieldCheck } from 'lucide-react'
import { Section, CtaBanner } from '../components/UI/PagePrimitives'
import Button from '../components/UI/Button'
import { projects } from '../lib/businessData'

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

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-2xl font-bold text-navy">Project not found</h1>
          <p className="mt-3 text-navy-300">The project you're looking for doesn't exist or has been moved.</p>
          <div className="mt-6">
            <Button to="/projects" variant="secondary">Back to Projects</Button>
          </div>
        </div>
      </Section>
    )
  }

  const metrics = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Building, label: 'Client Type', value: project.clientType },
    { icon: ShieldCheck, label: 'Status', value: project.status },
    { icon: CheckCircle2, label: 'Sector', value: project.sector },
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 hero-grid-bg opacity-30" />
        <div className="container-rsipl relative">
          <nav className="mb-5 flex items-center gap-1.5 text-xs font-medium text-navy-100/70">
            <Link to="/" className="hover:text-amber">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-amber">Projects</Link>
            <span>/</span>
            <span>{project.name}</span>
          </nav>
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${typeColors[project.type] || 'bg-navy-100 text-navy-700'}`}>
            {project.type}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">{project.name}</h1>
          <p className="mt-3 text-navy-100/80">{project.location} · {project.sector}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">Project Overview</h2>
            <div className="mt-4 space-y-4 text-navy-300 leading-relaxed">
              {project.overview.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-navy">Scope of Work</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.scope.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-lg border border-navy-50 bg-white p-3 text-sm text-navy-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-navy">Technical Highlights</h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-navy-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-navy-50 bg-navy-50/50 p-6">
            <h3 className="text-lg font-bold text-navy">Key Metrics</h3>
            <dl className="mt-4 space-y-4">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <m.icon className="h-5 w-5 text-electric-600" />
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-navy-300">{m.label}</dt>
                    <dd className="text-sm font-semibold text-navy">{m.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <Button to="/rfq" variant="primary" fullWidth>Discuss a Similar Project <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBanner title="Discuss a Similar Project" description="Share your requirements and our team will structure a tailored engagement." buttonText="Request RFQ" />
    </>
  )
}
