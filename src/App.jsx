import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import Navbar from "./components/Navbar";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
