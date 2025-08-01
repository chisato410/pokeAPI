// pages/Home.jsx
import React from "react";
import "../styles/App.css";
import GameCard from "../components/GameCard";

const gameModes = [
  {
    title: "タイプ早押し",
    description: "効果バツグンを選べ！",
    path: "/type-quiz",
  },
  {
    title: "ポケモンクイズ",
    description: "ヒントでポケモン当て",
    path: "/silhouette-quiz",
  },
  { title: "ビンゴ", description: "特徴でビンゴを揃えよう", path: "/bingo" },
  {
    title: "しりとり",
    description: "ポケモンしりとり対決",
    path: "/shiritori",
  },
  {
    title: "世代クイズ",
    description: "初代？それとも新作？",
    path: "/generation-quiz",
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1>ポケモンミニゲーム集</h1>
      <div className="game-grid">
        {gameModes.map((mode, idx) => (
          <GameCard
            key={idx}
            title={mode.title}
            description={mode.description}
            path={mode.path}
          />
        ))}
      </div>
    </div>
  );
}
