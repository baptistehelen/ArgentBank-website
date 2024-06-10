import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import { Signin } from "./components/Signin";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
