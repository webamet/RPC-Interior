import { PageHero, Section } from '../components/UI/PagePrimitives'

const sections = [
  { title: 'Information We Collect', body: 'RSIPL INDIA collects information that you provide directly through our website forms, including contact enquiries, RFQ submissions, and vendor registrations. This may include your name, company, email, phone, project details, and company profile information. We also collect basic technical information such as browser type and pages visited for site analytics.' },
  { title: 'How We Use Your Information', body: 'We use the information you provide to respond to your enquiries, evaluate project requirements, process vendor registrations, and communicate with you about potential business opportunities. We do not sell or rent your personal information to third parties.' },
  { title: 'Information Sharing', body: 'RSIPL INDIA may share your information with trusted partners and subcontractors involved in project delivery, only to the extent necessary for business operations. All such sharing is governed by confidentiality expectations and applicable regulations.' },
  { title: 'Data Security', body: 'We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. Access to personal information is restricted to authorised personnel with legitimate business needs.' },
  { title: 'Cookies & Analytics', body: 'Our website may use basic cookies and analytics to understand site usage and improve user experience. You can control cookies through your browser settings. Disabling cookies may affect some site functionality.' },
  { title: 'Your Rights', body: 'You may request access to, correction of, or deletion of your personal information held by RSIPL INDIA. To exercise these rights, contact us at info@rsiplindia.com.' },
  { title: 'Third-Party Links', body: 'Our website may contain links to third-party websites. RSIPL INDIA is not responsible for the privacy practices or content of external sites. We encourage you to review the privacy policies of any third-party sites you visit.' },
  { title: 'Updates to This Policy', body: 'RSIPL INDIA may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.' },
  { title: 'Contact Us', body: 'For questions about this privacy policy or our data practices, contact us at info@rsiplindia.com or through our Contact Us page.' },
]

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="RSIPL INDIA is committed to protecting the privacy and security of information you share with us through this website."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-navy-300">Last updated: January 2024</p>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-navy">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
