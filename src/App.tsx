import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

import Home from './pages/Home'
import About from './pages/About'
import ChairmansMessage from './pages/ChairmansMessage'
import VisionMissionValues from './pages/VisionMissionValues'
import WhyRamsang from './pages/WhyRamsang'
import PowerTransmissionEPC from './pages/PowerTransmissionEPC'
import TowerFoundation from './pages/TowerFoundation'
import TowerErection from './pages/TowerErection'
import ConductorStringing from './pages/ConductorStringing'
import OPGWInstallation from './pages/OPGWInstallation'
import PowerDistribution from './pages/PowerDistribution'
import AISGISSubstations from './pages/AISGISSubstations'
import RenewableEnergy from './pages/RenewableEnergy'
import SolarEnergy from './pages/SolarEnergy'
import WindHybridEnergy from './pages/WindHybridEnergy'
import BESS from './pages/BESS'
import InteriorProjectSolutions from './pages/InteriorProjectSolutions'
import EngineeringDesign from './pages/EngineeringDesign'
import Procurement from './pages/Procurement'
import ConstructionManagement from './pages/ConstructionManagement'
import TestingCommissioning from './pages/TestingCommissioning'
import OperationMaintenance from './pages/OperationMaintenance'
import HSE from './pages/HSE'
import QualityAssurance from './pages/QualityAssurance'
import Industries from './pages/Industries'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ClientsPartners from './pages/ClientsPartners'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import RFQ from './pages/RFQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chairmans-message" element={<ChairmansMessage />} />
            <Route path="/vision-mission-values" element={<VisionMissionValues />} />
            <Route path="/why-ramsang" element={<WhyRamsang />} />
            <Route path="/services/power-transmission-epc" element={<PowerTransmissionEPC />} />
            <Route path="/services/tower-foundation" element={<TowerFoundation />} />
            <Route path="/services/tower-erection" element={<TowerErection />} />
            <Route path="/services/conductor-stringing" element={<ConductorStringing />} />
            <Route path="/services/opgw-installation" element={<OPGWInstallation />} />
            <Route path="/services/power-distribution" element={<PowerDistribution />} />
            <Route path="/services/ais-gis-substations" element={<AISGISSubstations />} />
            <Route path="/services/renewable-energy" element={<RenewableEnergy />} />
            <Route path="/services/solar-energy" element={<SolarEnergy />} />
            <Route path="/services/wind-hybrid-energy" element={<WindHybridEnergy />} />
            <Route path="/services/bess" element={<BESS />} />
            <Route path="/services/interior-project-solutions" element={<InteriorProjectSolutions />} />
            <Route path="/services/engineering-design" element={<EngineeringDesign />} />
            <Route path="/services/procurement" element={<Procurement />} />
            <Route path="/services/construction-management" element={<ConstructionManagement />} />
            <Route path="/services/testing-commissioning" element={<TestingCommissioning />} />
            <Route path="/services/operation-maintenance" element={<OperationMaintenance />} />
            <Route path="/services/hse" element={<HSE />} />
            <Route path="/services/quality-assurance" element={<QualityAssurance />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/clients-partners" element={<ClientsPartners />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rfq" element={<RFQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>

      

    </BrowserRouter>
  )
}
