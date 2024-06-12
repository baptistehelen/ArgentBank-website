import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { PrivateRoute } from "./PrivateRoute";
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
