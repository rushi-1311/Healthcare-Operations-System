package com.hostel_mng_sys.service;

import java.util.List;

import javax.management.AttributeNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.hostel_mng_sys.login.entity.Medicine;
import com.hostel_mng_sys.repository.MedicineRepository;


@Service
public class MedicineImpl implements MedicineService{

	@Autowired
	private MedicineRepository medrepo;

	@Override
	public Medicine createMedicine(Medicine medicine) {
		// TODO Auto-generated method stub
		return medrepo.save(medicine);
	}

	@Override
	public List<Medicine> getAllMedicines() {
		// TODO Auto-generated method stub
		return medrepo.findAll();
	}

	@Override
	public Medicine getMedById(Long id) {
	return medrepo.findById(id).orElseThrow(()-> new RuntimeException("Not Found this id"));
	
	}

	@Override
	public Medicine updateMedicine(Long id, Medicine med) {
		Medicine old = medrepo.findById(id).orElseThrow(()-> new RuntimeException("Product not found"));
		if (old != null)
		{
			old.setDrugName(med.getDrugName());
			old.setStock(med.getStock());
		}
		return medrepo.save(old);
	}

	@Override
	public void deleteMedicine(Long id) {	
		medrepo.deleteById(id);	
	}
}
