import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TypeQuiz from "./pages/TypeQuiz";
import Bingo from "./pages/Bingo";
import Shiritori from "./pages/Shiritori";
import GenerationQuiz from "./pages/GenerationQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type-quiz" element={<TypeQuiz />} />
        <Route path="/bingo" element={<Bingo />} />
        <Route path="/shiritori" element={<Shiritori />} />
        <Route path="/generation-quiz" element={<GenerationQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
