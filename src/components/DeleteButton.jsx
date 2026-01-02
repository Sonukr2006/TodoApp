import React from 'react'

const DeleteButton = ({deleteHandle}) => {
  return (
    <div><button type="button" onClick={deleteHandle} className="btn btn-danger">Delete</button></div>
  )
}

export default DeleteButton