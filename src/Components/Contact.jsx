import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate(); // Correct use of the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Template Parameters for EmailJS
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_5lggkcv", // Your EmailJS service ID
        "template_im7r0td", // Your EmailJS template ID
        templateParams,
        "3BSh4FwmsTyP7ihVo" // Your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!", {
            position: "top-center",
          }); // Success toast
          setFormData({ name: "", email: "", message: "" }); // Clear the form
          //   navigate("/"); // Redirect to home page after success
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
          }); // Error toast
        }
      );
  };

  return (
    <div className="container mx-auto py-16 px-6 bg-gray-50">
      {/* Contact Us Section */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          We would love to hear from you! If you have any questions or need
          assistance, feel free to reach out to us.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Get in Touch
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
