import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // TODO:
    // Authenticate user
    // Redirect to Dashboard
  };

  return (
    <>
      <Navbar />

      <section className="login-page">

        <div className="login-card">

          <h1>Welcome Back</h1>

          <p>
            Continue your journey with Kritto Sports.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <Button type="submit">
              Sign In
            </Button>

          </form>

          <div className="login-links">

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

            <p>
              Don't have an account?{" "}
              <Link to="/register">
                Create one
              </Link>
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Login;
