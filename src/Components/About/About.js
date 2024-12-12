import "./About.css";
import { whyChooseMe } from "../../sources";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text"> About Us</span>
          </h1>
          <h4 className="sub-title muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </h4>
        </div>
        <div className="group">
          {whyChooseMe.map((list, index) => {
            return <div className="flex-center group-item" key={index}>
                <div className="flex-center icon-wrapper">
                    {list.icon}
                </div>
                <h4 className="title">{list.title}</h4>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
