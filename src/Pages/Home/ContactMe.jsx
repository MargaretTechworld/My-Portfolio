import React from 'react';

const ContactMe = () => (
  <section id="Contact" className="contact--section">
    <div>
      <h2>Get In Touch</h2>
      <p className="text-lg">
        Interested in working together or have a question? Fill out the form below,
        <br />
        {' '}
        and I&apos;ll get back to you as soon as possible.
      </p>
    </div>
    <form className="contact--form--container">
      <div className="container">
        <label htmlFor="first-name" className="contact--label">
          <span className="text-md">First Name</span>
          <input
            type="text"
            className="contact--input text-md"
            name="first-name"
            id="first-name"
            required
          />
        </label>
        <label htmlFor="last-name" className="contact--label">
          <span className="text-md">Last Name</span>
          <input
            type="text"
            className="contact--input text-md"
            name="last-name"
            id="last-name"
            required
          />
        </label>
        <label htmlFor="email" className="contact--label">
          <span className="text-md">Email</span>
          <input
            type="email"
            className="contact--input text-md"
            name="email"
            id="email"
            required
          />
        </label>
        <label htmlFor="phone-number" className="contact--label">
          <span className="text-md">Phone Number</span>
          <input
            type="number"
            className="contact--input text-md"
            name="phone-number"
            id="phone-number"
            required
          />
        </label>
      </div>
      <label htmlFor="message" className="contact--label">
        <span className="text-md">Message</span>
        <textarea
          className="contact--input text-md"
          id="message"
          rows="8"
          placeholder="Type your message..."
        />
      </label>
      <div>
        <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
      </div>
    </form>
  </section>
);

export default ContactMe;
