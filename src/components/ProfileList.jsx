import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const { profiles } = useContext(ProfileContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary fw-bold mb-4">Profiles</h1>
      <div className="row g-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="col-md-4">
            <ProfileCard profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
