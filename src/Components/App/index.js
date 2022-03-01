import NavBar from "../NavBar";
import { Routes, Route } from "react-router-dom";
import DriversPage from "../DriversPage";
import Home from "../Home";
import Year2021 from "../2021";
import Year2022 from "../2022";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/2021" element={<Year2021 />} />
        <Route path="/2022" element={<Year2022 />} />
      </Routes>
    </>
  );
}

export default App;
