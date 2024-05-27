package com.hostel_mng_sys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hostel_mng_sys.login.entity.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

}
