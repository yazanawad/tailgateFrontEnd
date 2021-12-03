import { useEffect, useState, useRef } from "react";
import IndividualTailgate from "../../components/individualTailgate";
import { Input } from "@chakra-ui/react";
export default function ViewTailgates(props) {
  const { setLogin } = props;
  const [search, setSearch] = useState([
    {
      tailgateName: "CASA",
      time: "1pm-3pm",
      location: "Mccarthy Quad",
      spots: 3,
      message:
        "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
    },
  ]);
  const tailgates = useRef();
  useEffect(() => {
    tailgates.current = [
      {
        tailgateName: "CASA",
        time: "1pm-3pm",
        location: "Mccarthy Quad",
        spots: 3,
        message:
          "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
      },
      {
        tailgateName: "The boys",
        time: "1pm-3pm",
        location: "Mccarthy Quad",
        spots: 3,
        message:
          "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
      },
      {
        tailgateName: "SEP",
        time: "1pm-3pm",
        location: "Mccarthy Quad",
        spots: 3,
        message:
          "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
      },
    ];
    console.log(tailgates.current);
    setSearch(tailgates.current);
  }, []);

  const signOut = () => {
    setLogin(false);
  };

  const renderTailgates = () => {
    if (search.length) {
      return (
        <div>
          {search.map((tailgate) => (
            <IndividualTailgate
              key={tailgate.tailgateName}
              tailgateInfo={tailgate}
            />
          ))}
        </div>
      );
    } else {
      return <h1>No Tailgates Found</h1>;
    }
  };

  const searchVals = (value) => {
    if (!value) {
      setSearch(tailgates.current);
    } else {
      const newTailgates = tailgates.current.filter((val) => {
        if (val.tailgateName.toLowerCase().includes(value.toLowerCase()))
          return val;
      });
      setSearch(newTailgates);
    }
  };

  return (
    <div className="contain" style={{ margin: "auto" }}>
      <h1>View Tailgates</h1>
      <Input
        onChange={(e) => searchVals(e.target.value || null)}
        placeholder="Search Tailgates"
        size="md"
        style={{ width: "400px", margin: "20px" }}
      />
      {renderTailgates()}
      <input type="button" value="Sign Out" onClick={signOut} />
    </div>
  );
}
