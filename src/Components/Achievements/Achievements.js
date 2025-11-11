import React, { useRef, useCallback } from "react";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { achievements } from "../../sources";
import "./Achievements.css";

export default function Achievements() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: achievements.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  const handlePrev = useCallback(() => sliderRef.current?.slickPrev(), []);
  const handleNext = useCallback(() => sliderRef.current?.slickNext(), []);

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12" data-aos="fade-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-gray-600 text-lg font-medium" data-aos-delay="400">
            Who dares wins
          </p>
        </header>

        {/* Slider */}
        <div data-aos="fade-up" className="relative">
          <Slider ref={sliderRef} {...settings} className="rounded-2xl overflow-hidden">
            {achievements.map(({ id, title, date, description, image, link }, idx) => (
              <div key={id || idx} className="px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
                  <div className="flex flex-col items-center text-center p-6 sm:p-10">
                    {/* Image */}
                    <div className="w-full flex justify-center mb-6">
                      <img
                        src={image}
                        alt={title || `Achievement ${idx + 1}`}
                        loading="lazy"
                        className="w-full max-w-md rounded-xl shadow-md object-cover"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h3>
                    {date && <p className="text-sm text-gray-500 mb-4">{date}</p>}
                    {description && (
                      <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
                        {description}
                      </p>
                    )}

                    {/* Link */}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-md hover:from-indigo-600 hover:to-purple-600 transition-colors"
                      >
                        More Info
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation buttons */}
          {achievements.length > 1 && (
            <div className="flex justify-center gap-4 mt-8" data-aos="fade-left">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                aria-label="Previous slide"
              >
                <FaLongArrowAltLeft className="text-indigo-500 text-xl" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                aria-label="Next slide"
              >
                <FaLongArrowAltRight className="text-indigo-500 text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
