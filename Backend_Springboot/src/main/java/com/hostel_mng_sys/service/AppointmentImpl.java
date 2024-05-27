package com.hostel_mng_sys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostel_mng_sys.login.entity.Appointment;
import com.hostel_mng_sys.repository.AppointmentRepository;

@Service
public class AppointmentImpl implements AppointmentService {

	@Autowired
	AppointmentRepository apprepo;
	@Override
	public Appointment createAppointment(Appointment appointment) {
		
		return apprepo.save(appointment);
	}
	@Override
	public List<Appointment> getAllAppointments() {
		// TODO Auto-generated method stub
		return apprepo.findAll();
	}
	@Override
	public void deleteAppointment(Long id) {
		apprepo.deleteById(id);
		
	}

}
