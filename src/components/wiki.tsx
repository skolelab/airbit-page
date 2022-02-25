import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import sidebar from "../pages/_Sidebar.md";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    return "github_pages/" + src;
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
  useEffect(() => {
    if (props.wiki) {
      props.setWiki(false);
    }
    // history.go(0);
    console.log(props.version);
    if (props.version == 2) {
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
            children={sidebar}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Wiki;
