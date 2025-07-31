import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Journals from "./components/Journals";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import AddEntry from "./components/AddEntry";
import ViewEntries from "./components/ViewEntries";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addentry" element={<AddEntry />} />
        <Route path="/entries" element={<ViewEntries />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
