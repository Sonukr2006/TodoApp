import React from 'react'
import style from './Heading.module.css'

const Heading = () => {
  return (
    <h1 className={`${style.color} mt-5`}>Welcome, <span className={style.bg}>User 🧐 </span></h1>
  ) 
}

export default Heading  