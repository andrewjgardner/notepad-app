import { Button, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import storage from "../services/storage";

export function Header(props) {
  function handleClear() {
    props.setList([]);
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
        <Button variant="danger" onClick={handleClear}>Clear</Button>
      </Container>
    </Navbar>
  );
}
