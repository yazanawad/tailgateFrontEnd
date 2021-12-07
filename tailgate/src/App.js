//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useHistory } from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import { useState, useRef } from "react";
import InfoPage from "./pages/InfoPage/InfoPage";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ViewTailgates from "./pages/LoggedIn/ViewTailgates";
import CreateTailgate from "./pages/LoggedIn/CreateTailgate";
import ErrorPage from "./pages/ErrorPage";
import ViewIndividualTailgate from "./pages/LoggedIn/ViewIndividualTailgate";
import ViewGuestTailgate from "./pages/Guest/ViewGuestTailgate";
import ProfilePage from "./pages/LoggedIn/Profile";
import TailgateInfo from "./pages/LoggedIn/TailgateInfo";
import EditTailgate from "./pages/LoggedIn/EditTailgateInfo";
function HeaderNav() {
  console.log("CLICKED");
  let navigate = useNavigate();
  const navTo = (path) => {
    navigate(path);
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand onClick={() => navTo("/")}>Tailgates</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navTo("/viewAllTailgates")}>
            View All Tailgates
          </Nav.Link>
          <Nav.Link onClick={() => navTo("/createTailgates")}>
            Create A Tailgate
          </Nav.Link>
          <Nav.Link onClick={() => navTo("/viewTailgates")}>
            View Your Tailgate
          </Nav.Link>
          <Nav.Link onClick={() => navTo("/profile")}>Profile Page</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function App() {
  const [login, setLogin] = useState(false);
  const userID = useRef(-1);
  // router if user is not loggedIn
  if (!login) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SignIn userID={userID} setLogin={setLogin} />}
          />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/viewGuestTailgate" element={<ViewGuestTailgate />} />
          <Route
            path="*"
            element={<SignIn userID={userID} setLogin={setLogin} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }

  // router when user is logged in
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<InfoPage setLogin={setLogin} />} />
          <Route
            path="/viewAllTailgates"
            element={<ViewTailgates setLogin={setLogin} />}
          />
          <Route
            path="/createTailgates"
            element={<CreateTailgate userID={userID} setLogin={setLogin} />}
          />
          <Route
            path="/viewTailgates/:tailgateName"
            element={<ViewIndividualTailgate setLogin={setLogin} />}
          />
          <Route
            path="/viewAllTailgates/:tailgateName"
            element={<TailgateInfo setLogin={setLogin} />}
          />
          <Route
            path="/profile"
            element={<ProfilePage setLogin={setLogin} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
