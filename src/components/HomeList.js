import { Row, ListGroup } from 'react-bootstrap'
import { CustomRow } from './CustomRow'
import uuid from '../services/uuid'

export function HomeList(props) {
    const listSplitOnDays = splitArrayOnDays(props.list)

    function handleDelete(p) {
        props.handleDelete(p)
    }

    function splitArrayOnDays(array) {
        let days = []
        let day = []
        array.forEach((p) => {
            if (day.length === 0) {
                day.push(p)
            } else {
                if (
                    new Date(day[0].date).getDate() ===
                    new Date(p.date).getDate()
                ) {
                    day.push(p)
                } else {
                    days.push(day)
                    day = []
                    day.push(p)
                }
            }
        })
        days.push(day)
        return days
    }

    return listSplitOnDays.map((day) => (
        <Row>
            <h2>{new Date(day[0].date).toLocaleDateString()}</h2>
            <ListGroup key={uuid.generateUUID()}>
                {day.map((p) => (
                    <CustomRow handleDelete={handleDelete} {...p} />
                ))}
            </ListGroup>
        </Row>
    ))
}
