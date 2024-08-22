import { socialHandles } from "../../sources";
import "./SocialHandles.css"

function SocialHandles() {
  return (
    <div className="handles-container">
      {socialHandles.map((handle, index) => {
        return (
          <a
            href={handle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-center icon-wrapper"
            key={index}
          >
            {handle.icon}
          </a>
        );
      })}
    </div>
  );
}

export default SocialHandles;
