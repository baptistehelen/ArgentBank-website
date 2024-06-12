import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, clearError } from "./LoginSlice";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.signIn.error);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);

  // Effect to load credentials from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberMeEmail");
    const savedPassword = localStorage.getItem("rememberMePassword");
    if (savedEmail && savedPassword) {
      setFormData({
        email: savedEmail,
        password: savedPassword,
      });
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    dispatch(clearError());
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser(formData)).then(({ payload }) => {
      if (payload && payload.redirectTo) {
        if (rememberMe) {
          localStorage.setItem("rememberMeEmail", formData.email);
          localStorage.setItem("rememberMePassword", formData.password);
        } else {
          localStorage.removeItem("rememberMeEmail");
          localStorage.removeItem("rememberMePassword");
        }
        navigate(payload.redirectTo);
      }
    });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
