import React from "react";
import style from "./Output.module.css";
import OutputItem from './OutputItem'

const OutputField = ({List, deleteHandle}) => {
  return (
    <>
      <ol className={`list-group list-group-numbered ${style.outputHeadingDiv}`}>
        {List.map((item, index)=><OutputItem key={index} list={item} deleteHandle={()=>deleteHandle(index)}/>)}       
      </ol>
    </>
  );
};

export default OutputField;
