import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { HomeList } from '../components'

export function Home(props) {
    const navigate = useNavigate()

    function handleDelete(p) {
        props.handleDelete(p)
    }

    let displayList
    if (props.list.length === 0) {
        displayList = <h3>No notes yet</h3>
    } else {
        displayList = <HomeList list={props.list} handleDelete={handleDelete} />
    }

    return (
        <Container>
            <Row>
                <h1>Home</h1>
                <Button onClick={() => navigate('/add')}>Add Note</Button>
            </Row>
            <Row>{displayList}</Row>
        </Container>
    )
}
