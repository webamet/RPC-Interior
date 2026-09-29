import { Ruler, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function EngineeringDesign() {
  return (
    <ServicePage
      title="Engineering & Design"
      subtitle="Engineering coordination, technical design, and project planning across power, civil, telecom, and renewable infrastructure."
      overview="RSIPL INDIA provides engineering and design coordination including route survey, tower spotting, site engineering, project review, survey, and documentation across infrastructure project verticals."
      offerings={[
        'Route survey and tower spotting for transmission lines',
        'Site engineering and project planning',
        'Technical design coordination across disciplines',
        'Project review and documentation',
        'Survey and site measurement',
        'Engineering coordination with clients and consultants',
      ]}
      benefits={[
        { icon: Ruler, title: 'Survey Expertise', description: 'Route survey, tower spotting, and site measurement capability.' },
        { icon: ShieldCheck, title: 'Design Compliance', description: 'Engineering aligned with industry standards and grid codes.' },
        { icon: Clock, title: 'Planning Discipline', description: 'Milestone-driven project planning and progress tracking.' },
        { icon: Gauge, title: 'Documentation', description: 'Audit-ready engineering records and design documentation.' },
      ]}
      industries={['State Utilities', 'Central Utilities', 'EPC Companies', 'Government Agencies', 'Renewable Developers']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'EPC Capabilities' }, { label: 'Engineering & Design' }]}
    />
  )
}
