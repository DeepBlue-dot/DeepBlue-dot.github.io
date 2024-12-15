import "./Contact.css";
import { contactOptions } from "../../sources";

function Contact() {
  return (
    <section id="contact" data-aos='fade-zoom-in'>
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => {
            return (
              <div className="flex-center option" data-aos='fade-right' key={index}>
                <div className="flex-center icon-wrapper">{option.icon}</div>
                <h4 className="muted">{option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            );
          })}
        </div>
        <div className="contact-form" data-aos='fade-left'>
          <div className="top">
            <span className="gradient-text">Join forces with me!</span>
          </div>
          <p className="muted">
            I build with precision and passion, creating web projects that stand
            out. It's as straightforward as that!
          </p>
          <div className="middle">
            <div className="flex row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="control"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="control"
              />
            </div>
            <div className="flex row">
              <input
                type="email"
                placeholder="Email name"
                name="email"
                className="control"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="control"
              />
            </div>
            <textarea name="message" cols={30} rows={10} placeholder="Message" className="control"></textarea>
          </div>
          <div className="flex-center bottom">
            <button className="btn primary">Send Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
