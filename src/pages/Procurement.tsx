import { Package, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function Procurement() {
  return (
    <ServicePage
      title="Procurement"
      subtitle="Material procurement, vendor coordination, supply chain management, and logistics for infrastructure projects."
      overview="RSIPL INDIA manages procurement including vendor coordination, purchase order processing, delivery tracking, logistics, and material traceability across power, civil, telecom, and interior project requirements."
      offerings={[
        'Vendor coordination and PO processing',
        'Material procurement and supply chain management',
        'Delivery tracking and logistics coordination',
        'Material traceability and documentation',
        'Quality inspection at supplier and site',
        'Procurement partnerships and regional sourcing',
      ]}
      benefits={[
        { icon: Package, title: 'Supply Chain', description: 'Coordinated procurement across multiple project verticals.' },
        { icon: ShieldCheck, title: 'Quality Assurance', description: 'Material inspection and traceability from supplier to site.' },
        { icon: Clock, title: 'Delivery Tracking', description: 'Logistics coordination aligned with site milestones.' },
        { icon: Gauge, title: 'Documentation', description: 'Material records and procurement audit trail.' },
      ]}
      industries={['State Utilities', 'EPC Companies', 'Government Agencies', 'PSUs', 'Renewable Developers']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'EPC Capabilities' }, { label: 'Procurement' }]}
    />
  )
}
