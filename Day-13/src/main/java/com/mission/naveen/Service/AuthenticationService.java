package com.mission.naveen.Service;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mission.naveen.Model.User;
import com.mission.naveen.Model.enumerate.Role;
import com.mission.naveen.Repository.UserRepositorys;
import com.mission.naveen.dto.request.AuthenticationRequest;
import com.mission.naveen.dto.request.RegisterRequest;
import com.mission.naveen.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepositorys repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
	 private final AuthenticationManager authenticationManager;
	public AuthenticationResponse register(RegisterRequest request) {
			
	    var user = User.builder()
	            .username(request.getFirstname())
	            .email(request.getEmail())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .role(Role.USER)
	            .build();
	    repository.save(user);
	    var jwtToken = jwtservice.generateToken(user);
	    
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
				request.getEmail(),
				request.getPassword()
				)
				);
				var user = repository.findByEmail(request.getEmail())
						.orElseThrow();
				 var jwtToken = jwtservice.generateToken(user);
				    
					return AuthenticationResponse.builder()
							.token(jwtToken)
							.build();
	}
	
	
	

}