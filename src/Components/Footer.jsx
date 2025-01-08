import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#591f04] opacity-[100] text-[#fac76e] py-6 text-center border-2 border-[#ebe9e6]">
      <p>© 2025 MassagePro. All Rights Reserved.</p>
      <div className="mt-4">
        <p>Contact us:</p>
        <p className="mb-2">
          <a
            href="tel:+6363595881"
            className="text-[#fac76e] hover:underline flex items-center justify-center mb-2"
          >
            <span className="mr-2">📞</span>Call: 6363595881
          </a>{" "}
          |{" "}
          <a
            href="https://wa.me/6363595881"
            className="text-[#fac76e] hover:underline flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2 text-2xl" /> WhatsApp: 6363595881
          </a>
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fac76e] mx-4 text-3xl hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fac76e] mx-4 text-3xl hover:text-blue-500"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
