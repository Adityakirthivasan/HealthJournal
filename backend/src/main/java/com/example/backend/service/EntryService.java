package com.example.backend.service;

import com.example.backend.models.Entry;
import com.example.backend.models.User;
import com.example.backend.repo.EntryRepo;
import com.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryService {

    @Autowired
    private EntryRepo entryRepo;

    @Autowired
    private UserRepo userRepo;

    public Entry addEntry(Entry entry, Authentication auth) {
        User user = userRepo.findByUsername(auth.getName()).orElseThrow();
        entry.setUser(user);
        return entryRepo.save(entry);
    }

    public List<Entry> getUserEntries(Authentication auth) {
        User user = userRepo.findByUsername(auth.getName()).orElseThrow();
        return entryRepo.findByUser(user);
    }

    public List<Entry> getPublicEntries() {
        return entryRepo.findByPublicEntryTrue();
    }

    public Entry updateEntry(Long id, Entry updated, Authentication auth) {
        Entry entry = entryRepo.findById(id).orElseThrow();
        if (!entry.getUser().getUsername().equals(auth.getName())) {
            throw new RuntimeException("Not authorized");
        }
        entry.setTitle(updated.getTitle());
        entry.setContent(updated.getContent());
        entry.setDate(updated.getDate());
        entry.setPublicEntry(updated.isPublicEntry());
        return entryRepo.save(entry);
    }

    public String deleteEntry(Long id, Authentication auth) {
        Entry entry = entryRepo.findById(id).orElseThrow();
        if (!entry.getUser().getUsername().equals(auth.getName())) {
            throw new RuntimeException("Not authorized");
        }
        entryRepo.delete(entry);
        return "Entry deleted successfully";
    }
}
