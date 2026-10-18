import { useState } from 'react'
import { LogOut, CheckCircle, Printer } from 'lucide-react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import PageHeader from '../../components/common/PageHeader'
import { useHospitalData } from '../../context/HospitalDataContext'
import { downloadPdf } from '../../utils/exportUtils'

export default function Discharge() {
  const { ipdPatients, dischargePatient } = useHospitalData()
  const [printStatus, setPrintStatus] = useState(false)
  const [selectedPatientId, setSelectedPatientId] = useState(null)
  const [form, setForm] = useState({ diagnosis: '', summary: '', followUp: '', condition: 'Stable' })
  const [dischargedPatientName, setDischargedPatientName] = useState('')
  const [error, setError] = useState('')

  const patient = ipdPatients.find(p => p.id === selectedPatientId) ?? ipdPatients[0]

  function update(field, val) {
    setForm(f => ({ ...f, [field]: val }))
  }

  function handleDischarge() {
    if (!patient) return
    try {
      dischargePatient(patient.id)
      setDischargedPatientName(patient.name)
      setError('')
    } catch (dischargeError) {
      setError(dischargeError.message)
    }
  }

  async function handlePrint() {
    if (!patient) return
    setPrintStatus(true)

    const title = `Discharge Summary - ${patient?.name}`
    const lines = [
      `Patient Name: ${patient?.name}`,
      `Patient ID: ${patient?.id}`,
      `Ward: ${patient?.ward}`,
      `Bed: ${patient?.bed}`,
      `Attending Doctor: ${patient?.doctor}`,
      `Admitted On: ${patient?.admitDate}`,
      `Length of Stay: ${patient?.days} days`,
      `Condition at Discharge: ${form.condition}`,
      '',
      'Final Diagnosis:',
      form.diagnosis || 'N/A',
      '',
      'Treatment Summary:',
      form.summary || 'N/A',
      '',
      'Follow-up Instructions:',
      form.followUp || 'N/A',
    ]

    await downloadPdf(`discharge-summary-${patient?.id}.pdf`, title, lines)
    setTimeout(() => setPrintStatus(false), 2000)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Patient Discharge" subtitle="Process patient discharge and generate summary" />

      {dischargedPatientName ? (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <h3 className="text-slate-800 font-bold text-xl">Discharge Approved</h3>
          <p className="text-slate-500 text-sm mt-2">
            {dischargedPatientName} has been successfully discharged.
          </p>
          <Button variant="primary" className="mt-6" onClick={() => {
            setDischargedPatientName('')
            setSelectedPatientId(null)
            setForm({ diagnosis: '', summary: '', followUp: '', condition: 'Stable' })
          }}>
            Process Another Discharge
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {error && (
            <div className="lg:col-span-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700" role="alert">
              {error}
            </div>
          )}
          {/* Patient Select */}
          <Card title="Select Patient">
            <div className="divide-y divide-slate-50">
              {ipdPatients.length ? ipdPatients.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPatientId(p.id)}
                  className={`w-full text-left px-4 py-3.5 transition-colors hover:bg-slate-50 ${
                    patient?.id === p.id ? 'bg-sky-50 border-l-2 border-sky-500' : ''
                  }`}
                >
                  <p className="text-slate-800 text-sm font-semibold">{p.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{p.ward} · Bed {p.bed} · Day {p.days}</p>
                  <div className="mt-1.5">
                    <Badge status={p.condition} />
                  </div>
                </button>
              )) : <p className="p-5 text-sm text-slate-500">There are no active inpatients to discharge.</p>}
            </div>
          </Card>

          {/* Discharge Form */}
          {patient && <div className="lg:col-span-2 space-y-4">
            <Card>
              <div className="flex items-center gap-4 p-5 bg-slate-50/60 rounded-t-xl border-b border-slate-100">
                <div>
                  <p className="text-slate-800 font-bold">{patient?.name}</p>
                  <p className="text-slate-400 text-sm">{patient?.ward} · {patient?.bed} · Admitted {patient?.admitDate} · {patient?.days} days stay</p>
                  <p className="text-slate-500 text-xs mt-0.5">Attending: {patient?.doctor}</p>
                </div>
                <div className="ml-auto">
                  <Badge status={patient?.condition} />
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Final Diagnosis</label>
                  <textarea
                    value={form.diagnosis}
                    onChange={e => update('diagnosis', e.target.value)}
                    placeholder="Enter final confirmed diagnosis..."
                    rows={2}
                    className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700 placeholder-slate-400 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Treatment Summary</label>
                  <textarea
                    value={form.summary}
                    onChange={e => update('summary', e.target.value)}
                    placeholder="Summary of treatment provided during stay..."
                    rows={3}
                    className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700 placeholder-slate-400 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Follow-up Instructions</label>
                  <textarea
                    value={form.followUp}
                    onChange={e => update('followUp', e.target.value)}
                    placeholder="Post-discharge care, medications, and follow-up date..."
                    rows={3}
                    className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 text-slate-700 placeholder-slate-400 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Discharge Condition</label>
                  <div className="flex gap-2">
                    {['Stable', 'Recovering', 'Referred'].map(c => (
                      <button key={c} type="button" onClick={() => update('condition', c)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                          form.condition === c
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-slate-200 text-slate-600 hover:border-green-300'
                        }`}>{c}</button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="primary" size="lg" className="flex-1 justify-center" onClick={handleDischarge}>
                    <LogOut size={16} /> Approve Discharge
                  </Button>
                  <Button variant="secondary" size="lg" onClick={handlePrint}>
                    <Printer size={16} /> {printStatus ? 'Printed' : 'Print Summary'}
                  </Button>
                </div>
              </div>
            </Card>
          </div>}
        </div>
      )}
    </div>
  )
}
