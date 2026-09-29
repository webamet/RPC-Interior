import { Sun, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function SolarEnergy() {
  return (
    <ServicePage
      title="Solar Power Projects"
      subtitle="Ground-mounted and rooftop solar infrastructure, module mounting structures, DC/AC electrical works, and grid evacuation."
      overview="RSIPL INDIA supports solar power projects with infrastructure including module mounting structure installation, DC string assembly, cable laying, inverter-transformer stations, and grid evacuation infrastructure."
      offerings={[
        'Ground-mounted solar infrastructure',
        'Rooftop solar system installation',
        'Module mounting structure fabrication and installation',
        'DC string assembly, cable laying, and trenching',
        'Inverter-transformer stations and evacuation infrastructure',
        'SCADA, weather monitoring, and commissioning support',
      ]}
      benefits={[
        { icon: Sun, title: 'Solar Infrastructure', description: 'Ground-mounted and rooftop solar project capability.' },
        { icon: ShieldCheck, title: 'Safety Compliance', description: 'DC and AC electrical safety during installation.' },
        { icon: Clock, title: 'Schedule Reliability', description: 'Phased execution aligned with solar season windows.' },
        { icon: Gauge, title: 'Quality Control', description: 'Module testing and cable insulation verification.' },
      ]}
      industries={['Renewable Developers', 'State Utilities', 'Government Agencies', 'Commercial Developers', 'EPC Companies']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Energy' }, { label: 'Solar Power Projects' }]}
    />
  )
}
