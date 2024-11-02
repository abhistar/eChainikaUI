import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import CandidateApp from "./candidate/CandidateApp";

function App() {
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
