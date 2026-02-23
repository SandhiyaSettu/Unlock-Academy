import Events from "./pages/Events";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dance from "./pages/Dance";
import Music from "./pages/Music";

function App() {
  return (
    <Router>
      <Routes>
<Route path="/events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
