import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, AddNote, EditNote } from '../pages'
import storage from '../services/storage'

export function Router(props) {
    useEffect(() => {
        storage.setSessionStorage('index', -1)
        storage.setSessionStorage('title', '')
        storage.setSessionStorage('content', '')
    }, [])

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
            <Route path="/add" element={<AddNote handleAdd={handleAdd} />} />
            <Route
                path="/edit/:index"
                element={<EditNote handleEdit={handleEdit} />}
            />
        </Routes>
    )
}
