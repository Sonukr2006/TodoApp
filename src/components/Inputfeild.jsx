import React from "react";
import style from "./Input.module.css";
import InputArea from "./InputArea";
import AddButton from "./AddButton";
import styles from './InputField.module.css'

const Inputfeild = ({taskRef, disRef,Addhandle}) => {

  return (
    <div className="container text-center border rounded ">
      <div className="row m-3">
        <div className="col-sm-8 p-3 mb-2 text-white d-flex flex-column gap-2 rounded"><InputArea taskRef={taskRef} disRef={disRef} /></div>
        <div className={`${styles.styles} col-sm-4 p-3 mb-2 text-white m-0`}><AddButton AddHandler={Addhandle}/></div>

      </div>
    </div>
  );
};

export default Inputfeild;
 