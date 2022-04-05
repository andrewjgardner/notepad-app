import { Button, Col, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export function CustomRow(props) {
    let navigate = useNavigate()

    const dateTime = new Date(props.date)

    return (
        <ListGroup.Item
            className="d-flex justify-content-between align-items-center"
            action={true}
            onClick={() => navigate(`/edit/${props.id}`)}
        >
            <Col className="fs-3">{dateTime.toLocaleTimeString()}</Col>
            <Col className="text-break text-truncate fs-1 pe-4">
                {props.title}
            </Col>
            <Col className="text-break text-truncate align-bottom">
                {props.content}
            </Col>
            <Button>Master Button</Button>
            <Col className="d-flex justify-content-end">
                <Button
                    variant="outline-danger"
                    onClick={(e) => {
                        e.stopPropagation()
                        props.handleDelete(props.id)
                    }}
                >
                    Delete
                </Button>
            </Col>
        </ListGroup.Item>
    )
}
