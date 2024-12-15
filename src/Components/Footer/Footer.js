import "./Footer.css";
import Logo from "../../Commons/Logo/Logo";
import SocialHandles from "../../Commons/SocialHandles/SocialHandles";
import { footer } from "../../sources";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="column">
          <Logo />
          <SocialHandles />
        </div>
        {footer.map((list, index) => {
          return (
            <div className="column" key={index}>
              <h3 className="muted title">{list.title}</h3>
              {list.routes.map((route, index) => {
                return (
                  <Link
                    to={route.id || ""}
                    smooth={true}
                    className="route"
                    key={index}
                  >
                    {route.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex-center copyright">
        <h4>
          Copyright &copy; {new Date().getFullYear()} - All rights reserved
        </h4>
        <p className="muted">
          Built with ❤️ by Yeabsira Fikadu (A.K.A DeepBlue) 
        </p>
      </div>
    </footer>
  );
}

export default Footer;
