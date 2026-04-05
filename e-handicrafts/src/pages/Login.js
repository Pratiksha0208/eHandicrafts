// LoginPage.jsx
import React, { useState } from "react";
import "../Styles/Login.css"; // your theme + login styles

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  // Dummy credentials
  const dummyUser = {
    email: "user@ehandicrafts.com",
    password: "handmade123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === dummyUser.email && password === dummyUser.password) {
      showAlert("Login successful! Redirecting...", "success");
      setTimeout(() => {
        // replace with real redirect
        window.location.href = "/dashboard";
      }, 2000);
    } else {
      showAlert("Invalid email or password.", "error");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 3000);
  };

  const handleRegisterRedirect = () => {
    window.location.href = "/role";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <p className="subtitle">Welcome back! Please enter your credentials.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>

          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
        </form>

        <p className="login-link">
          Don't have an account?{" "}
          <span onClick={handleRegisterRedirect}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;