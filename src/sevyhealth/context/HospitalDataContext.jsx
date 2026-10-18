import { createContext, useContext, useEffect, useState } from 'react'
import { mockBeds, mockIPDPatients, mockPatients } from '../data/mockData'

const HospitalDataContext = createContext(null)
const STORAGE_KEY = 'sevysisHospitalData'

function loadHospitalData() {
  if (typeof window === 'undefined') {
    return { patients: mockPatients, ipdPatients: mockIPDPatients, beds: mockBeds }
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (!saved) return { patients: mockPatients, ipdPatients: mockIPDPatients, beds: mockBeds }

  try {
    const parsed = JSON.parse(saved)
    if (Array.isArray(parsed.patients) && Array.isArray(parsed.ipdPatients) && Array.isArray(parsed.beds)) {
      return parsed
    }
    throw new Error('Saved hospital data has an invalid format.')
  } catch (error) {
    console.error('Unable to load saved hospital data.', error)
    return { patients: mockPatients, ipdPatients: mockIPDPatients, beds: mockBeds }
  }
}

function getBedPrefix(ward) {
  return ward === 'General' ? 'G' : ward === 'Semi-Private' ? 'S' : ward === 'Private' ? 'P' : 'ICU'
}

export function getAvailableBedNumbers(ward, beds, ipdPatients) {
  const selectedWard = beds.find(bed => bed.ward === ward)
  if (!selectedWard || selectedWard.available < 1) return []

  const usedBeds = new Set(
    ipdPatients.filter(patient => patient.ward === ward).map(patient => patient.bed)
  )
  const firstAvailableNumber = selectedWard.total - selectedWard.available + 1
  const prefix = getBedPrefix(ward)

  return Array.from({ length: selectedWard.available }, (_, index) => `${prefix}-${firstAvailableNumber + index}`)
    .filter(bedNumber => !usedBeds.has(bedNumber))
}

export function HospitalDataProvider({ children }) {
  const [data, setData] = useState(loadHospitalData)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
      console.error('Unable to save hospital data.', error)
    }
  }, [data])

  function admitPatient(details) {
    const bedsAvailable = getAvailableBedNumbers(details.ward, data.beds, data.ipdPatients)
    if (!bedsAvailable.length) {
      throw new Error(`No beds are currently available in the ${details.ward} ward.`)
    }

    const bed = details.bedMode === 'Manual' ? details.bed : bedsAvailable[0]
    if (!bedsAvailable.includes(bed)) {
      throw new Error('The selected bed is no longer available. Choose another bed.')
    }

    const nextId = data.patients.length + 1
    const id = `PT-${new Date().getFullYear()}-${String(nextId).padStart(3, '0')}`
    const doctorName = details.doctor.name
    const admittedOn = new Date().toISOString().slice(0, 10)
    const patient = {
      id,
      name: details.name.trim(),
      age: Number(details.age),
      gender: details.gender,
      contact: details.contact.trim(),
      ward: details.ward,
      bed,
      status: 'IPD',
      doctor: doctorName,
      admitDate: admittedOn,
    }
    const inpatient = {
      id,
      name: patient.name,
      ward: patient.ward,
      bed,
      admitDate: admittedOn,
      doctor: doctorName,
      condition: details.admissionType === 'Emergency' ? 'Critical' : 'Stable',
      days: 1,
      diagnosis: details.admissionType === 'Emergency' ? 'Emergency admission' : 'New admission',
    }

    setData(current => ({
      patients: [...current.patients, patient],
      ipdPatients: [...current.ipdPatients, inpatient],
      beds: current.beds.map(ward =>
        ward.ward === details.ward
          ? { ...ward, occupied: ward.occupied + 1, available: ward.available - 1 }
          : ward
      ),
    }))

    return { patient, inpatient }
  }

  function addPatient(patient) {
    const nextId = data.patients.length + 1
    const newPatient = {
      ...patient,
      id: patient.id ?? `PT-${new Date().getFullYear()}-${String(nextId).padStart(3, '0')}`,
    }
    setData(current => ({ ...current, patients: [newPatient, ...current.patients] }))
    return newPatient
  }

  function dischargePatient(patientId) {
    const patient = data.ipdPatients.find(item => item.id === patientId)
    if (!patient) throw new Error('This patient is no longer in the inpatient list.')

    setData(current => ({
      patients: current.patients.map(item =>
        item.id === patientId ? { ...item, status: 'Discharged', ward: '—', bed: '—' } : item
      ),
      ipdPatients: current.ipdPatients.filter(item => item.id !== patientId),
      beds: current.beds.map(ward =>
        ward.ward === patient.ward
          ? { ...ward, occupied: Math.max(0, ward.occupied - 1), available: Math.min(ward.total, ward.available + 1) }
          : ward
      ),
    }))
  }

  return (
    <HospitalDataContext.Provider
      value={{
        ...data,
        setBeds: nextBeds => setData(current => ({
          ...current,
          beds: typeof nextBeds === 'function' ? nextBeds(current.beds) : nextBeds,
        })),
        addPatient,
        admitPatient,
        dischargePatient,
      }}
    >
      {children}
    </HospitalDataContext.Provider>
  )
}

export function useHospitalData() {
  const context = useContext(HospitalDataContext)
  if (!context) throw new Error('useHospitalData must be used inside HospitalDataProvider.')
  return context
}
