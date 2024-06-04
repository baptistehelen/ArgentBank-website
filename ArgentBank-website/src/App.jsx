import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { User } from "./components/User";
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
        <Route path="/user" element={<User />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
