import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to view your profile.");
      return;
    }

    axios
      .get("http://localhost:8080/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch profile");
      });
  }, []);

  if (!user) return <div className="page-container">Loading...</div>;

  return (
    <div className="page-container">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
    </div>
  );
};

export default Profile;
