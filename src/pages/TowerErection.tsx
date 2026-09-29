import { TowerControl as TowerIcon, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function TowerErection() {
  return (
    <ServicePage
      title="Tower Erection"
      subtitle="Safe and efficient assembly and erection of transmission towers — from stub assembly to final torque checks."
      overview="RSIPL INDIA handles transmission tower erection including member assembly, stub assembly, section erection, tightening and torque verification, and anti-corrosion treatment with work-at-height safety systems."
      offerings={[
        'Tower member assembly and erection for all tower configurations',
        'Stub assembly and initial section erection',
        'Bolting, tightening, and torque verification',
        'Anti-corrosion treatment and touch-up',
        'Work-at-height safety systems and permit controls',
        'Erection sequence planning and crane / derrick coordination',
      ]}
      benefits={[
        { icon: TowerIcon, title: 'All Tower Types', description: 'Self-supporting, guyed, and narrow-base tower configurations.' },
        { icon: ShieldCheck, title: 'Height Safety', description: 'Permit-to-work systems, fall protection, and daily toolbox talks.' },
        { icon: Clock, title: 'Efficient Sequencing', description: 'Planned erection sequences to minimise site time and risk.' },
        { icon: Gauge, title: 'Torque Compliance', description: 'Verified torque values and alignment checks before stringing.' },
      ]}
      industries={['State Transmission Utilities', 'Central Transmission Utilities', 'Renewable Developers', 'EPC Companies']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Power Infrastructure' }, { label: 'Tower Erection' }]}
    />
  )
}
