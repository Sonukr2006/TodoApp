import React from 'react'

const AddButton = ({AddHandler}) => {
  return (
    <div>
        <button type="button" className="btn btn-primary btn-lg px-5" onClick={AddHandler}>ADD</button>
    </div>
  )
}

export default AddButton