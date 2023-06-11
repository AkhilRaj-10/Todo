import React, { useState } from "react";

const TodoList = ({ setList, todo, listKey, List }) => {
  const [isChecked, setIsChecked] = useState(false);
  const RemoveHanding = () => {
    setList(List.filter((el) => el.id !== listKey));
  };
  const checkBoxHanding = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="TodoContainer" key={listKey}>
        <div className="Updateinput">
          <input
            type="text"
            value={todo.name}
            disabled
            className={isChecked === true ? "strikethrough" : ""}
            onChange={(e) => {}}
          />
        </div>
        <span onClick={checkBoxHanding}>
          <i
            className={
              isChecked === true
                ? "fa-solid fa-square-check"
                : "fa-regular fa-square"
            }
          ></i>
        </span>
        <span className="removeList" onClick={RemoveHanding}>
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
};
export default TodoList;
