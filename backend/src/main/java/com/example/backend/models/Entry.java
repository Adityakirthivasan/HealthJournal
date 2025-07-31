package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "entry")
public class Entry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private String date;

    @Column(name = "is_public")
    @JsonProperty("isPublic")
    private boolean publicEntry;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    @JsonProperty("isPublic")
    public boolean isPublicEntry() {
        return publicEntry;
    }
    @JsonProperty("isPublic")
    public void setPublicEntry(boolean publicEntry) {
        this.publicEntry = publicEntry;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
