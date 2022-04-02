import { Button, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export function CustomRow(props) {
    return (
        <ListGroupItem>
            {props.index}, {props.title}, {props.content}
            <Button onClick={() => useNavigate(`/edit/${props.index}`)}>
                Edit
            </Button>
            <Button onClick={() => props.handleDelete(props.index)}>
                Delete
            </Button>
        </ListGroupItem>
    )
}
