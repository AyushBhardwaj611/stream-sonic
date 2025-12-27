import React from "react";

const StreamCard = ({ name, description }) => {
  return (
    <div className="stream-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem", borderRadius: "8px" }}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StreamCard;
