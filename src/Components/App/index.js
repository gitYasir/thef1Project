import NavBar from "../NavBar";
import { Routes, Route } from "react-router-dom";
import DriversPage from "../DriversPage";
import Home from "../Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drivers" element={<DriversPage />} />
      </Routes>
    </>
  );
}

export default App;
