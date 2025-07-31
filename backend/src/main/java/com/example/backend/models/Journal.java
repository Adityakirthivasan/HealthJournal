//package com.example.backend.models;
//
//import jakarta.persistence.*;
//
//@Entity
//public class Journal {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String symptom;
//
//    @Column(columnDefinition = "TEXT")
//    private String notes;
//
//    private String date;
//
//    private boolean isPublic;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getSymptom() {
//        return symptom;
//    }
//
//    public void setSymptom(String symptom) {
//        this.symptom = symptom;
//    }
//
//    public String getNotes() {
//        return notes;
//    }
//
//    public void setNotes(String notes) {
//        this.notes = notes;
//    }
//
//    public String getDate() {
//        return date;
//    }
//
//    public void setDate(String date) {
//        this.date = date;
//    }
//
//    public boolean isPublic() {
//        return isPublic;
//    }
//
//    public void setPublic(boolean aPublic) {
//        isPublic = aPublic;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//}
