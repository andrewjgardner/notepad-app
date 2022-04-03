import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import storage from '../services/storage'

export function AddEditForm(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const title = storage.getSessionStorage(props.keys.title, '')
        const content = storage.getSessionStorage(props.keys.content, '')

        setTitle(title)
        setContent(content)
    }, [])
    
    useEffect(() => {
        if (props.item) {
            setTitle(props.item.title)
            setContent(props.item.content)
        }
    }, [props.item])

    function handleChange(e) {
        setTitle(e.target.value)
        storage.setSessionStorage(props.keys.title, e.target.value)
    }

    function handleContent(e) {
        setContent(e.target.value)
        storage.setSessionStorage(props.keys.content, e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        storage.setSessionStorage(props.keys.title, '')
        storage.setSessionStorage(props.keys.content, '')
        props.handleSubmit({ title, content })
    }

    return (
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
    )
}
