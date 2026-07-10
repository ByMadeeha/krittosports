import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import UploadBox from "../components/UploadBox";

import "./AcademyRegister.css";

function AcademyRegister() {
  const [form, setForm] = useState({
    academyName: "",
    email: "",
    phone: "",
    website: "",
    district: "",
    address: "",
    sports: "",
    facilities: "",
    established: "",
    description: "",
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
    // Save academy profile
    // Upload logo
    // Generate Academy ID
    // Redirect to dashboard
  };

  return (
    <>
      <Navbar />

      <section className="register-page">

        <div className="register-header">

          <h1>Register Your Academy</h1>

          <p>
            Showcase your academy, recruit talented athletes,
            and become part of Bangladesh's growing sports ecosystem.
          </p>

        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          <h2>Academy Information</h2>

          <input
            type="text"
            name="academyName"
            placeholder="Academy Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Official Email"
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
            type="url"
            name="website"
            placeholder="Website (Optional)"
            onChange={handleChange}
          />

          <input
            type="text"
            name="district"
            placeholder="District"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Full Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="sports"
            placeholder="Sports Offered"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="facilities"
            placeholder="Facilities"
            onChange={handleChange}
          />

          <input
            type="number"
            name="established"
            placeholder="Established Year"
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Tell athletes about your academy..."
            onChange={handleChange}
          />

          <UploadBox
            title="Upload Academy Logo"
            description="PNG or JPG"
            accept="image/*"
          />

          <UploadBox
            title="Upload Cover Image"
            description="PNG or JPG"
            accept="image/*"
          />

          <Button type="submit">
            Register Academy
          </Button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default AcademyRegister;
