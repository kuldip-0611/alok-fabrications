import React, { useState } from "react";
import "./ContactDetailsForm.css";
import { useNavigate } from "react-router-dom";
import formPage from "../../Assets/formpage.png";

const ContactDetailsForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
      navigate("/thank-you");
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="bg_gray">
      <div className="container mt-1 form_container">
        <img src={formPage} className="form_img" alt="thank text" />
        <div className="col-md-6 mx-auto form_cover">
          <form onSubmit={handleSubmit}>
            <h6>
              <strong>Hello,</strong>
            </h6>
            <textarea
              name="message"
              className="triple-line"
              placeholder="Request your quote now!!"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <h6 className="mt-4">
              <strong>Regards,</strong>
            </h6>
            <input
              type="text"
              name="name"
              className="triple-line mt-2"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="text"
              name="phone"
              className="triple-line mt-2"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <input
              type="email"
              name="email"
              className="triple-line mt-2"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <button type="submit" className="btn_form mt-3">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
