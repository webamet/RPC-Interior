import { useState } from 'react'
import { Send, Upload, FileText } from 'lucide-react'
import { PageHero, Section } from '../components/UI/PagePrimitives'
import Button from '../components/UI/Button'
import Toast from '../components/UI/Toast'
import { supabase } from '../lib/supabaseClient'
import { rfqCategories, indianStates } from '../lib/businessData'

const timelines = ['Within 3 months', '3–6 months', '6–12 months', '12–24 months', 'More than 24 months']

interface FormData {
  organisation: string
  contact_name: string
  designation: string
  phone: string
  email: string
  rfq_reference: string
  project_name: string
  project_location: string
  state: string
  project_category: string
  scope: string
  expected_timeline: string
  message: string
}

const initial: FormData = {
  organisation: '', contact_name: '', designation: '', phone: '', email: '',
  rfq_reference: '', project_name: '', project_location: '', state: '',
  project_category: 'Power Transmission', scope: '', expected_timeline: '', message: '',
}

export default function RFQ() {
  const [form, setForm] = useState<FormData>(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.organisation.trim()) e.organisation = 'Organisation name is required'
    if (!form.contact_name.trim()) e.contact_name = 'Contact name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ''))) e.phone = 'Enter a valid 10-digit Indian phone number'
    if (!form.project_name.trim()) e.project_name = 'Project name is required'
    if (!form.state) e.state = 'State is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    const { error } = await supabase.from('rfq_submissions').insert({
      company_name: form.organisation,
      contact_person: form.contact_name,
      designation: form.designation,
      email: form.email,
      phone: form.phone,
      rfq_reference: form.rfq_reference,
      project_name: form.project_name,
      project_location: form.project_location,
      state: form.state,
      project_type: form.project_category,
      scope: form.scope,
      timeline: form.expected_timeline,
      technical_requirements: form.scope,
      additional_notes: form.message,
    })
    setLoading(false)
    if (error) {
      setToast({ message: 'Submission failed. Please try again or contact us directly.', type: 'error' })
    } else {
      setToast({ message: 'Your RFQ has been submitted. Our team will respond within two business days.', type: 'success' })
      setForm(initial)
    }
  }

  const set = (k: keyof FormData, v: string) => setForm({ ...form, [k]: v })

  return (
    <>
      <PageHero
        title="Request for Quotation / Project Inquiry"
        subtitle="Submit your project requirements for preliminary review. RSIPL INDIA supports government contractors, PSUs, utilities, EPC organisations, infrastructure developers, renewable developers, defence infrastructure contractors, telecom organisations, commercial project developers, and interior project buyers."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'RFQ' }]}
      />

      <Section>
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-10" noValidate>
          {/* Organisation Information */}
          <div>
            <h2 className="text-xl font-bold text-navy">Organisation Information</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Organisation" required error={errors.organisation}>
                <input className="rsipl-input" value={form.organisation} onChange={(e) => set('organisation', e.target.value)} />
              </Field>
              <Field label="Contact Name" required error={errors.contact_name}>
                <input className="rsipl-input" value={form.contact_name} onChange={(e) => set('contact_name', e.target.value)} />
              </Field>
              <Field label="Designation">
                <input className="rsipl-input" value={form.designation} onChange={(e) => set('designation', e.target.value)} />
              </Field>
              <Field label="Phone" required error={errors.phone}>
                <input type="tel" className="rsipl-input" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="10-digit mobile" />
              </Field>
              <Field label="Email" required error={errors.email}>
                <input type="email" className="rsipl-input" value={form.email} onChange={(e) => set('email', e.target.value)} />
              </Field>
              <Field label="Tender / RFQ Reference">
                <input className="rsipl-input" value={form.rfq_reference} onChange={(e) => set('rfq_reference', e.target.value)} placeholder="Tender or RFQ reference number" />
              </Field>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h2 className="text-xl font-bold text-navy">Project Details</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Project Name" required error={errors.project_name}>
                <input className="rsipl-input" value={form.project_name} onChange={(e) => set('project_name', e.target.value)} />
              </Field>
              <Field label="Project Location">
                <input className="rsipl-input" value={form.project_location} onChange={(e) => set('project_location', e.target.value)} />
              </Field>
              <Field label="State" required error={errors.state}>
                <select className="rsipl-input" value={form.state} onChange={(e) => set('state', e.target.value)}>
                  <option value="">Select state</option>
                  {indianStates.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Project Category" required>
                <select className="rsipl-input" value={form.project_category} onChange={(e) => set('project_category', e.target.value)}>
                  {rfqCategories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Expected Timeline">
                <select className="rsipl-input" value={form.expected_timeline} onChange={(e) => set('expected_timeline', e.target.value)}>
                  <option value="">Select timeline</option>
                  {timelines.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
            </div>
          </div>

          {/* Scope & Documents */}
          <div>
            <h2 className="text-xl font-bold text-navy">Scope & Documents</h2>
            <div className="mt-5 space-y-5">
              <Field label="Scope">
                <textarea rows={4} className="rsipl-input" value={form.scope} onChange={(e) => set('scope', e.target.value)} placeholder="Describe the project scope, key requirements, and technical specifications" />
              </Field>
              <Field label="Message">
                <textarea rows={3} className="rsipl-input" value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Any additional project context" />
              </Field>
              {/* Upload fields (informational — file upload requires storage setup) */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <span className="rsipl-label">BOQ Upload</span>
                  <div className="flex items-center gap-2 rounded-lg border border-dashed border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-navy-300">
                    <Upload className="h-4 w-4" /> File upload (attach via email if needed)
                  </div>
                </div>
                <div>
                  <span className="rsipl-label">Drawing Upload</span>
                  <div className="flex items-center gap-2 rounded-lg border border-dashed border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-navy-300">
                    <Upload className="h-4 w-4" /> File upload (attach via email if needed)
                  </div>
                </div>
                <div>
                  <span className="rsipl-label">Technical Specification Upload</span>
                  <div className="flex items-center gap-2 rounded-lg border border-dashed border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-navy-300">
                    <FileText className="h-4 w-4" /> File upload (attach via email if needed)
                  </div>
                </div>
                <div>
                  <span className="rsipl-label">Tender Document Upload</span>
                  <div className="flex items-center gap-2 rounded-lg border border-dashed border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-navy-300">
                    <FileText className="h-4 w-4" /> File upload (attach via email if needed)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl bg-navy-50/50 p-5 text-sm text-navy-300">
            <strong>Disclaimer:</strong> Submission of an RFQ or project enquiry does not by itself constitute contractual acceptance or confirmation of project execution.
          </div>

          <Button type="submit" variant="primary" fullWidth loading={loading}>
            {!loading && <Send className="h-4 w-4" />} Submit RFQ
          </Button>
        </form>
      </Section>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  )
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="rsipl-label">{label}{required && <span className="text-amber"> *</span>}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}
