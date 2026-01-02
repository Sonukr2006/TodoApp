import React from "react";
import style from "./Output.module.css";
import DeleteButton from './DeleteButton'
import ListContent from "./ListContent";


const OutputItem = ({ list, deleteHandle }) => {
  return (
    <>
      <li className={`list-group-item d-flex justify-content-between align-items-start ${style.hover}`}>
        <ListContent item={list} />
        <DeleteButton deleteHandle={deleteHandle} />
      </li>
    </>
  );
};

export default OutputItem;
