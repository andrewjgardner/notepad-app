import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Navbar>
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
