import { Zap, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function PowerDistribution() {
  return (
    <ServicePage
      title="Power Distribution Network"
      subtitle="11kV/33kV distribution network construction, rural electrification, and network strengthening for DISCOMs and state utilities."
      overview="RSIPL INDIA constructs and strengthens power distribution networks including 11kV and LT line construction, distribution transformer erection, service connections, and network strengthening for DISCOMs and state electricity boards."
      offerings={[
        '11kV and 33kV distribution line construction',
        'Distribution transformer erection and installation',
        'LT line construction and service connections',
        'Rural electrification and household connections',
        'Network strengthening and feeder separation',
        'Consumer indexing and documentation',
      ]}
      benefits={[
        { icon: Zap, title: 'Network Expertise', description: 'Distribution line construction and DT installation across rural and urban networks.' },
        { icon: ShieldCheck, title: 'Safety Compliance', description: 'Work practices aligned with electrical safety regulations.' },
        { icon: Clock, title: 'Programme Delivery', description: 'Milestone-driven execution for government electrification programmes.' },
        { icon: Gauge, title: 'Documentation', description: 'Consumer indexing and as-built documentation for O&M handover.' },
      ]}
      industries={['State DISCOMs', 'State Electricity Boards', 'Rural Electrification Programmes', 'EPC Companies', 'Government Utilities']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Power Infrastructure' }, { label: 'Distribution Network' }]}
    />
  )
}
