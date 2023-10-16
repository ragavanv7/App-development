package com.missionpossible.ragavan.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_bookingcustomer")

public class ApplyPolicy {
	
	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	

	@Column(length = 50, nullable = false)

	private String fullname;
	
	@Column(length = 50, nullable = false)

	private int age;
	
	@Column(length = 50, nullable = false)

	private String gender;
	
	@Column(length = 50, nullable = false)

	private String email;
	
	@Column(length = 50, nullable = false)

	private String phone;

	public ApplyPolicy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ApplyPolicy(int id, String fullname, int age, String gender, String email, String phone) {
		super();
		this.id = id;
		this.fullname = fullname;
		this.age = age;
		this.gender = gender;
		this.email = email;
		this.phone = phone;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	
	
	
	
	
}
