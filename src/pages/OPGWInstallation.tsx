import { Cable, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function OPGWInstallation() {
  return (
    <ServicePage
      title="OPGW Installation"
      subtitle="Optical Ground Wire stringing, jointing, splicing, testing, and commissioning support for transmission communication and protection networks."
      overview="RSIPL INDIA provides specialised OPGW installation services including stringing, jointing, splicing, fibre testing, and commissioning support for transmission corridors. Our teams handle transmission route mobilisation and fibre integration with state communication backbones."
      offerings={[
        'OPGW stringing with specialised tension stringing equipment',
        'Jointing and splicing of optical fibres',
        'Fibre continuity and OTDR testing support',
        'Commissioning support and integration with communication networks',
        'Transmission route mobilisation for remote corridors',
        'OPGW termination and earthing at substation ends',
      ]}
      benefits={[
        { icon: Cable, title: 'Specialised Equipment', description: 'Dedicated OPGW stringing and splicing equipment and tools.' },
        { icon: ShieldCheck, title: 'Fibre Protection', description: 'Controlled handling to prevent fibre damage during installation.' },
        { icon: Clock, title: 'Route Mobilisation', description: 'Proven ability to mobilise teams to remote transmission corridors.' },
        { icon: Gauge, title: 'Testing Rigour', description: 'OTDR testing and fibre continuity verification before commissioning.' },
      ]}
      industries={['State Transmission Utilities', 'Central Transmission Utilities', 'Telecom Infrastructure', 'EPC Companies']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Power Infrastructure' }, { label: 'OPGW Installation' }]}
    />
  )
}
