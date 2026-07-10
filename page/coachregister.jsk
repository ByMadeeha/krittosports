import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import UploadBox from "../components/UploadBox";

import "./CoachRegister.css";

function CoachRegister() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    district: "",
    primarySport: "",
    experience: "",
    certifications: "",
    coachingMode: "",
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
    // Save coach profile
    // Upload certifications
    // Generate Coach ID
    // Redirect to Coach Dashboard
  };

  return (
    <>
      <Navbar />

      <section className="register-page">

        <div className="register-header">
          <h1>Create Your Coach Profile</h1>

          <p>
            Help athletes grow by sharing your expertise and building your
            professional coaching presence on Kritto Sports.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>

          <h2>Personal Information</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <input
            type="text"
            name="district"
            placeholder="District"
            onChange={handleChange}
            required
          />

          <h2>Coaching Information</h2>

          <input
            type="text"
            name="primarySport"
            placeholder="Primary Sport"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="certifications"
            placeholder="Certifications (e.g. AFC C License)"
            onChange={handleChange}
          />

          <select
            name="coachingMode"
            onChange={handleChange}
            required
          >
            <option value="">Coaching Mode</option>
            <option>Online</option>
            <option>In Person</option>
            <option>Both</option>
          </select>

          <textarea
            name="bio"
            rows="5"
            placeholder="Introduce yourself and your coaching philosophy..."
            onChange={handleChange}
          />

          <UploadBox
            title="Upload Profile Photo"
            description="PNG or JPG"
            accept="image/*"
          />

          <UploadBox
            title="Upload Coaching Certificate"
            description="PDF, PNG or JPG"
            accept=".pdf,image/*"
          />

          <Button type="submit">
            Create Coach Profile
          </Button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default CoachRegister;
