import React, { useState } from "react";
import Select from "./Select";
const Form = ({ submitTextFun, ListObj, list }) => {
  const [inputText, setText] = useState(" ");
  const inputHanding = (e) => {
    setText(e.target.value);
  };
  const buttonHanding = (e) => {
    submitTextFun(inputText);
    if (inputText.trim().length !== 0) {
      ListObj([
        ...list,
        {
          name: inputText,
          id: Math.random() * 200
        }
      ]);
    }
    setText("");
  };
  const formHanding = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form-container" onSubmit={formHanding}>
      <div className="flex">
        <div className="InputContainer">
          <input
            type="text"
            className="todo-input"
            onChange={inputHanding}
            value={inputText}
          />
          <button className="todo-button" onClick={buttonHanding} type="submit">
            <i className="fa-solid fa-square-plus"></i>
          </button>
        </div>
      </div>
      <Select />
    </form>
  );
};
export default Form;
