import { Button, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { HomeList } from '../components'

export function Home(props) {
    const navigate = useNavigate()

    function handleDelete(p) {
        props.handleDelete(p)
    }

    let displayList
    if (props.list.length === 0) {
        displayList = <Col className="text-center fs-2">No notes yet</Col>
    } else {
        displayList = <HomeList list={props.list} handleDelete={handleDelete} />
    }

    return (
        <Container>
            <Row className="py-4 mx-5">
                <Button onClick={() => navigate('/add')}>
                    <h2>Add Note</h2>
                </Button>
                <Button>TestThree</Button>
                <Button>Test2</Button>
            </Row>
            <Row>{displayList}</Row>
        </Container>
    )
}
