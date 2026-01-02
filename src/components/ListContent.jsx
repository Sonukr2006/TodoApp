import React from "react";

const ListContent = ({item}) => {
  return (
    <>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.task}</div>
        {item.dis}
      </div>
    </>
  );
};

export default ListContent;
