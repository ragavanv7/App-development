package com.mission.naveen.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mission.naveen.Model.User;

public interface UserRepository extends JpaRepository<User,String>{
    
}
