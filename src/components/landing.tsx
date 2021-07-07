import airbitlogo from "../img/airbit-logo-blue.png";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import landing from "../pages/landing.md";
import landing_en from "../pages/landing_en.md";
import { useEffect, useState } from "react";

type LandingProps = {
  language: boolean;
};

const Landing = ({ language }: LandingProps) => {
  // dynamically set whether to render english or norwegian markdown document.
  const [file, setFile] = useState("");

  useEffect(() => {
    const markdown = language ? landing_en : landing;
    import(`../docs/${markdown}.md`).then((res) => {
      setFile(res.default);
    });
  });
  return (
    <div id="om">
      <div id="splash">
        <img id="logo" alt="air:bit logo" src={airbitlogo} />
      </div>
      <div id="landing-content">
        <ReactMarkdown remarkPlugins={[gfm]} children={file} />
      </div>
    </div>
  );
};

export default Landing;
