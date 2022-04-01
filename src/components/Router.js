import { Routes, Route } from "react-router-dom";
import {Home, AddNote} from "../pages";

export function Router(props) {
  function setList(p) {
    const list = p.list;
    p.setList(list);
  }  

  function handleSubmit(p) {
    props.handleSubmit(p);
  }

  return (
    <Routes>
      <Route path="/" element={<Home list={props.list} setList={setList}/>} />
      <Route path="/add" element={<AddNote handleSubmit={handleSubmit}/>} />
    </Routes>
  );
}
