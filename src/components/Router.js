import { Routes, Route } from 'react-router-dom'
import { Home, AddNote, EditNote } from '../pages'

export function Router(props) {
    function setList(p) {
        const list = p.list
        props.setList(list)
    }

    function handleSubmit(p) {
        props.handleSubmit(p)
    }

    function handleDelete(p) {
        props.handleDelete(p)
    }

    function handleEdit(p) {
        props.handleEdit(p)
    }

    return (
        <Routes>
            <Route
                index
                element={
                    <Home
                        list={props.list}
                        setList={setList}
                        handleDelete={handleDelete}
                    />
                }
            />
            <Route
                path="/add"
                element={<AddNote handleSubmit={handleSubmit} />}
            />
            <Route
                path="/edit/:index"
                element={<EditNote handleEdit={handleEdit} />}
            />
        </Routes>
    )
}
