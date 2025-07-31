package com.example.backend.controllers;

import com.example.backend.dto.UserDetailsDto;
import com.example.backend.jwt.JwtTokenProvider;
import com.example.backend.models.Role;
import com.example.backend.models.User;
import com.example.backend.repo.RoleRepo;
import com.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> user) throws Exception {
        String username = user.get("username");
        String password = user.get("password");

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            String token = jwtTokenProvider.generateToken(authentication);
            return ResponseEntity.ok(Collections.singletonMap("token", token));

        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDetailsDto userDto) {
        if (userRepo.findByUsername(userDto.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Username already exists"));
        }

        List<Role> roles = new ArrayList<>();
        for (String roleName : userDto.getRoleNames()) {
            Role role = roleRepo.findByName(roleName).orElseGet(() -> roleRepo.save(new Role(roleName)));
            roles.add(role);
        }

        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setEmail(userDto.getEmail());
        user.setName(userDto.getName());
        user.setRoles(roles);

        userRepo.save(user);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDto.getUsername(), userDto.getPassword())
        );
        String token = jwtTokenProvider.generateToken(authentication);

        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }
}
