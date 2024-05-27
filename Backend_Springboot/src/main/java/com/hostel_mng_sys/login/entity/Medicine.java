package com.hostel_mng_sys.login.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "Medicine_Details")
public class Medicine {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id ;
	@Override
	public String toString() {
		return "Medicine [id=" + id + ", drugName=" + drugName + ", stock=" + stock + "]";
	}
	public long getId() {
		return id;
	}
	public String getDrugName() {
		return drugName;
	}
	public String getStock() {
		return stock;
	}
	public void setId(long id) {
		this.id = id;
	}
	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}
	public void setStock(String stock) {
		this.stock = stock;
	}
	public Medicine(long id, String drugName, String stock) {
		super();
		this.id = id;
		this.drugName = drugName;
		this.stock = stock;
	}
	public Medicine() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String drugName;
	private String stock;
}
