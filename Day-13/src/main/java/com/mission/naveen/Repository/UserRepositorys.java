package com.mission.naveen.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mission.naveen.Model.User;

public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByEmail(String email);
}
