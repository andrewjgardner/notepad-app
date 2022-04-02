import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AddEditForm } from '../components'

export function AddNote(props) {
    const navigate = useNavigate()

    function handleSubmit(p) {
        props.handleSubmit(p)
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <AddEditForm handleSubmit={handleSubmit} />
            </Row>
        </Container>
    )
}
