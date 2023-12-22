import React, { useState } from 'react'

const AddNpc = () => {

  const[npc,setNpc] = useState({
    name: "",
    profession: "",
  });


  const handleChange = (e) => {
    setNpc(prev => ({...prev, [e.target.name]: e.target.value}))
    console.log(npc);
  }
  return (
    <div className="form">
      <h1>Add new Npc</h1>
      <input type="text" placeholder='name' onChange={ handleChange } name="name"/>
      <input type="text" placeholder='profession' name="profession"/>
    </div>
  )
  }

export default AddNpc