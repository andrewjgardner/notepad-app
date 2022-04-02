import { Button, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export function CustomRow(props) {
    let navigate = useNavigate()

    return (
        <ListGroupItem>
            {props.index}, {props.title}, {props.content}
            <Button onClick={() => navigate(`/edit/${props.index}`)}>
                Edit
            </Button>
            <Button onClick={() => props.handleDelete(props.index)}>
                Delete
            </Button>
        </ListGroupItem>
    )
}
