import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { VideoPlay } from "./pages/VideoPlay";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<VideoPlay />} />
      </Routes>
    </>
  );
}

export default App;
