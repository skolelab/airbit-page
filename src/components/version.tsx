import { Button } from "react-bootstrap";

type VersionProps = {
  onChange: any;
};
const Version = ({ onChange }: VersionProps) => {
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
