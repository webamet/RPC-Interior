import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Logo from '../UI/Logo'
import Button from '../UI/Button'

const aboutLinks = [
  { name: 'About Us', to: '/about' },
  { name: "Chairman's Message", to: '/chairmans-message' },
  { name: 'Vision, Mission & Values', to: '/vision-mission-values' },
  { name: 'Why Ramsang', to: '/why-ramsang' },
]

const powerInfraLinks = [
  { name: 'Power Transmission EPC', to: '/services/power-transmission-epc' },
  { name: 'Tower Foundation', to: '/services/tower-foundation' },
  { name: 'Tower Erection', to: '/services/tower-erection' },
  { name: 'Conductor Stringing', to: '/services/conductor-stringing' },
  { name: 'OPGW Installation', to: '/services/opgw-installation' },
  { name: 'Distribution Network', to: '/services/power-distribution' },
]

const substationLinks = [
  { name: 'AIS & GIS Substations', to: '/services/ais-gis-substations', badge: 'New Diversification' },
]

const energyLinks = [
  { name: 'Renewable Energy EPC', to: '/services/renewable-energy' },
  { name: 'Solar Power Projects', to: '/services/solar-energy' },
  { name: 'Wind & Hybrid', to: '/services/wind-hybrid-energy' },
  { name: 'BESS', to: '/services/bess' },
]

const epcLinks = [
  { name: 'Engineering & Design', to: '/services/engineering-design' },
  { name: 'Procurement', to: '/services/procurement' },
  { name: 'Construction Management', to: '/services/construction-management' },
  { name: 'Testing & Commissioning', to: '/services/testing-commissioning' },
  { name: 'Operation & Maintenance', to: '/services/operation-maintenance' },
]

const interiorLinks = [
  { name: 'Interior Project Solutions', to: '/services/interior-project-solutions' },
]

const hseLinks = [
  { name: 'Health, Safety & Environment', to: '/services/hse' },
  { name: 'Quality Assurance', to: '/services/quality-assurance' },
]

const experienceLinks = [
  { name: 'Industries We Serve', to: '/industries' },
  { name: 'Project Portfolio', to: '/projects' },
  { name: 'Clients & Partners', to: '/clients-partners' },
]

interface NavLink {
  name: string
  to: string
  badge?: string
}

interface MenuGroup {
  label: string
  links: NavLink[]
}

const menuGroups: MenuGroup[] = [
  { label: 'About', links: aboutLinks },
  { label: 'Power Infrastructure', links: powerInfraLinks },
  { label: 'Substations', links: substationLinks },
  { label: 'Energy', links: energyLinks },
  { label: 'EPC Capabilities', links: epcLinks },
  { label: 'Interior', links: interiorLinks },
  { label: 'HSE & Quality', links: hseLinks },
  { label: 'Experience', links: experienceLinks },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md shadow-navy-900/5' : 'bg-white/95 backdrop-blur'
      } border-b border-navy-50`}
    >
      <nav className="container-rsipl flex h-16 items-center justify-between lg:h-20">
        <Link to="/" aria-label="RSIPL INDIA home">
          <Logo variant="dark" />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          <Link to="/" className="rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-navy-50">
            Home
          </Link>
          {menuGroups.map((group) => (
            <MegaMenu key={group.label} group={group} />
          ))}
          <Link to="/careers" className="rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-navy-50">
            Careers
          </Link>
          <Link to="/contact" className="rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-navy-50">
            Contact
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-2">
          <Button to="/contact" variant="ghost" className="text-sm">
            Discuss a Project
          </Button>
          <Button to="/rfq" variant="primary">
            Request RFQ <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="xl:hidden">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-navy-50 bg-white px-4 pb-6">
            <MobileLink to="/">Home</MobileLink>
            {menuGroups.map((group) => (
              <MobileSection key={group.label} title={group.label} items={group.links} />
            ))}
            <MobileLink to="/careers">Careers</MobileLink>
            <MobileLink to="/contact">Contact</MobileLink>
            <div className="mt-4 space-y-3">
              <Button to="/contact" variant="secondary" fullWidth>
                Discuss a Project
              </Button>
              <Button to="/rfq" variant="primary" fullWidth>
                Request RFQ <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function MegaMenu({ group }: { group: MenuGroup }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-navy-50">
        {group.label} <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div className="w-64 animate-slide-down rounded-2xl border border-navy-50 bg-white p-3 shadow-2xl shadow-navy-900/10">
            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-navy-300 hover:bg-electric-50 hover:text-electric-700"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="block rounded-lg px-3 py-3 text-sm font-semibold text-navy hover:bg-navy-50">
      {children}
    </Link>
  )
}

function MobileSection({ title, items }: { title: string; items: NavLink[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-navy-50">
      <button
        className="flex w-full items-center justify-between px-3 py-3 text-sm font-bold uppercase tracking-wider text-electric-600"
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-2">
          {items.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-navy-300 hover:bg-navy-50"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
