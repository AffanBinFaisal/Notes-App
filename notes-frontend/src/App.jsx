import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}></Route>
        <Route
          path="/write"
          element={<Write />}></Route>
        <Route
          path="/post/:postId"
          element={<Single />}></Route>
        <Route
          path="/about"
          element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
