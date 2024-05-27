package com.hostel_mng_sys.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "Patient_Details")
public class Patient {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id ;
@Column(name = "p_name")
private String name ;
@Column(name = "p_age")
private String age;
@Column(name = "p_blood_group")
private String blood;
@Column(name = "p_prescription")
private String prescription;
@Column(name = "p_dose")
private String dose;
@Column(name = "p_fees")
private String fees;
@Column(name = "p_emergency")
private String emergency;
public Patient() {
	super();
	// TODO Auto-generated constructor stub
}
public Patient(long id, String name, String age, String blood, String prescription, String dose, String fees,
		String emergency) {
	super();
	this.id = id;
	this.name = name;
	this.age = age;
	this.blood = blood;
	this.prescription = prescription;
	this.dose = dose;
	this.fees = fees;
	this.emergency = emergency;
}
public long getId() {
	return id;
}
public String getName() {
	return name;
}
public String getAge() {
	return age;
}
public String getBlood() {
	return blood;
}
public String getPrescription() {
	return prescription;
}
public String getDose() {
	return dose;
}
public String getFees() {
	return fees;
}
public String getEmergency() {
	return emergency;
}
public void setId(long id) {
	this.id = id;
}
public void setName(String name) {
	this.name = name;
}
public void setAge(String age) {
	this.age = age;
}
public void setBlood(String blood) {
	this.blood = blood;
}
public void setPrescription(String prescription) {
	this.prescription = prescription;
}
public void setDose(String dose) {
	this.dose = dose;
}
public void setFees(String fees) {
	this.fees = fees;
}
public void setEmergency(String emergency) {
	this.emergency = emergency;
}
@Override
public String toString() {
	return "Patient [id=" + id + ", name=" + name + ", age=" + age + ", blood=" + blood + ", prescription="
			+ prescription + ", dose=" + dose + ", fees=" + fees + ", emergency=" + emergency + "]";
}




}
