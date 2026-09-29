import { PageHero, Section } from '../components/UI/PagePrimitives'

const sections = [
  { title: 'Acceptance of Terms', body: 'By accessing and using the RSIPL INDIA website, you accept and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.' },
  { title: 'Use of Website', body: 'You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair the website or interfere with any other party\'s use. Unauthorised use, scraping, or reproduction of content is prohibited.' },
  { title: 'Information Accuracy', body: 'RSIPL INDIA strives to provide accurate and current information on this website. However, we make no warranties regarding the completeness, accuracy, or reliability of any content. Project capabilities, certifications, and service descriptions may be updated without notice.' },
  { title: 'RFQ & Form Submissions', body: 'Submission of an RFQ, contact enquiry, or vendor registration through this website is for preliminary project review and does not constitute contractual acceptance, binding commitment, or service guarantee by RSIPL INDIA. All formal engagements are governed by separate written agreements.' },
  { title: 'Intellectual Property', body: 'All content on this website, including text, graphics, logos, and design elements, is the property of Ramsang Infrastructure Pvt. Ltd. or its content providers and is protected by applicable intellectual property laws. Unauthorised use or reproduction is prohibited.' },
  { title: 'Third-Party Links', body: 'This website may contain links to third-party websites for reference and convenience. RSIPL INDIA does not endorse or control third-party content and is not responsible for the accuracy or reliability of external sites.' },
  { title: 'Limitation of Liability', body: 'RSIPL INDIA shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided. Your use of the site is at your own risk.' },
  { title: 'Governing Law', body: 'These Terms & Conditions are governed by the laws of India. Any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the courts in India.' },
  { title: 'Updates to Terms', body: 'RSIPL INDIA may update these Terms & Conditions at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised terms.' },
  { title: 'Contact', body: 'For questions about these Terms & Conditions, contact us at info@rsiplindia.com.' },
]

export default function TermsConditions() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="These terms govern your use of the RSIPL INDIA website. Please read them carefully before using our services."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
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
