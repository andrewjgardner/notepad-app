import { Button, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import storage from "../services/storage";

export function Header() {
  function handleClear() {
    storage.setLocalStorage("list", []);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <h1>NotePad</h1>
          </Navbar.Brand>
        </LinkContainer>
        <Button onClick={handleClear}>Clear</Button>
      </Container>
    </Navbar>
  );
}
