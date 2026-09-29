import { Cable, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function PowerTransmissionEPC() {
  return (
    <ServicePage
      title="Power Transmission EPC"
      subtitle="End-to-end EPC delivery for EHV transmission lines — from route survey and tower foundations to conductor stringing, OPGW installation, and commissioning."
      overview="RSIPL INDIA provides EPC services for high-voltage transmission infrastructure, covering route planning, tower foundations, erection, conductor stringing, OPGW installation, and associated civil works for state and central utilities across India."
      offerings={[
        'EHV transmission line construction with route survey and tower spotting',
        'Tower foundation, erection, and stub setting with strict alignment controls',
        'Conductor stringing and sagging using tension stringing equipment',
        'OPGW installation, jointing, and commissioning support for communication and protection',
        'Testing, commissioning, and route documentation',
        'Associated civil and electrical infrastructure works',
      ]}
      benefits={[
        { icon: Cable, title: 'Integrated Delivery', description: 'Engineering, procurement, and construction under one coordination cell.' },
        { icon: ShieldCheck, title: 'Safety Compliance', description: 'Permit systems, PPE, and work-at-height controls on every site.' },
        { icon: Clock, title: 'Schedule Reliability', description: 'Milestone-driven planning with daily progress tracking.' },
        { icon: Gauge, title: 'Quality Assurance', description: 'ITP-aligned inspection and audit-ready documentation.' },
      ]}
      industries={['State Transmission Utilities', 'Central Transmission Utilities', 'Renewable Developers', 'DISCOMs', 'EPC Companies', 'PSUs']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Power Infrastructure' }, { label: 'Power Transmission EPC' }]}
    />
  )
}
