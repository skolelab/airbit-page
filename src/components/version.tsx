import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Version = () => {
  const [_, setCookies] = useCookies(["version"]);
  const history = useHistory();

  const onChange = (val: number) => {
    setCookies("version", val, { path: "/" });
    history.push("/");
  };

  return (
    <div id="om">
      <div id="splash">
        <Button
          onClick={() => {
            //     setVersion(1);
            onChange(1);
          }}
        >
          Gamle airbit
        </Button>
        <Button
          onClick={() => {
            //     setVersion(2);
            onChange(2);
          }}
        >
          Nye airbit
        </Button>
      </div>
    </div>
  );
};

export default Version;
