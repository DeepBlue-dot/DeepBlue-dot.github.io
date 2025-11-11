import React, { useRef } from "react";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Achievements.css";
import { achievements } from "../../sources";

export default function Achievements() {
  const sliderRef = useRef(null);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="achievements">
      <div className="wrapper">
        <header className="section-header" data-aos="fade-left">
          <h1 className="heading-1">
            <span className="gradient-text">Achievements</span>
          </h1>
          <h4 className="sub-title" data-aos-delay="400">
            Who dares wins
          </h4>
        </header>

        <div data-aos="fade-right">
          <Slider {...settings} ref={sliderRef} className="Achievements-container">
            {achievements.map((item, idx) => (
              <div className="slide" key={idx}>
                <div className="profile">
                  <img src={item.image} alt="certificate" />
                </div>
                <p className="content muted">{item.review}</p>
                {item.doc && (
                  <div className="more-info">
                    <a href={item.doc} target="_blank" rel="noopener noreferrer" className="btn">
                      More Info
                    </a>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>

        <div className="buttons-container flex-center" data-aos="fade-left">
          <button onClick={() => sliderRef.current.slickPrev()} className="btn flex-center">
            <FaLongArrowAltLeft />
          </button>
          <button onClick={() => sliderRef.current.slickNext()} className="btn flex-center">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
}

