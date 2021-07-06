import airbitlogo from "../img/airbit-logo-blue.png";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import landing from "../docs/landing.md";
import landing_en from "../docs/landing_en.md";

type LandingProps = {
  language: boolean;
};

const Landing = ({ language }: LandingProps) => {
  // dynamically set whether to render english or norwegian markdown document.
  const markdown = language ? landing_en : landing;
  return (
    <div id="om">
      <div id="splash">
        <img id="logo" alt="air:bit logo" src={airbitlogo} />
      </div>
      <div id="landing-content">
        <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
      </div>
    </div>
  );
};

export default Landing;
