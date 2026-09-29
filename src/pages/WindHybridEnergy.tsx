import { Wind, Zap, ShieldCheck, Clock } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function WindHybridEnergy() {
  return (
    <ServicePage
      title="Wind & Hybrid Energy"
      subtitle="Wind farm infrastructure, hybrid solar-wind projects, and grid integration support."
      overview="RSIPL INDIA supports wind and hybrid energy projects with civil foundations, internal electrical networks, evacuation infrastructure, and balance of plant works for wind turbine generators and hybrid facilities."
      offerings={[
        'Wind turbine generator foundations',
        'Internal electrical cable and overhead network',
        'Switchyard and metering station construction',
        'Hybrid solar-wind project infrastructure',
        'SCADA and remote monitoring integration',
        'Site restoration and access roads',
      ]}
      benefits={[
        { icon: Wind, title: 'Wind Infrastructure', description: 'WTG foundations and internal electrical network construction.' },
        { icon: Zap, title: 'Hybrid Integration', description: 'Solar-wind hybrid project infrastructure support.' },
        { icon: ShieldCheck, title: 'Cyclone-Safe Design', description: 'Foundations designed for cyclic loading and wind exposure.' },
        { icon: Clock, title: 'Season Planning', description: 'Erection scheduled around wind and cyclone season windows.' },
      ]}
      industries={['Independent Power Producers', 'Renewable Developers', 'State Utilities', 'EPC Companies']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Energy' }, { label: 'Wind & Hybrid' }]}
    />
  )
}
