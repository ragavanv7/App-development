package com.missionpossible.ragavan.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;





import org.springframework.stereotype.Repository;

import com.missionpossible.ragavan.model.*;



@Repository

public interface ContactRepository extends JpaRepository<Contact, Long>{
	
	


}