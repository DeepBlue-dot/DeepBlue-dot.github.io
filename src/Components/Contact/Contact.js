import "./Contact.css";
import { contactOptions } from "../../sources";
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'sending'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xvgknwpk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  className="control"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex row">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  className="control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <textarea 
                name="message" 
                cols={30} 
                rows={10} 
                placeholder="Message" 
                className="control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex-center bottom">
              <button 
                className="btn primary" 
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Now'}
              </button>
              {status === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>}
              {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Error sending message. Please try again.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;