import { useEffect, useState, useRef } from "react";
import IndividualTailgate from "../../components/individualTailgate";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getUserTailgate } from "../../api";
export default function ViewYourTailgates(props) {
  const navigate = useNavigate();
  const { setLogin, userID } = props;
  const [search, setSearch] = useState([]);
  const tailgates = useRef();
  useEffect(() => {
    console.log("IN RIGHT PAGE");
    const getTG = async () => {
      const data = await getUserTailgate(userID.current);
      console.log(data.length);
      tailgates.current = data;
      console.log(tailgates.current);
      setSearch([...data]);
    };
    getTG();
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
              navigate={navigate}
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
        if (
          val.TailgateName.toLowerCase().includes(value.toLowerCase()) ||
          val.Location.toLowerCase().includes(value.toLowerCase())
        )
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
