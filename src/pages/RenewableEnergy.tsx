import { Sun, Wind, Zap, BatteryCharging } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function RenewableEnergy() {
  return (
    <ServicePage
      title="Renewable Energy EPC"
      subtitle="Solar, wind, hybrid, and BESS infrastructure with grid connectivity and power evacuation support."
      overview="RSIPL INDIA supports renewable energy projects including solar, wind, hybrid, and battery energy storage infrastructure with grid connectivity, power evacuation, and balance of plant works. Our renewable capability is integrated with our transmission and civil infrastructure experience."
      offerings={[
        'Solar power project infrastructure and balance of plant',
        'Wind farm infrastructure and civil foundations',
        'Hybrid solar-wind project support',
        'BESS infrastructure and grid integration',
        'Grid connectivity and power evacuation infrastructure',
        'Associated civil and electrical works',
      ]}
      benefits={[
        { icon: Sun, title: 'Solar Expertise', description: 'Ground-mounted and rooftop solar infrastructure capability.' },
        { icon: Wind, title: 'Wind Infrastructure', description: 'Wind farm civil foundations and electrical networks.' },
        { icon: BatteryCharging, title: 'Storage Integration', description: 'BESS infrastructure and grid stabilization support.' },
        { icon: Zap, title: 'Grid Connectivity', description: 'Power evacuation and grid integration infrastructure.' },
      ]}
      industries={['Renewable Developers', 'State Utilities', 'Government Agencies', 'EPC Companies', 'Independent Power Producers']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Energy' }, { label: 'Renewable Energy EPC' }]}
    />
  )
}
