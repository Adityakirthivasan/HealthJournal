import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("https://healthjournal-1.onrender.com/api/auth/login", {
        username,
        password,
      });

      const token = res.data.token;
      console.log("Token received:", token);
      localStorage.setItem("token", token);
      alert("Login Success");
      navigate("/addentry");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="page-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "15px", textAlign: "center" }}>
        New user? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
