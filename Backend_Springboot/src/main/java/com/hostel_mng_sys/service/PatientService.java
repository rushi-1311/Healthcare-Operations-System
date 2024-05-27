package com.hostel_mng_sys.service;

import java.util.List;

import com.hostel_mng_sys.entity.Patient;

public interface PatientService {

	public Patient createPatient (Patient patient);
	public List<Patient> getAllPatients();
public void deletePatient(Long id);
public Patient updatePatient(Long id, Patient patient);
public Patient getPatientById(Long id);
}
