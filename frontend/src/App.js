import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";

// components import (NOT pages)
import AddStudent from "./components/TempStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Default page → Add Student */}
        <Route path="/" element={<AddStudent/>} />

        {/* Edit student page */}
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
