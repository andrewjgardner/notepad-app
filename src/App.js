import { useEffect, useState } from 'react'
import storage from './services/storage'
import uuid from './services/uuid'
import { Header, Router } from './components'

function App() {
    const [list, setList] = useState([])

    useEffect(() => {
        const list = storage.getLocalStorage('list', [])
        setList(list)
    }, [])

    function handleAdd(props) {
        const id = uuid.generateUUID()
        const date = uuid.getUUIDTime(id)
        const title = props.title
        const content = props.content

        setList([...list, { id, date, title, content }])
        storage.setLocalStorage('list', [...list, { id, date, title, content }])
    }

    function handleDelete(id) {
        const newList = list.filter((item) => item.id !== id) 
        setList(newList)
        storage.setLocalStorage('list', newList)
    }

    function handleEdit(id, props) {
        const newList = list.map((item) => {
            if (item.id === id) {
                return {
                    id : item.id, 
                    date: item.date,
                    title: props.title,
                    content: props.content,
                }
            }
            return item
        })
        setList(newList)
        storage.setLocalStorage('list', newList)
    }

    return (
        <div className="App">
            <Header setList={setList} />
            <Router
                list={list}
                setList={setList}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    )
}
export default App
