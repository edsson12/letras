import React from "react";
import "./Bottom.scss";
import Biografia from "../Biografia/Biografia.jsx";

const Bottom = ({ lyrics }) => {
  if (lyrics.length === 0) return null;

  return (
    <div className="o-container">

      <Biografia />

        <div className="o-derecha-container">
      <h2>Letra</h2>
      <pre>{lyrics}</pre>
      </div>

    </div>
  );
};

export default Bottom;
