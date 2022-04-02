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
        const description = props.description

        setList([...list, { title, description }])
        storage.setLocalStorage('list', [...list, { title, description }])
    }

    return (
        <div className="App">
            <Header setList={setList} />
            <Router list={list} setList={setList} handleSubmit={handleSubmit} />
        </div>
    )
}
export default App
