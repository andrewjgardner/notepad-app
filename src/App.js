import { useEffect, useState } from 'react'
import storage from './services/storage'
import { Header, Router } from './components'

function App() {
    const [list, setList] = useState([])

    useEffect(() => {
        const list = storage.getLocalStorage('list', [])
        setList(list)
    }, [])

    function handleSubmit(props) {
        const title = props.title
        const content = props.content

        setList([...list, { title, content }])
        storage.setLocalStorage('list', [...list, { title, content }])
    }

    function handleDelete(index) {
        const newList = list.filter((item, i) => i !== index)
        setList(newList)
        storage.setLocalStorage('list', newList)
    }

    return (
        <div className="App">
            <Header setList={setList} />
            <Router list={list} setList={setList} handleSubmit={handleSubmit} handleDelete={handleDelete} />
        </div>
    )
}
export default App
