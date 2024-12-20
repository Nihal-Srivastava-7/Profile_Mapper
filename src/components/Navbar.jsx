import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleOpenPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPassword("");
    setErrorMessage("");
  };

  const handlePasswordSubmit = () => {
    const correctPassword = "NIHAL123"; // Correct password
    if (password === correctPassword) {
      setShowPasswordModal(false);
      navigate("/admin"); // Redirect to Admin Panel
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-person-circle me-2"></i>Profile Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* Trigger Password Modal */}
              <span
                className="nav-link cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={handleOpenPasswordModal}
              >
                Admin Panel
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Password Modal */}
      <Modal show={showPasswordModal} onHide={handleClosePasswordModal}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Panel Access</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyPress} // Allow Enter key submission
                autoFocus
              />
            </Form.Group>
            {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePasswordModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Navbar;
