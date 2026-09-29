import { Gauge, ShieldCheck, Clock, Zap } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function TestingCommissioning() {
  return (
    <ServicePage
      title="Testing & Commissioning"
      subtitle="Pre-commissioning testing, energisation support, and grid code compliance for power infrastructure projects."
      overview="RSIPL INDIA provides testing and commissioning support including pre-commissioning tests, protection relay testing, insulation verification, energisation support, and grid code compliance documentation for transmission, distribution, and renewable projects."
      offerings={[
        'Pre-commissioning testing and inspection',
        'Protection relay testing and coordination',
        'Insulation resistance and continuity testing',
        'Energisation support and grid code compliance',
        'Performance testing for renewable plants',
        'Commissioning documentation and handover',
      ]}
      benefits={[
        { icon: Gauge, title: 'Testing Rigour', description: 'Comprehensive pre-commissioning and performance testing.' },
        { icon: ShieldCheck, title: 'Safety Compliance', description: 'Energisation safety protocols and permit systems.' },
        { icon: Clock, title: 'Schedule Alignment', description: 'Testing sequenced with construction milestones.' },
        { icon: Zap, title: 'Grid Code', description: 'Compliance with state grid codes and utility requirements.' },
      ]}
      industries={['State Utilities', 'Central Utilities', 'EPC Companies', 'Renewable Developers', 'DISCOMs']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'EPC Capabilities' }, { label: 'Testing & Commissioning' }]}
    />
  )
}
