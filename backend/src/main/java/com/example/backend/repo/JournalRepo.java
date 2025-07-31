//package com.example.backend.repo;
//
//import com.example.backend.models.Journal;
//import com.example.backend.models.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
//public interface JournalRepo extends JpaRepository<Journal, Long> {
//    List<Journal> findByUser(User user);
//    List<Journal> findByIsPublicTrue();
//}
