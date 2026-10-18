import { useState } from 'react'
import { UserPlus, CheckCircle } from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import PageHeader from '../../components/common/PageHeader'
import { mockDoctors } from '../../data/mockData'
import { getAvailableBedNumbers, useHospitalData } from '../../context/HospitalDataContext'

const WARDS = ['General', 'Semi-Private', 'Private', 'ICU']
const WARD_COLORS = {
  General:      { active: 'bg-sky-500 border-sky-500 text-white',     inactive: 'border-slate-200 text-slate-600 hover:border-sky-300' },
  'Semi-Private': { active: 'bg-indigo-500 border-indigo-500 text-white', inactive: 'border-slate-200 text-slate-600 hover:border-indigo-300' },
  Private:      { active: 'bg-violet-500 border-violet-500 text-white', inactive: 'border-slate-200 text-slate-600 hover:border-violet-300' },
  ICU:          { active: 'bg-rose-500 border-rose-500 text-white',    inactive: 'border-slate-200 text-slate-600 hover:border-rose-300' },
}

export default function IPDAdmission() {
  const { beds, ipdPatients, admitPatient } = useHospitalData()
  const [form, setForm] = useState({
    name: '', age: '', gender: 'Male', contact: '',
    admissionType: 'Planned', doctor: '', ward: '', bedMode: 'Auto', bed: '',
  })
  const [admittedPatient, setAdmittedPatient] = useState(null)
  const [error, setError] = useState('')

  function update(field, val) {
    setForm(current => ({
      ...current,
      [field]: val,
      ...(field === 'ward' ? { bed: '' } : {}),
    }))
  }

  function handleAdmit() {
    setError('')
    const age = Number(form.age)
    const digits = form.contact.replace(/\D/g, '')
    const doctor = mockDoctors.find(item => item.id === Number(form.doctor))

    if (!form.name.trim() || !form.age || !form.contact.trim() || !doctor || !form.ward) {
      setError('Complete the patient details, doctor, and ward before admission.')
      return
    }
    if (!Number.isInteger(age) || age < 0 || age > 130) {
      setError('Enter a valid patient age between 0 and 130.')
      return
    }
    if (digits.length < 10 || digits.length > 15) {
      setError('Enter a valid contact number with 10 to 15 digits.')
      return
    }

    try {
      const result = admitPatient({ ...form, doctor })
      setAdmittedPatient(result.patient)
    } catch (admissionError) {
      setError(admissionError.message)
    }
  }

  const availableBeds = getAvailableBedNumbers(form.ward, beds, ipdPatients)

  return (
    <div className="space-y-6">
      <PageHeader title="IPD Admission" subtitle="Admit a new patient to the inpatient department" />

      {admittedPatient ? (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <h3 className="text-slate-800 font-bold text-xl">Patient Admitted Successfully</h3>
          <p className="text-slate-500 text-sm mt-2">
            {admittedPatient.name} has been admitted to {admittedPatient.ward} ward, bed {admittedPatient.bed}, under {admittedPatient.doctor}.
          </p>
          <Button
            variant="primary"
            className="mt-6"
            onClick={() => {
              setForm({ name: '', age: '', gender: 'Male', contact: '', admissionType: 'Planned', doctor: '', ward: '', bedMode: 'Auto', bed: '' })
              setAdmittedPatient(null)
            }}
          >
            Admit Another Patient
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {error && (
            <div className="lg:col-span-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
              {error}
            </div>
          )}
          {/* Patient Details */}
          <Card className="lg:col-span-2" title="Patient Details">
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="admission-name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                <input id="admission-name" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Patient full name" autoComplete="name"
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700 placeholder-slate-400" />
              </div>
              <div>
                <label htmlFor="admission-age" className="block text-sm font-medium text-slate-700 mb-1.5">Age</label>
                <input id="admission-age" type="number" min="0" max="130" value={form.age} onChange={e => update('age', e.target.value)} placeholder="Age"
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700 placeholder-slate-400" />
              </div>
              <div>
                <label htmlFor="admission-gender" className="block text-sm font-medium text-slate-700 mb-1.5">Gender</label>
                <select id="admission-gender" value={form.gender} onChange={e => update('gender', e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="admission-contact" className="block text-sm font-medium text-slate-700 mb-1.5">Contact Number</label>
                <input id="admission-contact" type="tel" value={form.contact} onChange={e => update('contact', e.target.value)} placeholder="+91 XXXXXXXXXX" autoComplete="tel"
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700 placeholder-slate-400" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Admission Type</label>
                <div className="flex gap-3">
                  {['Emergency', 'Planned'].map(t => (
                    <button key={t} type="button" onClick={() => update('admissionType', t)}
                      className={`flex-1 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                        form.admissionType === t
                          ? t === 'Emergency' ? 'bg-red-500 border-red-500 text-white' : 'bg-indigo-500 border-indigo-500 text-white'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}>{t}</button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="admission-doctor" className="block text-sm font-medium text-slate-700 mb-1.5">Assign Doctor</label>
                <select id="admission-doctor" value={form.doctor} onChange={e => update('doctor', e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700">
                  <option value="">— Select a doctor —</option>
                  {mockDoctors.filter(d => d.status !== 'off-duty').map(d => (
                    <option key={d.id} value={d.id}>{d.name} · {d.specialization}</option>
                  ))}
                </select>
              </div>
            </div>
          </Card>

          {/* Ward & Bed */}
          <div className="space-y-4">
            <Card title="Ward Selection">
              <div className="p-4 grid grid-cols-2 gap-2.5">
                {WARDS.map(w => {
                  const c = WARD_COLORS[w]
                  const bed = beds.find(b => b.ward === w)
                  return (
                    <button key={w} type="button" onClick={() => update('ward', w)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        form.ward === w ? c.active : `bg-white ${c.inactive}`
                      }`}>
                      <p className="font-semibold text-sm">{w}</p>
                      <p className={`text-xs mt-0.5 ${form.ward === w ? 'text-white/80' : 'text-slate-400'}`}>
                        {bed?.available ?? 0} beds free
                      </p>
                    </button>
                  )
                })}
              </div>
            </Card>

            <Card title="Bed Allocation">
              <div className="p-4 flex gap-3">
                {['Auto', 'Manual'].map(m => (
                  <button key={m} type="button" onClick={() => update('bedMode', m)}
                    className={`flex-1 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                      form.bedMode === m ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 text-slate-600'
                    }`}>{m}</button>
                ))}
              </div>
              {form.bedMode === 'Auto' && form.ward && (
                <div className="px-4 pb-4">
                  {availableBeds.length ? (
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <p className="text-green-700 font-semibold text-sm">Next available bed</p>
                      <p className="text-green-600 text-xs mt-0.5">{availableBeds[0]}</p>
                    </div>
                  ) : (
                    <p className="rounded-lg bg-rose-50 p-3 text-center text-xs font-medium text-rose-700">No beds available in this ward.</p>
                  )}
                </div>
              )}
              {form.bedMode === 'Manual' && form.ward && (
                <div className="px-4 pb-4">
                  <label htmlFor="admission-bed" className="mb-1.5 block text-sm font-medium text-slate-700">Choose an available bed</label>
                  <select id="admission-bed" value={form.bed} onChange={e => update('bed', e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700">
                    <option value="">Select an available bed</option>
                    {availableBeds.map(bedNumber => <option key={bedNumber} value={bedNumber}>{bedNumber}</option>)}
                  </select>
                </div>
              )}
            </Card>

            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={handleAdmit}
            >
              <UserPlus size={16} /> Admit Patient
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
