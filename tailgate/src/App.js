//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import { useState } from "react";
import InfoPage from "./pages/InfoPage/InfoPage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ViewTailgates from "./pages/LoggedIn/ViewTailgates";
import CreateTailgate from "./pages/LoggedIn/CreateTailgate";
function HeaderNav() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Tailgates</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">View All Tailgates</Nav.Link>
          <Nav.Link href="/viewTailgates">Create A Tailgate</Nav.Link>
          <Nav.Link href="/createTailgtes">View Your Tailgate</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function App() {
  const [login, setLogin] = useState(false);
  // router if user is not loggedIn
  if (!login) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn setLogin={setLogin} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // router when user is logged in
  return (
    <>
      <HeaderNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfoPage setLogin={setLogin} />} />
          <Route path="/viewTailgates" element={<ViewTailgates />} />
          <Route path="/createTailgtes" element={<CreateTailgate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
