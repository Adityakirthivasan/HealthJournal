//package com.example.backend.service;
//
//import com.example.backend.models.Journal;
//import com.example.backend.models.User;
//import com.example.backend.repo.JournalRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class JournalService {
//
//    @Autowired
//    private JournalRepo journalRepo;
//
//    public Journal saveJournal(Journal journal) {
//        return journalRepo.save(journal);
//    }
//
//    public List<Journal> getUserJournals(User user) {
//        return journalRepo.findByUser(user);
//    }
//
//    public List<Journal> getPublicJournals() {
//        return journalRepo.findByIsPublicTrue();
//    }
//}
