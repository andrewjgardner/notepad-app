import { useEffect, useState } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
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
        <Form
            className="border bg-light bg-gradient py-4 px-5 mt-4"
            onSubmit={handleSubmit}
        >
            <Row className="pb-3">
                <Form.Group controlId="formInput">
                    <Form.Label>
                        <h2>Title</h2>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        size="lg"
                        value={title}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Row className="py-3">
                <Form.Group controlId="formcontent">
                    <Form.Label>
                        <h2>Content</h2>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        value={content}
                        onChange={handleContent}
                        placeholder="Enter content"
                    />
                </Form.Group>
            </Row>
            <Row className="py-4 px-5">
                <Button variant="primary" type="submit">
                    <h2>{props.label}</h2>
                </Button>
            </Row>
        </Form>
    )
}
