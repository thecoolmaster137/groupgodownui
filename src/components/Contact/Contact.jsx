import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-outer-div">
      <div className="contact-main-div">
        <h5>Contact Us</h5>
        <p>Email : glinks@groups.com</p>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Your Name" />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Email"
          />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Subject" />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            rows="3"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
}
