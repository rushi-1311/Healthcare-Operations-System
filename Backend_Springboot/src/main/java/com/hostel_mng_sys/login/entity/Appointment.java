package com.hostel_mng_sys.login.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "Appointment_Details")
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id ;
	private String name ;
	private String age;
	private String symptoms;
	private String number ;
	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appointment(long id, String name, String age, String symptoms, String number) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.symptoms = symptoms;
		this.number = number;
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
	public String getSymptoms() {
		return symptoms;
	}
	public String getNumber() {
		return number;
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
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	
	@Override
	public String toString() {
		return "Appointment [id=" + id + ", name=" + name + ", age=" + age + ", symptoms=" + symptoms + ", number="
				+ number + "]";
	}
	
}
