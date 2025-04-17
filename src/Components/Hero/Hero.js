import "./Hero.css";
import { Link } from "react-scroll";
import me from "../../assets/my-profile-pic-2.png";
import About from "../../Commons/About/About";

function Hero() {
  return (
    <section id="hero">
      <div className="wrapper info-container">
        <div className="column">
          <h3 className="sub-title" data-aos="fade-right">
            Hi, I'm <span className="primary">Yeabsira Fikadu</span>
          </h3>
          <h1 className="heading-1" data-aos="fade-up">
            A <span className="gradient-text">Fullstack</span> Web Developer
          </h1>
          <p className="muted" data-aos="fade-up" data-aos-delay="200">
            from Ethiopia, focused on backend development and experienced with
            frontend technologies. Builds functional applications with clean,
            maintainable code.
          </p>
          <div className="flex-center buttons-wrapper">
            <a
              href='./docs/Yeabsira_Fikadu_resume.pdf'
              target="_blank"
              className="btn primary"
              rel="noreferrer"
            >
              Learn more
            </a>
            <Link
              to="contact"
              smooth={true}
              className="btn"
              data-aos="fade-left"
              data-aos-delay="1500"
              data-aos-offset="50"
            >
              Get started
            </Link>
          </div>
        </div>
        <div
          className="column hero-image"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src={me} alt="profile pic" />
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <About />
        </div>
      </div>
    </section>
  );
}

export default Hero;
