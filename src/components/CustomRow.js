import { Button, ListGroup } from 'react-bootstrap'
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
            {dateTime.toLocaleTimeString()}, {props.title}, {props.content}
            <Button
                onClick={(e) => {
                    e.stopPropagation()
                    props.handleDelete(props.id)
                }}
            >
                Delete
            </Button>
        </ListGroup.Item>
    )
}
