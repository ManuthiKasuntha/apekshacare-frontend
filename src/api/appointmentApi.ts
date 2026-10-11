import type { Appointment, AppointmentInput } from '../types/appointment';

const BASE_URL = 'http://localhost:8081/api/v1/appointments';

// Fetches all appointments from the backend.
export async function getAppointments(): Promise<Appointment[]> {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch appointments');
  }

  return response.json();
}

// Sends a new appointment to the backend.
export async function createAppointment(
  appointment: AppointmentInput
): Promise<Appointment> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointment),
  });

  if (!response.ok) {
    throw new Error('Failed to create appointment');
  }

  return response.json();
}

// Updates an existing appointment by id.
export async function updateAppointment(
  id: number,
  appointment: AppointmentInput
): Promise<Appointment> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointment),
  });

  if (!response.ok) {
    throw new Error('Failed to update appointment');
  }

  return response.json();
}

// Deletes an appointment by id.
export async function deleteAppointment(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete appointment');
  }
}