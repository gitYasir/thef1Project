import NavBar from "../NavBar";
import { Routes, Route } from "react-router-dom";
import Drivers from "../Drivers";
import Home from "../Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drivers" element={<Drivers />} />
      </Routes>
    </>
  );
}

export default App;
