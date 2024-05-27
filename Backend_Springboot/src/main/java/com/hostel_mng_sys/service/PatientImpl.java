package com.hostel_mng_sys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hostel_mng_sys.entity.Patient;
import com.hostel_mng_sys.repository.PatientRepository;

@Service
public class PatientImpl implements PatientService {
	@Autowired
	private PatientRepository patrepo;

	@Override
	public Patient createPatient(Patient patient) {
		
		return patrepo.save(patient);
	}

	@Override
	public List<Patient> getAllPatients() {
		
		return patrepo.findAll();
	}

	@Override
	public void deletePatient(Long id) {
		patrepo.deleteById(id);
		
	}

	@Override
	public Patient updatePatient(Long id , Patient patient) {
		Patient old = patrepo.findById(id).orElseThrow(()-> new RuntimeException("Patient not found"));
		old.setName(patient.getName());
		old.setAge(patient.getAge());
		old.setBlood(patient.getBlood());
		old.setDose(patient.getDose());
		old.setEmergency(patient.getEmergency());
		old.setFees(patient.getFees());
		old.setPrescription(patient.getPrescription());
		return patrepo.save(old);
	}

	@Override
	public Patient getPatientById(Long id) {
		return patrepo.findById(id).orElseThrow(()-> new RuntimeException("No patient found with this id"));
	}

	
}
