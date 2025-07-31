package com.example.backend.dto;

import java.util.List;

public class UserDetailsDto {
    private String username;
    private String password;
    private String email;
    private String name;
    private List<String> roleNames;


    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public List<String> getRoleNames() {
        return roleNames;
    }
    public void setRoleNames(List<String> roleNames) {
        this.roleNames = roleNames;
    }
}
