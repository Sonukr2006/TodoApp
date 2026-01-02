import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Heading from "./components/Heading";
import Inputfeild from "./components/Inputfeild";
import OutputField from "./components/OutputField";
import { useState } from "react";
import Errormess from "./components/Errormess";
import Suggestion from "./components/Suggestion";

const App = () => {
  const [list, setlist] = useState([]);
  const [task, settask] = useState();
  const [dis, setdis] = useState();

  const handlleChange = (e) => {
    const { name, value } = e.target;
    if (name === "task") {
      settask(value);
    } else if (name === "dis") {
      setdis(value);
    }
  };
  const taskhandle = () => {
    if (!task) {
      if (task === "") {
        alert("Add Task field!")
      }
      return;
    }
    if (!dis) {
      if (dis === "") {
        alert("Add Discription field! ")
      }
    }
    setlist((pre) => [...pre, { task, dis }]);
    settask("");
    setdis("");
  };
  
  const deleteHandle = (index) => {
    setlist((prev) => prev.filter((_, i) => i !== index));
    console.log("Delete Clicked " + index);
  };

  return (
    <>
      <Heading />
      <Inputfeild
        task={task}
        dis={dis}
        handlleChange={handlleChange}
        Addhandle={taskhandle}
      />
      {list.length === 0 ? 
      <Errormess /> : <Suggestion/>}
      <OutputField List={list} deleteHandle={deleteHandle}/>
    </>
  );
};

export default App;
