import { Button, Container, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import storage from "../services/storage";

export default function Home() {
  const [title, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  useEffect (() => {
    const list = storage.getLocalStorage("list", []);
    setList(list);
    const title = storage.getSessionStorage("title", "");
    setInput(title);
    const description = storage.getSessionStorage("description", "");
    setDescription(description);
  }, [])

  function handleChange(e) {
    setInput(e.target.value);
    storage.setSessionStorage("title", e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
    storage.setSessionStorage("description", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, { title, description }]);
    storage.setLocalStorage("list", [...list, { title, description }]);
    setInput("");
    storage.setSessionStorage("title", "");
    setDescription("");
    storage.setSessionStorage("description", "");	
  }

  function handleClear() {
    setList([]);
    storage.setLocalStorage("list", []);
  }
  
  return (
    <Container>
      <Row>
        <h1>Home</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formInput">
            <Form.Label>Input</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={handleChange}
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={handleDescription}
              placeholder="Enter description"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      <Row>
        <Button variant="danger" onClick={handleClear}>Clear</Button>
      </Row>
      <Row>
        <ListGroup>
          {list.map((item, index) => (
            <ListGroupItem>
              {index}, {item.title}, {item.description}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
}
