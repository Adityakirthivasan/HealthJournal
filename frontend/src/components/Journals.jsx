import React, { useEffect, useState } from "react";
import axios from "axios";

const Journals = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/entries/public")
      .then((res) => setEntries(res.data))
      .catch((err) => console.error("Failed to fetch", err));
  }, []);

  return (
    <div className="page-container">
      <h2>Public Symptom Entries</h2>
      {entries.length === 0 ? (
        <p>No public entries available.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <strong>Date:</strong> {entry.date}<br />
              <strong>Symptom:</strong> {entry.title}<br />
              <strong>Notes:</strong> {entry.content}<br />
              <strong>Posted by:</strong> {entry.user?.username || "Anonymous"}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Journals;
