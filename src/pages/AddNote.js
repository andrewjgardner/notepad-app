import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AddEditForm } from '../components'

export function AddNote(props) {
    const navigate = useNavigate()
    const keys = { title: 'addtitle', content: 'addcontent' }

    function handleSubmit(p) {
        props.handleAdd(p)
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <AddEditForm handleSubmit={handleSubmit} keys={keys} />
            </Row>
        </Container>
    )
}
