import { HardHat, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function ConstructionManagement() {
  return (
    <ServicePage
      title="Construction Management"
      subtitle="Site execution management, supervision, safety, and quality control across infrastructure project sites."
      overview="RSIPL INDIA manages construction execution including site mobilisation, supervision, safety systems, quality control, progress tracking, and stakeholder coordination across power, civil, telecom, and government project environments."
      offerings={[
        'Site mobilisation and setup',
        'Construction supervision and daily progress tracking',
        'Safety systems and permit-to-work controls',
        'Quality control and inspection test plans',
        'Stakeholder coordination and reporting',
        'Mobile tower and telecom site construction support',
      ]}
      benefits={[
        { icon: HardHat, title: 'Site Expertise', description: 'Experienced site teams across diverse project environments.' },
        { icon: ShieldCheck, title: 'Safety Systems', description: 'Permit systems, PPE, and daily toolbox talks.' },
        { icon: Clock, title: 'Progress Tracking', description: 'Daily progress monitoring and milestone reporting.' },
        { icon: Gauge, title: 'Quality Control', description: 'ITP-aligned inspection and audit-ready documentation.' },
      ]}
      industries={['State Utilities', 'EPC Companies', 'Government Agencies', 'PSUs', 'Telecom Infrastructure']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'EPC Capabilities' }, { label: 'Construction Management' }]}
    />
  )
}
