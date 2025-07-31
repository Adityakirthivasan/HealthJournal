//package com.example.backend.controllers;
//
//import com.example.backend.models.Journal;
//import com.example.backend.models.User;
//import com.example.backend.repo.UserRepo;
//import com.example.backend.service.JournalService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/journals")
//public class JournalController {
//
//    @Autowired
//    private JournalService journalService;
//
//    @Autowired
//    private UserRepo userRepo;
//
//    @PostMapping("/add/{username}")
//    public Journal addJournal(@PathVariable String username, @RequestBody Journal journal) {
//        User user = userRepo.findByUsername(username).orElse(null);
//        journal.setUser(user);
//        return journalService.saveJournal(journal);
//    }
//
//    @GetMapping("/user/{username}")
//    public List<Journal> getUserJournals(@PathVariable String username) {
//        User user = userRepo.findByUsername(username).orElse(null);
//        return journalService.getUserJournals(user);
//    }
//
//    @GetMapping("/public")
//    public List<Journal> getPublicJournals() {
//        return journalService.getPublicJournals();
//    }
//}
