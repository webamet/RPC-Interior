import { useState } from 'react'
import { Phone, Mail, Globe, MapPin, Send, MessageSquare } from 'lucide-react'
import { PageHero, Section } from '../components/UI/PagePrimitives'
import Button from '../components/UI/Button'
import Toast from '../components/UI/Toast'
import { supabase } from '../lib/supabaseClient'
import { company, contactFormCategories, indianStates } from '../lib/businessData'

interface FormData {
  full_name: string
  company: string
  designation: string
  mobile: string
  email: string
  state: string
  project_location: string
  project_category: string
  project_description: string
  expected_timeline: string
  consent: boolean
}

const initial: FormData = {
  full_name: '', company: '', designation: '', mobile: '', email: '',
  state: '', project_location: '', project_category: 'Power Transmission',
  project_description: '', expected_timeline: '', consent: false,
}

const timelines = ['Within 3 months', '3–6 months', '6–12 months', '12–24 months', 'More than 24 months']

export default function Contact() {
  const [form, setForm] = useState<FormData>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.full_name.trim()) e.full_name = 'Full name is required'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.mobile.trim()) e.mobile = 'Mobile is required'
    else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\D/g, ''))) e.mobile = 'Enter a valid 10-digit Indian mobile number'
    if (!form.project_description.trim()) e.project_description = 'Project description is required'
    if (!form.consent) e.consent = 'Consent is required to submit'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    const { error } = await supabase.from('contact_submissions').insert({
      name: form.full_name,
      company: form.company,
      designation: form.designation,
      email: form.email,
      phone: form.mobile,
      state: form.state,
      project_location: form.project_location,
      project_category: form.project_category,
      project_description: form.project_description,
      expected_timeline: form.expected_timeline,
      subject: form.project_category,
      message: form.project_description,
    })
    setLoading(false)
    if (error) {
      setToast({ message: 'Submission failed. Please try again or email us directly.', type: 'error' })
    } else {
      setToast({ message: 'Thank you! Your enquiry has been submitted. Our team will respond shortly.', type: 'success' })
      setForm(initial)
    }
  }

  const set = (k: keyof FormData, v: string | boolean) => setForm({ ...form, [k]: v })

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Ramsang Infrastructure Pvt Ltd supports infrastructure, power, government, renewable-energy, telecom, and interior project requirements across India."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-navy"><MessageSquare className="h-6 w-6 text-electric-600" /> Project Enquiry Form</h2>
            <p className="mt-2 text-navy-300">Fill out the form below and our team will get back to you within two business days.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" required error={errors.full_name}>
                  <input type="text" value={form.full_name} onChange={(e) => set('full_name', e.target.value)} className="rsipl-input" />
                </Field>
                <Field label="Company / Organisation" required error={errors.company}>
                  <input type="text" value={form.company} onChange={(e) => set('company', e.target.value)} className="rsipl-input" />
                </Field>
                <Field label="Designation">
                  <input type="text" value={form.designation} onChange={(e) => set('designation', e.target.value)} className="rsipl-input" />
                </Field>
                <Field label="Mobile" required error={errors.mobile}>
                  <input type="tel" value={form.mobile} onChange={(e) => set('mobile', e.target.value)} className="rsipl-input" placeholder="10-digit mobile" />
                </Field>
                <Field label="Email" required error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className="rsipl-input" />
                </Field>
                <Field label="State">
                  <select value={form.state} onChange={(e) => set('state', e.target.value)} className="rsipl-input">
                    <option value="">Select state</option>
                    {indianStates.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Project Location">
                  <input type="text" value={form.project_location} onChange={(e) => set('project_location', e.target.value)} className="rsipl-input" />
                </Field>
                <Field label="Project Category" required>
                  <select value={form.project_category} onChange={(e) => set('project_category', e.target.value)} className="rsipl-input">
                    {contactFormCategories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Project Description" required error={errors.project_description}>
                <textarea rows={4} value={form.project_description} onChange={(e) => set('project_description', e.target.value)} className="rsipl-input" />
              </Field>
              <Field label="Expected Timeline">
                <select value={form.expected_timeline} onChange={(e) => set('expected_timeline', e.target.value)} className="rsipl-input">
                  <option value="">Select timeline</option>
                  {timelines.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={form.consent} onChange={(e) => set('consent', e.target.checked)} className="rsipl-checkbox mt-0.5" />
                <span className="text-sm text-navy-300">I consent to RSIPL INDIA contacting me regarding my project enquiry.</span>
              </label>
              {errors.consent && <span className="block text-xs text-red-600">{errors.consent}</span>}
              <Button type="submit" variant="primary" loading={loading}>
                {!loading && <Send className="h-4 w-4" />} Submit Enquiry
              </Button>
            </form>
          </div>

          {/* Key Contacts + Address */}
          <div>
            <h2 className="text-2xl font-bold text-navy">Key Contacts</h2>
            <div className="mt-6 space-y-4">
              {company.leaders.map((l) => (
                <div key={l.name} className="rounded-2xl border border-navy-50 bg-white p-5 shadow-sm">
                  <p className="font-bold text-navy">{l.name}</p>
                  <p className="text-sm text-electric-600">{l.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href={`tel:${l.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-lg bg-navy-50 px-4 py-2 text-sm font-semibold text-navy hover:bg-navy-100">
                      <Phone className="h-4 w-4" /> {l.phone}
                    </a>
                    <a href={`https://wa.me/${l.phone.replace(/[\s+]/g, '')}`} className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100">
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-navy-50 bg-navy-50/50 p-5">
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-sm font-semibold text-navy hover:text-electric-700">
                  <Mail className="h-5 w-5 text-electric-600" /> {company.email}
                </a>
                <a href={`https://${company.website}`} className="mt-3 flex items-center gap-3 text-sm font-semibold text-navy hover:text-electric-700">
                  <Globe className="h-5 w-5 text-electric-600" /> {company.website}
                </a>
              </div>
              <div className="rounded-2xl bg-navy p-6 text-white">
                <MapPin className="h-6 w-6 text-amber" />
                <p className="mt-3 font-semibold">Corporate Office</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-100/80">
                  {company.legalName}<br />
                  {company.address.line1}<br />
                  {company.address.line2}<br />
                  {company.address.line3}<br />
                  {company.address.area}<br />
                  {company.address.city}<br />
                  {company.address.district}<br />
                  {company.address.state} {company.address.pincode}<br />
                  {company.address.country}
                </p>
              </div>
              {/* Map placeholder */}
              <div className="rounded-2xl border border-navy-50 bg-navy-50/30 p-6 text-center">
                <MapPin className="mx-auto h-8 w-8 text-electric-600" />
                <p className="mt-2 text-sm text-navy-300">Beltola, Guwahati, Assam 781028</p>
                <a href="https://maps.google.com/?q=Beltola+Guwahati+Assam+781028" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 hover:text-electric-700">
                  View on Google Maps <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  )
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy">{label}{required && <span className="text-amber"> *</span>}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}
