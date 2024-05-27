package com.hostel_mng_sys.service;

import java.util.List;

import com.hostel_mng_sys.login.entity.Appointment;

public interface AppointmentService {

	public Appointment createAppointment (Appointment appointment);
	public List<Appointment> getAllAppointments();
	public void deleteAppointment(Long id);
}
