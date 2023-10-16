package com.missionpossible.ragavan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.missionpossible.ragavan.model.ApplyPolicy;
import com.missionpossible.ragavan.repository.ApplyPolicyRepository;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin
public class ApplyPolicyController {
	@Autowired
	private ApplyPolicyRepository bookingRepository;
	
	@PostMapping("/add")
	public ApplyPolicy add(final @RequestBody ApplyPolicy user)
	{
		return bookingRepository.save(user) ;
		
	}
	@GetMapping("/get")
	public List<ApplyPolicy> getAllStudent()
	{
		return bookingRepository.findAll() ;
	}
	@GetMapping("/gets/{id}")
	public ApplyPolicy getAllStudents(@PathVariable int id)
	{
		return bookingRepository.findById(id).orElse(null) ;
	}
	@PutMapping("/put/{id}")
	ApplyPolicy update(@RequestBody ApplyPolicy apply, @PathVariable int id)
	{
		return bookingRepository.findById(id)
				.map(user->{
					user.setId(apply.getId());
					user.setFullname(apply.getFullname());
					user.setAge(apply.getAge());
					user.setGender(apply.getGender());
					user.setEmail(apply.getEmail());
					user.setPhone(apply.getPhone());
	
					return bookingRepository.save(apply);
				})
	            .orElse(null);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		bookingRepository.deleteById(id) ;
		return "Deleted Successfully" ;
	}
	
	
}
