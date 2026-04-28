import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful 🚀");

    // decide role
    let role = "buyer";

    if (email === "seller@gmail.com") {
      role = "seller";
    }

    // store role
    localStorage.setItem("role", role);

    // redirect
    if (role === "seller") {
      navigate("/seller");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">

      <div className="left">
        <div className="diamond-container">
          <img src={image1} className="diamond d1" alt="img1" />
          <img src={image2} className="diamond d2" alt="img2" />
          <img src={image3} className="diamond d3" alt="img3" />
          <img src={image4} className="diamond d4" alt="img4" />
        </div>
      </div>

      <div className="right">
        <div className="login-box glass">

          <div className="logo">🪔 eHandicrafts</div>

          <h2>Welcome Back 👋</h2>
          <p>Login to your account</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>

        </div>
      </div>

    </div>
  );
}

export default Login;