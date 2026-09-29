import { Sparkles, Layers, Ruler, Package, Wrench, ClipboardCheck, LifeBuoy, Boxes } from 'lucide-react'
import { PageHero, Section, SectionHeading, CtaBanner } from '../components/UI/PagePrimitives'
import { interiorMaterials, interiorApplications, interiorServices } from '../lib/businessData'

const serviceIcons = [Sparkles, Ruler, Package, Wrench, Layers, ClipboardCheck, LifeBuoy]

export default function InteriorProjectSolutions() {
  return (
    <>
      <PageHero
        title="Project-Scale Interior Materials & Execution"
        subtitle="Premium interior materials, supply, installation, and interior project execution for commercial, institutional, government, and large built-environment requirements."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Interior' }, { label: 'Interior Project Solutions' }]}
      />

      {/* Interior Materials */}
      <Section>
        <SectionHeading
          eyebrow="Interior Materials"
          title="Project-scale material supply and application"
          description="RSIPL INDIA supplies and applies a comprehensive range of interior materials for project-scale requirements across commercial, institutional, and government built environments."
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interiorMaterials.map((mat) => (
            <div key={mat} className="flex items-center gap-3 rounded-xl border border-navy-50 bg-white p-4 shadow-sm">
              <Boxes className="h-5 w-5 shrink-0 text-electric-600" />
              <span className="text-sm font-medium text-navy">{mat}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Project Application */}
      <Section dark>
        <SectionHeading
          eyebrow="Project Application"
          title="Interior solutions for diverse built environments"
          description="RSIPL positions interiors as a diversified project solution vertical supporting government, commercial, institutional, corporate, and large residential requirements."
          light
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interiorApplications.map((app) => (
            <div key={app} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm font-semibold text-white">{app}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="From material selection to after-service"
          description="RSIPL INDIA provides end-to-end interior project services including material selection, site measurement, installation, application, and after-service support."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interiorServices.map((svc, i) => {
            const Icon = serviceIcons[i % serviceIcons.length]
            return (
              <div key={svc} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <Icon className="h-8 w-8 text-amber" />
                <h3 className="mt-4 font-bold text-navy text-sm">{svc}</h3>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Business Bench */}
      <Section dark>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <SectionHeading
            eyebrow="Product Ecosystem"
            title="Business Bench Product Relationship"
            description="Interior product solutions supported through the Business Bench product ecosystem for selected interior product and project requirements."
            light
          />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-100/75">
            In association with Business Bench for selected interior product and project requirements. This relationship supports material supply coordination without claiming ownership, exclusive dealership, official national partnership, or exclusive distribution rights.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Discuss an Interior Project"
        description="Connect with our team to discuss interior material supply, installation, and project execution requirements."
        buttonText="Discuss a Project"
        buttonTo="/contact"
      />
    </>
  )
}
