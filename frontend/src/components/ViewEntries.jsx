import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewEntries = () => {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    content: "",
    date: "",
    isPublic: false,
  });

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("https://healthjournal-1.onrender.com/entries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries(response.data);
      setFilteredEntries(response.data);
    } catch (err) {
      console.error("Error fetching entries:", err);
      alert("Session expired. Please login again.");
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);
    if (selectedDate === "") {
      setFilteredEntries(entries);
    } else {
      const filtered = entries.filter((entry) => entry.date === selectedDate);
      setFilteredEntries(filtered);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
              await axios.delete(`https://healthjournal-1.onrender.com/entries/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const updated = entries.filter((e) => e.id !== id);
      setEntries(updated);
      setFilteredEntries(
        filterDate ? updated.filter((e) => e.date === filterDate) : updated
      );
    } catch (err) {
      alert("Delete failed");
    }
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setEditForm({
      title: entry.title || "",
      content: entry.content || "",
      date: entry.date || "",
      isPublic: !!entry.isPublic,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({
      title: "",
      content: "",
      date: "",
      isPublic: false,
    });
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm({ ...editForm, [name]: type === "checkbox" ? checked : value });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    try {
              await axios.put(`https://healthjournal-1.onrender.com/entries/${editingId}`, editForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEntries();
      cancelEdit();
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="page-container">
      <h2>Your Symptom Entries</h2>

      <div className="input-group">
        <label>Filter by Date:</label>
        <input
          type="date"
          value={filterDate}
          onChange={handleDateChange}
          style={{ marginBottom: "10px" }}
        />
      </div>

      {filteredEntries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <ul>
          {filteredEntries.map((entry) => (
            <li key={entry.id}>
              {editingId === entry.id ? (
                <div>
                  <input
                    type="date"
                    name="date"
                    value={editForm.date || ""}
                    onChange={handleEditChange}
                  />
                  <input
                    type="text"
                    name="title"
                    value={editForm.title || ""}
                    onChange={handleEditChange}
                    placeholder="Symptom"
                  />
                  <textarea
                    name="content"
                    value={editForm.content || ""}
                    onChange={handleEditChange}
                    placeholder="Notes"
                  />
                  <label>
                    <input
                      type="checkbox"
                      name="isPublic"
                      checked={!!editForm.isPublic}
                      onChange={handleEditChange}
                    />
                    Public
                  </label>
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              ) : (
                <div>
                  <strong>Date:</strong> {entry.date} <br />
                  <strong>Symptom:</strong> {entry.title} <br />
                  <strong>Notes:</strong> {entry.content} <br />
                  <strong>Visibility:</strong>{" "}
                  {entry.isPublic ? "Public" : "Private"} <br />
                  <button onClick={() => startEdit(entry)}>Edit</button>
                  <button onClick={() => handleDelete(entry.id)}>Delete</button>
                  <hr />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewEntries;
