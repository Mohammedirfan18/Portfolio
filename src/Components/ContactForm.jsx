import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "", 
    from_email: "",
    message: "", 
    to_name: "Mohammed Irfan", 
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_csbm63k";
    const templateID = "template_5nxlvet";
    const publicKey = "t-neegEID-NX5xZvX";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
            to_name: "Mohammed Irfan",
          });
        },
        (err) => {
          console.error("Failed to send email:", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form
      className="mt-5 md:mt-10 flex flex-col gap-4 text-black"
      onSubmit={handleSubmit}
    >
     
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        value={formData.from_name}
        onChange={handleChange}
        className="py-3 px-4 rounded-2xl shadow-[inset_3px_3px_10px_rgba(0,0,0,0.2),inset_-3px_-3px_10px_rgba(255,255,255,0.5)] border-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        required
      />
      
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        value={formData.from_email}
        onChange={handleChange}
        className="py-3 px-4 rounded-2xl shadow-[inset_3px_3px_10px_rgba(0,0,0,0.2),inset_-3px_-3px_10px_rgba(255,255,255,0.5)] border-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        required
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="py-3 px-4 rounded-2xl shadow-[inset_3px_3px_10px_rgba(0,0,0,0.2),inset_-3px_-3px_10px_rgba(255,255,255,0.5)] border-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        rows="4"
        required
      />
      
      <button
        type="submit"
        className="py-3 px-6 text-white font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[3px_3px_10px_rgba(0,0,0,0.3),-3px_-3px_10px_rgba(255,255,255,0.2)] hover:opacity-90 hover:scale-105 transition-transform duration-300"
      >
        Send Message
      </button>
      
      {status && (
        <p className="text-sm mt-2 text-center text-gray-700">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
