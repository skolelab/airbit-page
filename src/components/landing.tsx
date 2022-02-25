import airbitlogo from "../img/airbit-logo-blue.png";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

type LandingProps = {
  language: boolean;
  version: number;
  wiki: boolean;
  setWiki: Dispatch<SetStateAction<boolean>>;
};

const Landing = ({ version, wiki, setWiki }: LandingProps) => {
  // dynamically set whether to render english or norwegian markdown document.
  const [file, setFile] = useState("");

  useEffect(() => {
    if (!wiki) {
      setWiki(true);
    }

    // const markdown = language ? "landing_en" : "landing";
    const markdown = version == 1 ? "old_landing" : "landing";
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
