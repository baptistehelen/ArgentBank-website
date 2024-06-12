import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
