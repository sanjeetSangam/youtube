import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { VideoPlay } from "./pages/VideoPlay";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<VideoPlay />} />
        <Route path="/search/:keyword" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
