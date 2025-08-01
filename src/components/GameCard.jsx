import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

export default function GameCard({ title, description, path }) {
  const navigate = useNavigate();

  return (
    <div className="game-card" onClick={() => navigate(path)}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
