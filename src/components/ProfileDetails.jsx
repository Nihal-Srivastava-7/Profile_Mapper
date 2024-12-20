import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext";
import MapComponent from "./MapComponent";

const ProfileDetails = () => {
  const { id } = useParams(); // Get the profile ID from the URL
  const { profiles } = useContext(ProfileContext); // Access profiles from context
  const profile = profiles.find((p) => p.id === id); // Find the specific profile

  if (!profile) {
    return <div className="text-center mt-5">Profile not found</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary fw-bold mb-4">{profile.name}</h1>
      <p className="text-center text-muted">{profile.description}</p>
      <div className="mt-4">
        <MapComponent lat={profile.lat} lng={profile.lng} />
      </div>
    </div>
  );
};

export default ProfileDetails;
