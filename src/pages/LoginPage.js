import React, { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }
    // TODO: Implement authentication logic here
    alert("Login successful (stub)");
  }

  return (
    <div className="login-container" style={{
      maxWidth: 400,
      margin: "60px auto",
      background: "#fff8f0",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(112,12,33,0.08)",
      padding: 32,
      fontFamily: "Playfair Display, serif"
    }}>
      <h2 style={{ color: "#b71c1c", textAlign: "center" }}>Login to Agarwal Collection</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 8,
              borderRadius: 6,
              border: "1px solid #a04000",
              marginTop: 4
            }}
            placeholder="Enter your email"
            autoComplete="username"
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 8,
              borderRadius: 6,
              border: "1px solid #a04000",
              marginTop: 4
            }}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />
        </div>
        {error && <div style={{ color: "#b71c1c", marginBottom: 12 }}>{error}</div>}
        <button type="submit" className="button-primary" style={{ width: "100%" }}>Login</button>
      </form>
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <a href="/signup" style={{ color: "#a04000" }}>New user? Register here</a>
      </div>
    </div>
  );
}