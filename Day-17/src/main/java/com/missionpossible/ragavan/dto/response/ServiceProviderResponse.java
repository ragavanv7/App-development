package com.missionpossible.ragavan.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceProviderResponse {
	
	private int spid;
	private String provider_name;
	private String provider_age;
	private String provider_address;
	private String provider_emailid;
	private String provider_phoneno;
	private String provider_service;
	private String provider_type;

}
