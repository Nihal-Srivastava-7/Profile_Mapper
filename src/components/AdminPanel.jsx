import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

const AdminPanel = () => {
  const { profiles, setProfiles } = useContext(ProfileContext);
  const [showModal, setShowModal] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: "",
    address: "",
    skills: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (editingProfile) {
      setProfiles((prev) =>
        prev.map((profile) =>
          profile.id === editingProfile.id
            ? { ...profile, ...formData, skills: formData.skills.split(",") }
            : profile
        )
      );
    } else {
      setProfiles((prev) => [
        ...prev,
        {
          id: uuidv4(),
          ...formData,
          skills: formData.skills.split(","),
        },
      ]);
    }

    setShowModal(false);
    setFormData({
      name: "",
      description: "",
      photo: "",
      address: "",
      skills: "",
    });
    setEditingProfile(null);
  };

  const handleDelete = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary fw-bold">Admin Panel</h1>
      <Button className="mb-3 btn-primary" onClick={() => setShowModal(true)}>
        Add Profile
      </Button>
      <table className="table table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.name}</td>
              <td>{profile.description}</td>
              <td>
                <Button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => {
                    setEditingProfile(profile);
                    setShowModal(true);
                    setFormData({
                      ...profile,
                      skills: profile.skills?.join(","),
                    });
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(profile.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingProfile ? "Edit Profile" : "Add Profile"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            {/* Additional fields */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPanel;
