import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import { AddEditForm } from '../components'
import storage from '../services/storage'

export function EditNote(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const params = useParams()
    const index = params.index

    useEffect(() => {
        const list = storage.getLocalStorage('list', [])
        storage.setSessionStorage('index', index)
        storage.setSessionStorage('title', list[index].title)
        storage.setSessionStorage('content', list[index].content)
        setTitle(list[index].title)
        setContent(list[index].content)
    }, [])

    function handleEdit(p) {
        props.handleEdit(p)
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <AddEditForm
                    handleEdit={handleEdit}
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                />
            </Row>
        </Container>
    )
}
