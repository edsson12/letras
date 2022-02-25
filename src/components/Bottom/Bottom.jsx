import React from "react";
import "./Bottom.scss";


const Bottom = ({ lyrics, cancion }) => {
  if (lyrics.length === 0) return null;

  

  return (
    <div className="o-container">
      <h1> {cancion}, Letra</h1>
      <pre>{lyrics}</pre>
    </div>
  );
};

export default Bottom;
