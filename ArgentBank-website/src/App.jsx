import "./assets/style/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Home } from "./pages//Home";
import { Login } from "./pages//Login";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { PrivateRoute } from "./components/common/PrivateRoute";
import ErrorPage from './pages/ErrorPage';


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
