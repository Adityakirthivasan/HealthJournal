package com.example.backend.controllers;

import com.example.backend.models.User;
import com.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private UserRepo userRepo;

    @GetMapping
    public User getProfile(Principal principal) {
        return userRepo.findByUsername(principal.getName()).orElse(null);
    }
}
