package com.missionpossible.ragavan.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ApplyPolicyRequest {
	private String fullname;
	private int age;
	private String gender;
	private String email;
	private String phone;
	

}
