import "./App.css";
import HomeLayout from "./Components/Home";
import KnowledgeHub from "./Components/KnowledgeHub";
import CreateShadow from "./Components/CreateShadow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/knowledgehub" element={<KnowledgeHub />} />
        <Route path="/createshadow/*" element={<CreateShadow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
