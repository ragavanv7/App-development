package com.crudoperation.crudOperations.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudoperation.crudOperations.Entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long>{

	   
}
