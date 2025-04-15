import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "./ExperienceCard.css"; // Import the separated CSS file

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      <div className="top">
        <img className="image" src={experience.img} alt={experience.school} />
        <div className="body">
          <div className="role">{experience.role}</div>
          <div className="company">{experience.company}</div>
          <div className="date">{experience.date}</div>
        </div>
      </div>
      <div className="description">
        {experience?.desc && <div className="span">{experience.desc}</div>}
        {experience?.skills && (
          <>
            <br />
            <div className="skills">
              <b>Skills:</b>
              <div className="item-wrapper">
                {experience.skills.map((skill, index) => (
                  <div key={index} className="skill">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
