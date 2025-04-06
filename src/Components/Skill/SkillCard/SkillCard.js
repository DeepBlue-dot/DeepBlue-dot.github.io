import "./SkillCard.css";

function Skillcard({ data, title }) {
  return (
    <div className="skill-card" data-aos="fade-right">
      <h3 className="title gradient-text">{title}</h3>
      <div className="skill-content">
        {data.map((list, index) => (
          <div className="skill-details" key={index}>
            <span className="skill-icon">{list.icon}</span>
            <div className="details">
              <h4 className="skill-name">{list.skill}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillcard;
