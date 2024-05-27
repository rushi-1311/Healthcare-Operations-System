package com.hostel_mng_sys.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.hostel_mng_sys.entity.Patient;
import com.hostel_mng_sys.login.entity.Appointment;
import com.hostel_mng_sys.login.entity.Medicine;
import com.hostel_mng_sys.service.AppointmentImpl;
import com.hostel_mng_sys.service.MedicineImpl;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MedicineController {
	@Autowired
	private MedicineImpl medimpl;
	
	@PostMapping ("/medicine")
	public ResponseEntity<Medicine> createAppointment(@RequestBody Medicine med)
	{
		Medicine medicine = medimpl.createMedicine(med);
		return new ResponseEntity<>(medicine, HttpStatus.OK);
}
	@GetMapping("/allmedicines")
	public ResponseEntity<List<Medicine>> getAllMedicines()
	{
		List medicine = medimpl.getAllMedicines();
		return new ResponseEntity<List<Medicine>> (medicine, HttpStatus.OK);
		}
	
	@GetMapping("/getmedicine/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id)
	{
		Medicine medicine = medimpl.getMedById(id);
		return new ResponseEntity<Medicine>(medicine, HttpStatus.OK) ;	
	}
	
	@PutMapping("/updatemed/{id}")
	public ResponseEntity<Medicine> updateMedById(@PathVariable Long id , @RequestBody Medicine med)
	{
		Medicine medicine = medimpl.updateMedicine(id,med);
		return new ResponseEntity<>(medicine, HttpStatus.OK);
	}
	@DeleteMapping("/delmedicine/{id}")
	public ResponseEntity<Medicine> deleteMedicine(@PathVariable Long id)
	{
		medimpl.deleteMedicine(id);
		return new ResponseEntity<Medicine>(HttpStatus.OK);
	}
	
}