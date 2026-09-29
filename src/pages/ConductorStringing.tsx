import { Cable, ShieldCheck, Clock, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function ConductorStringing() {
  return (
    <ServicePage
      title="Conductor Stringing"
      subtitle="Tension stringing of conductors and earth wire — pulling, sagging, clipping, and vibration damper installation."
      overview="RSIPL INDIA executes conductor stringing using tension stringing methods, including pilot wire installation, pulling, tensioning, sagging, clipping, and vibration damper installation with sag charts and tension calculations."
      offerings={[
        'Tension stringing of conductors and earth wire',
        'Pilot wire installation and pulling operations',
        'Sagging and tension adjustment per design sag charts',
        'Clipping and binding at suspension and tension towers',
        'Vibration damper and spacer installation',
        'Jointing and mid-span joint compression',
      ]}
      benefits={[
        { icon: Cable, title: 'Tension Method', description: 'Controlled tension stringing to protect conductor surface and joints.' },
        { icon: ShieldCheck, title: 'Crossing Safety', description: 'Guard structures and road / canal crossing protection.' },
        { icon: Clock, title: 'Sag Accuracy', description: 'Sag charts and tension calculations for correct installation.' },
        { icon: Gauge, title: 'Quality Records', description: 'Joint records, sag records, and tension verification documentation.' },
      ]}
      industries={['State Transmission Utilities', 'Central Transmission Utilities', 'Renewable Developers', 'EPC Companies']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Power Infrastructure' }, { label: 'Conductor Stringing' }]}
    />
  )
}
