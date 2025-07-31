package com.example.backend.repo;

import com.example.backend.models.Entry;
import com.example.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EntryRepo extends JpaRepository<Entry, Long> {
    List<Entry> findByUser(User user);
    List<Entry> findByPublicEntryTrue();
}
