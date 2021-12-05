import { useState } from "react";
import "./ViewIndividualTailgate.css";
import IndividualTailgate from "../../components/individualTailgate";
import { useEffect } from "react";
import { Button, Stack } from "@chakra-ui/react";
function ViewIndividualTailgate() {
  const [tailgate, setTailgate] = useState({
    tailgateName: "CASA",
    time: "1pm-3pm",
    location: "Mccarthy Quad",
    spots: 3,
    message:
      "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
  });
  useEffect(() => {
    // setTailgate({
    //   tailgateName: "New",
    //   time: "1pm-3pm",
    //   location: "Mccarthy Quad",
    //   spots: 3,
    //   message:
    //     "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
    // });
  }, []);
  return (
    <div id="parent">
      <div id="wide">
        <h2>{tailgate.tailgateName}</h2>
        <h4>{tailgate.message}</h4>
        <IndividualTailgate
          tailgateInfo={{ location: tailgate.location, time: tailgate.time }}
          navigate={() => {}}
        />
        {/* <Button colorScheme="blue" size="xl">
          Cancel
        </Button>
        <Button colorScheme="blue" size="xl">
          Submit
        </Button> */}
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Button
          </Button>
          <Button colorScheme="teal" variant="link">
            Button
          </Button>
        </Stack>
      </div>
      <div id="narrow">
        <h1>Right</h1>
      </div>
    </div>
  );
}

export default ViewIndividualTailgate;
