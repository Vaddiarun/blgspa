import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importing icons for WhatsApp, Instagram, and Facebook

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_5lggkcv",
        "template_im7r0td",
        templateParams,
        "3BSh4FwmsTyP7ihVo"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
          });
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

      {/* Social Media Links */}
      <section className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://teams.microsoft.com/l/message/48:notes/1736354415654?context=%7B%22contextType%22%3A%22chat%22%7D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fac76e] hover:text-pink-400 text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fac76e] hover:text-blue-500 text-3xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/6363595881"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fac76e] hover:text-green-500 text-3xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Find Us on Google Maps
        </h3>
        <div className="w-full h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9799471959413!2d77.6442835!3d12.909010300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a09b068ddf%3A0x707a56737d3b5fe!2sTiara%20Doorstep%20Spa!5e0!3m2!1sen!2sin!4v1736354152023!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
