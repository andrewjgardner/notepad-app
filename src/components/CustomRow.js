import { Button, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export function CustomRow(props) {
    let navigate = useNavigate()

    return (
        <ListGroup.Item
            className='d-flex justify-content-between align-items-center'
            action={true}
            onClick={() => navigate(`/edit/${props.index}`)}
        >
            {props.index}, {props.title}, {props.content}
            <Button onClick={() => props.handleDelete(props.index)}>
                Delete
            </Button>
        </ListGroup.Item>
    )
}
