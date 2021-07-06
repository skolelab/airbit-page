import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
// import home from "../pages/home.md";
import sidebar from "../pages/_Sidebar.md";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const Wiki = (props: any) => {
  const filehandle = props.match.params.id;
  const [file, setFile] = useState("");
  const component = {
    a: ({ ...props }) => <a href={props.href}>{props.children}</a>
  };

  useEffect(() => {
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
