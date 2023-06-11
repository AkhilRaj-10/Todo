import React, { useState } from "react";
const Select = () => {
  const [value, setOption] = useState("All");
  const OptionHanding = (option) => {
    setOption(option);
  };
  const [toggle, setToggle] = useState(true);
  const OptionToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ul
      name="todo-option"
      id={toggle === true ? "hidden" : ""}
      className="todo-option"
    >
      <span onClick={OptionToggle}>{value}</span>
      <div onClick={OptionToggle}></div>
      <li
        value="all"
        onClick={() => {
          OptionHanding("All");
        }}
      >
        All
      </li>
      <li
        value="completed"
        onClick={() => {
          OptionHanding("Completed");
        }}
      >
        Completed
      </li>
      <li
        value="uncompleted"
        onClick={() => {
          OptionHanding("Uncompleted");
        }}
      >
        Uncompleted
      </li>
    </ul>
  );
};
export default Select;
