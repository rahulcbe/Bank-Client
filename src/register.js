import React, { useState } from "react";
import axios from "axios";
import "./reg.css"; 

export default function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // Status message
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  const api = "https://bank-server-kjhq.onrender.com";

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission
    setStatusMessage(""); // Clear previous messages

    try {
      let item = { name: Name, email: Email, password: pass, amount: 1000 };
      await axios.post(`${api}/create`, item);
      setStatusMessage("✅ Submitted Successfully!");
      setName("");
      setEmail("");
      setPass("");
    } catch (error) {
      setStatusMessage("❌ Submission Failed. Try Again!");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        {statusMessage && <p className="status-message">{statusMessage}</p>} {/* Status Message */}
        <form onSubmit={handleSubmit}>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" required />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
