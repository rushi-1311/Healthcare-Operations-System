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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hostel_mng_sys.entity.Patient;
import com.hostel_mng_sys.service.PatientImpl;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PatientController {
@Autowired
private PatientImpl patimpl;

@PostMapping("/create")
public ResponseEntity<Patient> createPatient (@RequestBody Patient pat)
{
	Patient patient = patimpl.createPatient(pat) ;
	return new ResponseEntity(patient, HttpStatus.CREATED);
	}

@GetMapping("/allpatients")
public ResponseEntity<List<Patient>> getAllPatients()
{
	List patients = patimpl.getAllPatients();
	return new ResponseEntity<List<Patient>> (patients, HttpStatus.OK);
	}
@GetMapping("/getpatient/{id}")
public ResponseEntity<Patient> getPatientById(@PathVariable Long id)
{
	Patient patient = patimpl.getPatientById(id);
	return new  ResponseEntity<Patient> (patient , HttpStatus.OK);
	}
@DeleteMapping("/delpatient/{id}")
public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable Long id)
{
	patimpl.deletePatient(id);
	return new ResponseEntity<>(HttpStatus.OK);
}
@PutMapping ("/updatepat/{id}")
public ResponseEntity<Patient> deletePatientById(@PathVariable Long id, @RequestBody Patient patient)
{
	Patient details = patimpl.updatePatient(id, patient);
	return new ResponseEntity<Patient>(details, HttpStatus.OK) ; 
	}

}