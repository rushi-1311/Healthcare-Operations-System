package com.hostel_mng_sys.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hostel_mng_sys.login.entity.Medicine;


public interface MedicineService{

	public Medicine createMedicine(Medicine medicine);
	public List<Medicine> getAllMedicines();
	public Medicine getMedById(Long id);
	public Medicine updateMedicine(Long id , Medicine med);
	public void deleteMedicine(Long id);
}
