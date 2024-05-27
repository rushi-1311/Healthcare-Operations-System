package com.hostel_mng_sys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hostel_mng_sys.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{

}
