package com.missionpossible.ragavan.controller;


	

	import java.util.List;

	

	import org.springframework.beans.factory.annotation.Autowired;



	import org.springframework.web.bind.annotation.DeleteMapping;

	import org.springframework.web.bind.annotation.GetMapping;



	import org.springframework.web.bind.annotation.PostMapping;

	import org.springframework.web.bind.annotation.PutMapping;

	import org.springframework.web.bind.annotation.RequestBody;

	import org.springframework.web.bind.annotation.RequestMapping;

	import org.springframework.web.bind.annotation.RequestParam;

	import org.springframework.web.bind.annotation.RestController;

import com.missionpossible.ragavan.model.*;
import com.missionpossible.ragavan.repository.ContactRepository;

	@RequestMapping("/api/apply")

	@RestController
	public class ContactController {

	@Autowired

	ContactRepository repo ;

	@PostMapping("/add")
	

	public Contact save(@RequestBody Contact emp)

	{

	return repo.save(emp) ;

	}

	@GetMapping("/get")

	public List<Contact> get(Contact emp)

	{

		return repo.findAll() ;

	}

	@PutMapping("update")

	public Contact update(@RequestBody Contact emp)

	{
		return repo.saveAndFlush(emp) ;
	}
	
	@DeleteMapping("/delete")

	public String delete(@RequestParam long id)

	{
		repo.deleteById(id) ;
		return "DELETED SUCCESSFULLY" ;
	}
	

	

	}