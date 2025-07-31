package com.example.backend.controllers;

import com.example.backend.models.Entry;
import com.example.backend.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/entries")
public class EntryController {

    @Autowired
    private EntryService entryService;

    @PostMapping
    public Entry addEntry(@RequestBody Entry entry, Authentication auth) {
        return entryService.addEntry(entry, auth);
    }

    @GetMapping
    public List<Entry> getMyEntries(Authentication auth) {
        return entryService.getUserEntries(auth);
    }

    @GetMapping("/public")
    public List<Entry> getPublicEntries() {
        return entryService.getPublicEntries();
    }

    @PutMapping("/{id}")
    public Entry updateEntry(@PathVariable Long id, @RequestBody Entry updated, Authentication auth) {
        return entryService.updateEntry(id, updated, auth);
    }

    @DeleteMapping("/{id}")
    public String deleteEntry(@PathVariable Long id, Authentication auth) {
        return entryService.deleteEntry(id, auth);
    }
}
