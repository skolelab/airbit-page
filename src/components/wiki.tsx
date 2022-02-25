import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import sidebar from "../pages/Sidebar.md";
import sidebarOld from "../pages_old/Sidebar.md";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const parseLink = (props: any) => {
  // conditional render of the markdown components
  return props.href.includes("http") ? (
    <a href={props.href}>{props.children}</a>
  ) : (
    <Link to={props.href}>{props.children}</Link>
  );
};

const parseImage = (src: string) => {
  if (src.includes("http")) {
    return src;
  } else {
    return "airbit-page/" + src;
  }
};

const Wiki = (props: any) => {
  const filehandle = props.match.params.id;
  const [file, setFile] = useState("");
  const component = {
    a: ({ ...props }) => {
      return parseLink(props);
    },
    img: ({ ...props }) => (
      <img style={{ maxWidth: "100%" }} src={parseImage(props.src)}></img>
    )
  };
  const [cookies, setCookies] = useCookies(["version"]);
  useEffect(() => {
    if (props.wiki) {
      props.setWiki(false);
    }
    // history.go(0);
    console.log(props.version);
    if (cookies.version == 2) {
      import(`../pages/${filehandle}.md`).then((res) => {
        setFile(res.default);
      });
    } else {
      import(`../pages_old/${filehandle}.md`).then((res) => {
        setFile(res.default);
      });
    }
  });
  return (
    <Container id="wiki-container">
      <Row>
        <Col sm={10} id="content">
          <ReactMarkdown
            components={component}
            remarkPlugins={[gfm]}
            children={file}
          />
        </Col>
        <Col sm={2}>
          <ReactMarkdown
            components={component}
            remarkPlugins={[gfm]}
            children={cookies.version == 2 ? sidebar : sidebarOld}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Wiki;
