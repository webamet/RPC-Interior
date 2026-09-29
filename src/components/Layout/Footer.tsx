import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'
import Logo from '../UI/Logo'
import { company } from '../../lib/businessData'

const footerGroups = [
  {
    title: 'Power',
    links: [
      { name: 'Transmission', to: '/services/power-transmission-epc' },
      { name: 'OPGW', to: '/services/opgw-installation' },
      { name: 'Distribution', to: '/services/power-distribution' },
      { name: 'AIS/GIS', to: '/services/ais-gis-substations' },
    ],
  },
  {
    title: 'Energy',
    links: [
      { name: 'Renewable EPC', to: '/services/renewable-energy' },
      { name: 'Solar', to: '/services/solar-energy' },
      { name: 'Wind', to: '/services/wind-hybrid-energy' },
      { name: 'BESS', to: '/services/bess' },
    ],
  },
  {
    title: 'Infrastructure',
    links: [
      { name: 'Government / Defence', to: '/industries' },
      { name: 'Civil', to: '/industries' },
      { name: 'Electrical', to: '/industries' },
      { name: 'Telecom', to: '/industries' },
    ],
  },
  {
    title: 'Interiors',
    links: [
      { name: 'Interior Materials', to: '/services/interior-project-solutions' },
      { name: 'Flooring', to: '/services/interior-project-solutions' },
      { name: 'Wall Panels', to: '/services/interior-project-solutions' },
      { name: 'Project Application', to: '/services/interior-project-solutions' },
    ],
  },
  {
    title: 'Corporate',
    links: [
      { name: 'About', to: '/about' },
      { name: 'Projects', to: '/projects' },
      { name: 'Clients', to: '/clients-partners' },
      { name: 'Careers', to: '/careers' },
      { name: 'Contact', to: '/contact' },
      { name: 'RFQ', to: '/rfq' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-100">
      <div className="container-rsipl grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-amber">
            Engineering Infrastructure. Powering Progress.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-100/80">
            Ramsang Infrastructure Pvt Ltd is a diversified Indian infrastructure and EPC organisation delivering multidisciplinary project capabilities across power transmission, OPGW, civil infrastructure, renewable energy, government projects, telecom infrastructure, and project-scale interior solutions.
          </p>
          <div className="mt-5 flex items-start gap-2 text-sm text-navy-100/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-300" />
            <span>
              {company.address.line1}, {company.address.line2}, {company.address.line3}, {company.address.area}, {company.address.city}, {company.address.district}, {company.address.state} {company.address.pincode}, {company.address.country}
            </span>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">{group.title}</h4>
            <ul className="mt-4 space-y-2">
              {group.links.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="text-sm text-navy-100/80 transition-colors hover:text-amber">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-rsipl grid gap-6 py-6 md:grid-cols-2">
          <div className="flex flex-wrap gap-6">
            {company.leaders.map((p) => (
              <a
                key={p.name}
                href={`tel:${p.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-1.5 text-sm text-electric-200 hover:text-amber"
              >
                <Phone className="h-3.5 w-3.5" /> {p.phone}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 md:justify-end">
            <a href="mailto:info@rsiplindia.com" className="inline-flex items-center gap-1.5 text-sm text-electric-200 hover:text-amber">
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
            <a href="https://www.rsiplindia.com" className="inline-flex items-center gap-1.5 text-sm text-electric-200 hover:text-amber">
              <Globe className="h-3.5 w-3.5" /> {company.website}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rsipl flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-100/70 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Ramsang Infrastructure Pvt Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-amber">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-amber">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
