import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs library
import { ToastContainer, toast } from "react-toastify";

// Massage types including Breast and Booty sections
const massageTypes = [
  {
    title: "Aromatherapy",
    image:
      "https://w0.peakpx.com/wallpaper/151/363/HD-wallpaper-spa-rest-saloon-massage.jpg",
    desc: "Relax and rejuvenate.",
  },
  {
    title: "Swedish Massage",
    image:
      "https://www.bluetree-massage.com/wp-content/uploads/2019/07/eb5a8141-1.jpg",
    desc: "Gentle and relaxing.",
  },
  {
    title: "Deep Tissue Massage",
    image:
      "https://th.bing.com/th/id/OIP.IV7VcB5XOQP6FSzkSi1E5AHaFV?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7g",
    desc: "For sore muscles.",
  },
  {
    title: "Thai Massage",
    image:
      "https://th.bing.com/th/id/OIP.c5L_H5XgT_zUzJztnYac0gHaEc?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    desc: "Stretch and release tension.",
  },
  {
    title: "Breast Massage",
    image:
      "https://th.bing.com/th/id/OIP.vFHKaQPlvm18-GtlpyoAQwAAAA?w=236&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", // Replace with an actual image
    desc: "For sagging and firmness.",
  },
  {
    title: "Booty Sculpting",
    image:
      "https://th.bing.com/th/id/OIP.V---_sQtslhYzb1tS0O97QHaGo?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", // Replace with an actual image
    desc: "Get fit and sculpted booties.",
  },
];

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMassage, setSelectedMassage] = useState(null);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const openModal = (massage) => {
    setSelectedMassage(massage);
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      username: username,
      phone_number: phoneNumber,
      massage_type: selectedType,
      massage_title: selectedMassage?.title,
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
          console.log("Email sent successfully", response);
          toast.success("Message sent successfully!", {
            position: "top-center",
          });

          // Reset form fields and close modal
          setUsername("");
          setPhoneNumber("");
          setSelectedType("");
          setShowModal(false); // Close modal on success
        },
        (err) => {
          console.error("Failed to send email:", err);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
          });
        }
      );
  };

  return (
    <div className="bg-gray-100">
      <header className="text-center py-16 bg-gray-600 text-white">
        <h1 className="text-4xl font-extrabold mt-7 animate-fall-from-top">
          Professional Massage at Your Doorstep
        </h1>
        <p className="mt-4 text-lg animate-fall-from-top">
          Your Privacy is Our Priority
        </p>
      </header>
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Our Premium Massage Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {massageTypes.map((type, index) => (
            <div
              key={index}
              className="cursor-pointer border rounded-lg p-4"
              onClick={() => openModal(type)} // Ensure that the onClick function is properly set
            >
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {type.title}
              </h3>
              <p className="text-gray-600">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-500"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full transform transition-all duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {selectedMassage?.title}
            </h3>
            <p className="text-gray-600 mb-6">{selectedMassage?.desc}</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Aromatherapy">Aromatherapy</option>
                <option value="Swedish Massage">Swedish Massage</option>
                <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                <option value="Thai Massage">Thai Massage</option>
                <option value="Breast Massage">Breast Massage</option>
                <option value="Booty Sculpting">Booty Sculpting</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/7989759695" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-transprent rounded-full p-4 shadow-lg transition-all duration-300"
      >
        <img
          src="https://th.bing.com/th/id/OIP.vBzeU65JZbukjmEX9q50xgHaHZ?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>
      <ToastContainer />
    </div>
  );
};

export default Home;