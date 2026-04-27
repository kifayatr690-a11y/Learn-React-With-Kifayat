import "./App.css";
import { Routes, Route } from "react-router-dom";
import NaveBar from "./MainPages/NaveBar";
import Home from "./MainPages/Home";
import LearnReact from "./MainPages/Learn";
import Installation from "./MainPages/Installation";
import Topics from "./MainPages/Topics";
function App() {
  return (
    <>
      <NaveBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnreact" element={<LearnReact />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/topics" element={<Topics />} />


      </Routes>
      

    </>
  );
}

export default App;