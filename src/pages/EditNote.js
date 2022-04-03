import { Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import { AddEditForm } from '../components'
import storage from '../services/storage'

export function EditNote(props) {
    const navigate = useNavigate()
    const params = useParams()
    const index = params.index
    const keys = { title: 'edittitle', content: 'editcontent' }
    const list = storage.getLocalStorage('list', [])
    const item = list[index]

    function handleSubmit(p) {
        props.handleEdit(index, p)
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <AddEditForm
                    handleSubmit={handleSubmit}
                    keys={keys}
                    item={item}
                />
            </Row>
        </Container>
    )
}
