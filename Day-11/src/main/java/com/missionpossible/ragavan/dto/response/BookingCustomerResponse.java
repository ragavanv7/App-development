package com.missionpossible.ragavan.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingCustomerResponse {
	private String fullname;
	private int age;
	private String gender;
	private String email;
	private String phone;
	private String address;
	private String service;
	private String country;
	private String state;

}

