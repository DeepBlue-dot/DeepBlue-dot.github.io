import "./ProjectsCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa6";

function ProjectsCard({
  title,
  images, // Changed from image to images (array)
  description,
  stack,
  demoLink,
  githubLink,
  className,
}) {
  // Slider settings configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={`project-card ${className ? className : ""}`}>
      <div className="picture">
        <Slider {...sliderSettings}>
          {images.map((imgSrc, index) => (
            <div key={index}>
              <img src={imgSrc} alt={`${title} - ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      {/* Rest of the component remains same */}
      <div className="details">
        <div className="top">
          <h2 className="title">{title}</h2>
        </div>
        <div className="middle">
          <p className="muted description">{description}</p>
        </div>
        <div className="bottom">
          <div className="stack-container">
            <div className="stack-left">Stack</div>
            <div className="stack-right">
              <div className="stack-box-container">
                {stack.map((list, index) => (
                  <div className="stack-box" key={index}>
                    <div className="stack-icon-container">
                      <span
                        className="flex-center stack-icon"
                        style={{ color: list.iconColor }}
                      >
                        {list.icon}
                      </span>
                      <span className="stack-name">{list.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-center buttons-container">
            <a
              href={demoLink}
              target="_blank"
              className="btn primary"
              rel="noreferrer"
            >
              Demo
            </a>
            <div className="flex-center btn btn-share">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
