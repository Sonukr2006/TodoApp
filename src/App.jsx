import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Heading from "./components/Heading";
import Inputfeild from "./components/Inputfeild";
import OutputField from "./components/OutputField";
import { useState, useRef } from "react";
import Errormess from "./components/Errormess";
import Suggestion from "./components/Suggestion";

const App = () => {
  const [list, setlist] = useState([]);
  const taskReference = useRef();
  const disReference = useRef();


  const taskhandle = (e) => {
    if (!taskReference.current.value) {
      if (taskReference.current.value === "") {
        alert("Add Task field!");
      }
      return;
    }
    if (!disReference.current.value) {
      if (dis === "") {
        alert("Add Discription field! ");
      }
    }
    const task = taskReference.current?.value?.trim() ?? "";
    const dis = disReference.current?.value?.trim() ?? "";
    setlist((prev) => [...prev, { task, dis }]);
    disReference.current.value = "";
    taskReference.current.value = "";
  };

  
  const deleteHandle = (index) => {
    setlist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Heading />
      <Inputfeild
        taskRef={taskReference}
        disRef={disReference}
        Addhandle={taskhandle}
      />
      {list.length === 0 ? 
      <Errormess /> : <Suggestion/>}
      <OutputField List={list} deleteHandle={deleteHandle}/>
    </>
  );
};

export default App;
