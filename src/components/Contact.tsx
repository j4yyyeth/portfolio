export default function Contact() {
  return (
    <form id="contact-form">
      <div className="input-container">
        <input type="text" id="input" required></input>
        <label htmlFor="input" className="label">
          Name
        </label>
        <div className="underline"></div>
      </div>
      <div className="input-container">
        <input type="text" id="input" required></input>
        <label htmlFor="input" className="label">
          Email
        </label>
        <div className="underline"></div>
      </div>
      <div className="input-container">
        <input type="text" id="input" required></input>
        <label htmlFor="input" className="label">
          Message
        </label>
        <div className="underline"></div>
      </div>
      <button type="submit" className="form-btn">
        <span>Send</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </form>
  );
}
