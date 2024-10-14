// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import CandidateApp from "./candidate/CandidateApp";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CandidateApp />} />
        <Route path="/admin" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
