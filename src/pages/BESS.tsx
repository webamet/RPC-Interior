import { BatteryCharging, Zap, ShieldCheck, Clock } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function BESS() {
  return (
    <ServicePage
      title="Battery Energy Storage System (BESS)"
      subtitle="Battery energy storage infrastructure, grid stabilization, peak shaving, and commissioning support."
      overview="RSIPL INDIA supports BESS projects with site preparation, containerised BESS installation, power conversion systems, switchyard integration, SCADA and EMS coordination, and commissioning support for grid stabilization and renewable evacuation."
      offerings={[
        'Containerised BESS site preparation and installation',
        'Power conversion system installation and integration',
        'Switchyard and transformer integration',
        'SCADA, EMS, and grid protection coordination',
        'Functional and performance testing support',
        'O&M documentation and training',
      ]}
      benefits={[
        { icon: BatteryCharging, title: 'Storage Expertise', description: 'Containerised BESS installation and integration capability.' },
        { icon: Zap, title: 'Grid Stabilization', description: 'Peak shaving, frequency regulation, and renewable firming support.' },
        { icon: ShieldCheck, title: 'Thermal Safety', description: 'Thermal management and cell-level monitoring for safe operation.' },
        { icon: Clock, title: 'Commissioning Support', description: 'Grid code compliance testing and staged grid tests.' },
      ]}
      industries={['State Transmission Utilities', 'Renewable Developers', 'State Utilities', 'EPC Companies', 'Grid Operators']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Energy' }, { label: 'BESS' }]}
    />
  )
}
