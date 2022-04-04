import { Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import { AddEditForm } from '../components'
import storage from '../services/storage'

export function EditNote(props) {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const keys = { title: 'edittitle', content: 'editcontent' }
    const list = storage.getLocalStorage('list', [])
    const item = list.find((item) => item.id === id)
    
    function handleSubmit(p) {
        props.handleEdit(id, p)
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <AddEditForm
                    handleSubmit={handleSubmit}
                    keys={keys}
                    item={item}
                    label="Save Note"
                />
            </Row>
        </Container>
    )
}
