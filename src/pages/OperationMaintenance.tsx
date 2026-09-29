import { LifeBuoy, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function OperationMaintenance() {
  return (
    <ServicePage
      title="Operation & Maintenance"
      subtitle="Preventive maintenance, fault response, site upkeep, and O&M support for power, telecom, and infrastructure assets."
      overview="RSIPL INDIA provides operation and maintenance support including preventive maintenance, fault-response coordination, site upkeep, remote site mobilisation, and O&M documentation for power, telecom, and infrastructure assets."
      offerings={[
        'Preventive maintenance for transmission and distribution assets',
        'Fault-response coordination and repair',
        'Mobile tower and telecom site upkeep',
        'Remote site mobilisation for O&M',
        'Site inspection and condition monitoring',
        'O&M documentation and reporting',
      ]}
      benefits={[
        { icon: LifeBuoy, title: 'Responsive Support', description: 'Fault-response coordination and maintenance scheduling.' },
        { icon: ShieldCheck, title: 'Safety in O&M', description: 'Safe work practices for energised and remote assets.' },
        { icon: Clock, title: 'Preventive Schedule', description: 'Planned maintenance cycles to reduce downtime.' },
        { icon: Gauge, title: 'Documentation', description: 'Maintenance records and condition monitoring reports.' },
      ]}
      industries={['State Utilities', 'DISCOMs', 'Telecom Infrastructure', 'Renewable Developers', 'EPC Companies']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'EPC Capabilities' }, { label: 'Operation & Maintenance' }]}
    />
  )
}
