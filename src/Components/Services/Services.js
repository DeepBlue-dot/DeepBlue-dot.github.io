import "./Services.css";
import { services } from "../../sources";
import { Link } from "react-scroll";

function Services() {
  return (
    <section id="services">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-right'>
            <span className="gradient-text">Services</span>
          </h1>
          <h4 className="sub-title muted"  data-aos='fade-left'>
            I transform your ideas, ans consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers
          </h4>
        </div>
        <div className="services-container">
          {services.map((services, index) => {
            return (
              <div className="service" data-aos='fade-left' key={index}>
                <div className="flex-center icon-wrapper">
                    {services.icon}
                </div>
                <div className="details">
                    <h3 className="name gradient-text">{services.name}</h3>
                    <p className="mutted">{services.description}</p>
                </div>
                <div className="flex buttons-wrapper">
                    <button className="btn">Read More</button>
                    <Link to='contact' smooth={true} className="btn">Get started</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
