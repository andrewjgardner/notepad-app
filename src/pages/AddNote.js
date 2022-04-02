import { Container, Button, Form, Row } from 'react-bootstrap'
import storage from '../services/storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export function AddNote(props) {
    const [title, setInput] = useState('')
    const [content, setContent] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const title = storage.getSessionStorage('title', '')
        const content = storage.getSessionStorage('content', '')
        setInput(title)
        setContent(content)
    }, [])

    function handleChange(e) {
        setInput(e.target.value)
        storage.setSessionStorage('title', e.target.value)
    }

    function handleContent(e) {
        setContent(e.target.value)
        storage.setSessionStorage('content', e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.handleSubmit({ title, content })
        setInput('')
        storage.setSessionStorage('title', '')
        setContent('')
        storage.setSessionStorage('content', '')
        navigate('/')
    }

    return (
        <Container>
            <Row>
                <h1>Home</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formInput">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={handleChange}
                            placeholder="Enter text"
                        />
                    </Form.Group>
                    <Form.Group controlId="formcontent">
                        <Form.Label>content</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={content}
                            onChange={handleContent}
                            placeholder="Enter content"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}
