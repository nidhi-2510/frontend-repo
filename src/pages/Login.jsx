import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const DefaultUsername = "admin@xhire.com";
const DefaultPassword = "Admin@123";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    if (pwd.length < 8 || pwd.length > 16) {
      return "Password must be 8-16 characters.";
    }
    if (!/[A-Z]/.test(pwd)) {
      return "Password must contain an uppercase letter.";
    }
    if (!/[a-z]/.test(pwd)) {
      return "Password must contain a lowercase letter.";
    }
    if (!/[0-9]/.test(pwd)) {
      return "Password must contain a number.";
    }
    if (!/[!@#$%]/.test(pwd)) {
      return "Password must contain a special character (!@#$%).";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      if (email === DefaultUsername && password === DefaultPassword) {
        setLoading(false);
        navigate("/dashboard");
      } else {
        setLoading(false);
        setError("Invalid email or password. Please try again.");
      }
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please sign in to continue accessing your account.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="signin-btn">
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
