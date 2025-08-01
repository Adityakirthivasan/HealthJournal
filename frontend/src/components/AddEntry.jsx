import React, { useState } from "react";
import axios from "axios";

const AddEntry = () => {
  const [entry, setEntry] = useState({
    title: "",
    content: "",
    date: "",
    isPublic: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to add entries.");
      return;
    }

    try {
      const response = await axios.post("https://healthjournal-1.onrender.com/entries", entry, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      alert("Entry added successfully!");

      
      setEntry({
        title: "",
        content: "",
        date: "",
        isPublic: false,
      });
    } catch (err) {
      console.error("Error adding entry:", err);
      alert("Failed to add entry.");
    }
  };

  return (
    <div className="page-container">
      <h2>Add Symptom Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={entry.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Symptom:</label>
          <input
            type="text"
            name="title"
            value={entry.title}
            onChange={handleChange}
            placeholder="Eg: Headache"
            required
          />
        </div>

        <div className="input-group">
          <label>Notes:</label>
          <textarea
            name="content"
            value={entry.content}
            onChange={handleChange}
            placeholder="Add any notes here"
            required
          />
        </div>

        <div className="input-group">
          <label>
            <input
              type="checkbox"
              name="isPublic"
              checked={entry.isPublic}
              onChange={handleChange}
            />
            Make this entry public
          </label>
        </div>

        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default AddEntry;
