import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Heading";
import Form from "./Component/Form";
import TodoList from "./Component/todoList";
const App = () => {
  const [Listobject, setList] = useState([]);

  const [text, submitText] = useState("");
  return (
    <div className="Container flex">
      <Header />
      <Form submitTextFun={submitText} ListObj={setList} list={Listobject} />
      {Listobject.map((list) => (
        <TodoList
          setList={setList}
          todo={list}
          List={Listobject}
          key={list.id}
          listKey={list.id}
        />
      ))}
    </div>
  );
};
export default App;
