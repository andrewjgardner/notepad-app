import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
                <h1>NotePad</h1>
            </Navbar.Brand>
          </LinkContainer>
      </Container>
    </Navbar>
  );
}
