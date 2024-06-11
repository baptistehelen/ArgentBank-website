import { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    dispatch(clearError());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser(formData)).then(({ payload }) => {
      if (payload && payload.redirectTo) {
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
            <label htmlFor="username">Username</label>
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
            <input type="checkbox" id="remember-me" />
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
