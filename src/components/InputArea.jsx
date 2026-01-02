import React from "react";
import style from "./InputArea.module.css";
import AddButton from "./AddButton";
import { useState } from "react";

const InputArea = ({task, dis, handlleChange}) => {


  return (
    <>
      <div className="d-flex flex-column">
        <label
          htmlFor="exampleFormControlInput1"
          className={`${style.align} form-label text-primary-emphasis`}
        >
          Task :-
        </label>
        <input
          name="task"
          value={task || ""}
          className="border border-1 p-3 border-success rounded"
          placeholder="Enter Task"
          onChange={handlleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label
          htmlFor="exampleFormControlInput1"
          className={`${style.align} form-label text-primary-emphasis`}
        >
          Description :-
        </label>
        <input
          name="dis"
          value={dis || ""}
          className="border border-1 p-3 rounded"
          placeholder="About task"
          onChange={handlleChange}
        />
      </div>
    </>
  );
};

export default InputArea;
