import { useState } from "react";
import "./App.css";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>{showLogin ? "Login" : "Create Account"}</h2>

        {showLogin ? <Login /> : <Signup />}

        <p className="switch-text">
          {showLogin ? "Don't have an account?" : "Already registered?"}
          <span onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? " Sign up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

// ----------------------- LOGIN FORM -----------------------
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    alert("Logged in successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p className="error">{error}</p>}

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <button className="btn">Login</button>
    </form>
  );
}

// ----------------------- SIGNUP FORM -----------------------
function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    alert("Account created successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p className="error">{error}</p>}

      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <button className="btn">Sign Up</button>
    </form>
  );
}
