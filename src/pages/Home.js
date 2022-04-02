import {
    Button,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
} from 'react-bootstrap'
import { useNavigate } from 'react-router'

export function Home(props) {
    const navigate = useNavigate()

    return (
        <Container>
            <Row>
                <h1>Home</h1>
                <Button onClick={() => navigate('/add')}>Add Note</Button>
            </Row>
            <Row>
                <ListGroup>
                    {props.list.map((item, index) => (
                        <ListGroupItem>
                            {index}, {item.title}, {item.description}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    )
}
