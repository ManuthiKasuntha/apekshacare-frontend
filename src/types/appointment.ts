// Mirrors the appointment status values defined by the backend API.
export type AppointmentStatus =
  | 'SCHEDULED'
  | 'COMPLETED'
  | 'CANCELLED';

// Mirrors the appointment type values defined by the backend API.
export type AppointmentType =
  | 'ONCOLOGY_CONSULTATION'
  | 'CHEMOTHERAPY'
  | 'RADIOTHERAPY'
  | 'BLOOD_TEST'
  | 'IMAGING'
  | 'FOLLOW_UP'
  | 'COUNSELING';

// Represents a complete appointment returned by the backend.
export interface Appointment {
  id: number;
  patientName: string;
  patientReference: string;
  appointmentType: AppointmentType;
  appointmentDate: string;
  appointmentTime: string;
  department: string;
  status: AppointmentStatus;
}

// The backend generates the id, so it is excluded from request data.
export type AppointmentInput = Omit<Appointment, 'id'>;