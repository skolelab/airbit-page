import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import sidebar from "../pages/_Sidebar.md";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Wiki = (props: any) => {
  const history = useHistory();

  const filehandle = props.match.params.id;
  const [file, setFile] = useState("");
  const component = {
    a: ({ ...props }) => <Link to={props.href}>{props.children}</Link>
  };

  if (document.getElementById("wikibar")) {
    // refresh page if we find the second navigation bar
    history.go(0);
  }
  useEffect(() => {
    // history.go(0);
    import(`../pages/${filehandle}.md`).then((res) => {
      setFile(res.default);
    });
  });
  return (
    <Container id="wiki-container">
      <Row>
        <Col sm={10} id="content">
          <ReactMarkdown remarkPlugins={[gfm]} children={file} />
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
