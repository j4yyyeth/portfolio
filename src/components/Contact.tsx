import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.PUBLIC_EMAIL_JS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAIL_JS_TEMPLATE_ID,
      form.current,
      import.meta.env.PUBLIC_EMAIL_JS_PUBLIC_ID
    );
    setSent(true);
    e.target.reset();
  };
  return (
    <form id="contact-form" ref={form} onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" id="input" name="name" required></input>
        <label htmlFor="input" className="label">
          Name
        </label>
        <div className="underline"></div>
      </div>
      <div className="input-container">
        <input type="text" id="input" name="email" required></input>
        <label htmlFor="input" className="label">
          Email
        </label>
        <div className="underline"></div>
      </div>
      <div className="input-container">
        <input type="text" id="input" name="message" required></input>
        <label htmlFor="input" className="label">
          Message
        </label>
        <div className="underline"></div>
      </div>
      <button type="submit" className="form-btn" value="send">
        <span>Send</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </form>
  );
}
