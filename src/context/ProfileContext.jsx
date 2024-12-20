import React, { createContext, useState } from "react";
import predefinedProfiles from "../assets/profiles.json"; // Import predefined profiles

// Create the Profile Context
export const ProfileContext = createContext();

// Create the Provider Component
export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(predefinedProfiles); // Global state for profiles

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles }}>
      {children} {/* Render all child components */}
    </ProfileContext.Provider>
  );
};
