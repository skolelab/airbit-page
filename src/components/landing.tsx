import airbitlogo from "../img/airbit-logo-blue.png";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import landing from "../docs/landing.md";

const Landing = () => {
  return (
    <div className="jumbtron" id="om">
      <div id="splash">
        <img id="logo" alt="air:bit logo" src={airbitlogo} />
      </div>
      <div id="landing-content">
        <ReactMarkdown remarkPlugins={[gfm]} children={`${landing}`} />
      </div>
    </div>
  );
};

export default Landing;
