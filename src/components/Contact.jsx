import React, { useState } from "react";
import { db, collection, addDoc } from "./firebase"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import YksLocation from "./Yks_location";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSuccessMessage("Message sent"); 
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(`Failed to send message. Error: ${error.message}`);
    }
  };

  return (
    <div id="contact-section" className="bg-gray-50 py-20">
      {successMessage && (
        <div className="mt-4 p-2 italic ml-[700px] font-semibold bg-pink-50 text-gray-900 border border-blue-100  flex items-center justify-center rounded-lg h-[60px] w-[150px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2 bg-green-300 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h1>Message sent</h1>
        </div>
      )}
      <div className="container mx-auto p-8 max-w-4xl shadow-md rounded-lg bg-white">
        <div className="flex flex-col lg:flex-row">
          <div
            className="first_div lg:w-1/2 p-6 rounded-lg text-black flex flex-col justify-center bg-light-blue-200"
            style={{ minHeight: "300px" }}
          >
            <div className="">
              <div className="mr-[70px] mb-[40px] flex flex-col items-center">
                <h1 className="text-2xl font-semi-bold">
                  Turn your digital ideas into
                </h1>
                <h2>
                  <span className="text-blue-700 text-2xl font-semibold">
                    digital products
                  </span>
                </h2>
                <p className="text-gray-400 mt-1">
                  Schedule a call with YKSINC
                </p>
              </div>

              <div className="flex items-center mb-5">
                <div className="flex items-center mr-3">
                  <i className="fas fa-envelope text-blue-500 border border-blue-500 rounded-full p-2 text-xl"></i>
                </div>
                <div>
                  <h1 className="font-bold text-xl">Email</h1>{" "}
                  info@yaksincorporation.com
                </div>
              </div>
              <div className="flex items-center mb-5">
                <div className="flex items-center mr-3">
                  <i
                    className="fas fa-phone-alt text-green-500 border border-green-500 rounded-full p-2 text-xl"
                    style={{ transform: "rotate(90deg)" }}
                  ></i>
                </div>
                <div>
                  <h1 className="font-bold text-xl">Phone</h1> +977 9864414883
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center mr-3">
                  <i className="fas fa-map-marker-alt text-red-500 border border-red-500 rounded-full p-2 text-xl"></i>
                </div>
                <div>
                  <h1 className="font-bold text-xl">Location</h1> Kathmandu,
                  Nepal
                </div>
              </div>
            </div>
          </div>

          <div
            className="second_div lg:w-1/2 p-6 rounded-lg flex flex-col justify-between items-start"
            style={{ minHeight: "300px" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 mt-0 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-2 border rounded-xl bg-red-50"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-2 border rounded-xl bg-red-50"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-2 border rounded-xl bg-red-50"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-2 border rounded-xl bg-red-50"
                />
              </div>

              <div className="mb-5 w-full">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-2xl h-32 bg-red-50"
                  required
                ></textarea>
              </div>

              <div className="text-center w-full">
                <button
                  type="submit"
                  className="btn text-white font-semibold px-[160px] py-3 border rounded-xl hover:bg-green-50 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <YksLocation />
    </div>
  );
}

export default Contact;
