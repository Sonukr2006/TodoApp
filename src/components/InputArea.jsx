import React from "react";
import style from "./InputArea.module.css";
import AddButton from "./AddButton";
import { useState } from "react";

const InputArea = ({taskRef, disRef}) => {


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
          ref={taskRef}
          className="border border-1 p-3 border-success rounded"
          placeholder="Enter Task"
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
          ref={disRef}
          className="border border-1 p-3 rounded"
          placeholder="About task"
        />
      </div>
    </>
  );
};

export default InputArea;
