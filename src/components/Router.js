import { Routes, Route } from 'react-router-dom'
import { Home, AddNote, EditNote } from '../pages'

export function Router(props) {
    function setList(p) {
        const list = p.list
        props.setList(list)
    }

    function handleAdd(p) {
        props.handleAdd(p)
    }

    function handleDelete(p) {
        props.handleDelete(p)
    }

    function handleEdit(i, p) {
        props.handleEdit(i, p)
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
            <Route path="/add" element={<AddNote handleAdd={handleAdd} />} />
            <Route
                path="/edit/:id"
                element={<EditNote handleEdit={handleEdit} />}
            />
        </Routes>
    )
}
