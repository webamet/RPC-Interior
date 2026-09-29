import { HardHat, ShieldCheck, Layers, Gauge } from 'lucide-react'
import ServicePage from '../components/UI/ServicePage'

export default function TowerFoundation() {
  return (
    <ServicePage
      title="Tower Foundation"
      subtitle="Precision foundation construction for transmission towers — excavation, concreting, and stub setting with strict alignment controls."
      overview="RSIPL INDIA constructs tower foundations for EHV transmission lines, including site preparation, excavation, concreting, stub setting, and backfilling with alignment tolerances aligned to tower design specifications."
      offerings={[
        'Foundation excavation and site preparation for various tower types',
        'Concrete pouring and curing with quality-controlled mix designs',
        'Stub setting and alignment with precision survey equipment',
        'Backfilling and site restoration',
        'Foundation type selection based on soil investigation',
        'Documentation of foundation records and ITP compliance',
      ]}
      benefits={[
        { icon: HardHat, title: 'Site Expertise', description: 'Experienced foundation teams across diverse soil and terrain conditions.' },
        { icon: ShieldCheck, title: 'Safety Discipline', description: 'Excavation safety, shoring, and confined space controls.' },
        { icon: Layers, title: 'Precision Alignment', description: 'Survey-controlled stub setting for accurate tower erection.' },
        { icon: Gauge, title: 'Quality Control', description: 'Concrete strength testing and alignment verification records.' },
      ]}
      industries={['State Transmission Utilities', 'Central Transmission Utilities', 'Renewable Developers', 'EPC Companies']}
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Power Infrastructure' }, { label: 'Tower Foundation' }]}
    />
  )
}
