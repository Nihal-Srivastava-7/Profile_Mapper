import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MapComponent from "./MapComponent";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div
      className="card border-0 shadow-sm mb-4"
      style={{ borderRadius: "15px", overflow: "hidden" }}
    >
      <img
        src={profile.photo || "https://via.placeholder.com/150"}
        alt={profile.name || "Profile"}
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          border: "3px solid #0d6efd",
        }}
      />
      <div className="card-body text-center">
        <h5 className="fw-bold">{profile.name || "No Name"}</h5>
        <p className="text-muted">{profile.description || "No Description"}</p>
        <button
          className="btn btn-outline-primary btn-sm me-2"
          onClick={() => navigate(`/profile/${profile.id}`)}
        >
          View on Map
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setShowSummary(true)}
        >
          Summary
        </button>
      </div>

      {/* Summary Modal */}
      <Modal show={showSummary} onHide={() => setShowSummary(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{profile.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{profile.description}</p>
          <MapComponent lat={profile.lat} lng={profile.lng} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSummary(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileCard;
