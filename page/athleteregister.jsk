import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import UploadBox from "../components/UploadBox";

import "./AthleteRegister.css";

function AthleteRegister() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    district: "",
    sport: "",
    position: "",
    experience: "",
    bio: "",
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
    // Save to Replit DB / Firebase / Supabase
    // Generate Athlete ID
    // Redirect to Dashboard
  };

  return (
    <>
      <Navbar />

      <section className="register-page">

        <div className="register-header">
          <h1>Create Your Athlete Identity</h1>

          <p>
            Build your official Kritto Sports athlete profile and become
            discoverable by coaches, academies, and opportunities.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>

          <h2>Personal Information</h2>

          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />

          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            onChange={handleChange}
            required
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <h2>Athlete Information</h2>

          <input
            name="district"
            placeholder="District"
            onChange={handleChange}
            required
          />

          <input
            name="sport"
            placeholder="Primary Sport"
            onChange={handleChange}
            required
          />

          <input
            name="position"
            placeholder="Position / Event"
            onChange={handleChange}
          />

          <select
            name="experience"
            onChange={handleChange}
          >
            <option value="">Experience Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Competitive</option>
            <option>Advanced</option>
            <option>National</option>
          </select>

          <textarea
            name="bio"
            placeholder="Tell us about your athletic journey..."
            rows="5"
            onChange={handleChange}
          />

          <UploadBox
            title="Upload Athlete Photo"
            description="PNG or JPG"
            accept="image/*"
          />

          <Button type="submit">
            Create Athlete Profile
          </Button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default AthleteRegister;
