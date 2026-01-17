import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const DefaultUsername = "admin@xhire.com";
const DefaultPassword = "admin@123";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (email === DefaultUsername && password === DefaultPassword) {
        setLoading(false);
        // Handle success (e.g. navigate to dashboard or show success message)
        alert("Account Created Successfully!");
      } else {
        setLoading(false);
        setError("Your username or Password is incorrect");
      }
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Create Account</h1>
          <p>Join us today and start your journey.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-btn">
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <div className="signup-link">
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
