package com.hostel_mng_sys.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hostel_mng_sys.login.entity.Appointment;
import com.hostel_mng_sys.login.entity.Medicine;
import com.hostel_mng_sys.service.AppointmentImpl;
@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AppointmentController {

	@Autowired
	private AppointmentImpl appimpl;
	
	@PostMapping ("/appointment")
	public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appt)
	{
		Appointment appointment = appimpl.createAppointment(appt);
		return new ResponseEntity<Appointment>(appointment, HttpStatus.OK);
	}
	
	@GetMapping("/allappointments")
	public ResponseEntity<List<Appointment>> getAllAppointments()
	{
		List appointments = appimpl.getAllAppointments();
		return new ResponseEntity<List<Appointment>> (appointments, HttpStatus.OK);
		}
	
	@DeleteMapping("/delappt/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable Long id)
	{
		appimpl.deleteAppointment(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
