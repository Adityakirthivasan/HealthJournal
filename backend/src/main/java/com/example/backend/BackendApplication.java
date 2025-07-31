package com.example.backend;

import com.example.backend.models.Role;
import com.example.backend.repo.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private RoleRepo roleRepo;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		if (!roleRepo.findByName("ROLE_USER").isPresent()) {
			Role role = new Role();
			role.setName("ROLE_USER");
			roleRepo.save(role);
		}
	}
}
