import { Button, Container, ListGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { CustomRow } from '../components'

export function Home(props) {
    const navigate = useNavigate()

    function handleDelete(p) {
        props.handleDelete(p)
    }

    return (
        <Container>
            <Row>
                <h1>Home</h1>
                <Button onClick={() => navigate('/add')}>Add Note</Button>
            </Row>
            <Row>
                <ListGroup>
                    {props.list.map((item, index) => (
                        <CustomRow
                            index={index}
                            title={item.title}
                            content={item.content}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ListGroup>
            </Row>
        </Container>
    )
}
