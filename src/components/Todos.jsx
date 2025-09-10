import React from 'react'
import { useState } from 'react';
function Todos({
    id ='',
    editable= false,
    inputText = "Hello Ji",
    toggles = false,
    onDelete
}) 
{ const [text, setText] = useState(inputText);
  const [iseditable, setIseditable] = useState(editable);
  const [toggle, setToggle] = useState(toggles);
  const modifyEdit = ()=>{
    setIseditable((prev)=>!prev);
  }
  const handleDelete = ()=>{
    onDelete(id);
  }
  const toggleChange = (e)=>{
    setToggle(e.target.checked)
  }
  
  return (
    <div className={`grid grid-cols-8  items-center h-8 shadow-md rounded-md ${toggle ? ' bg-green-300 ': ''}`}>
        <input className={`col-span-5 gap-4 text-center ${toggle ? 'line-through text-gray-600 ': ''} ${iseditable ?  '': 'outline-none cursor-pointer' }`} type="text" value={text} placeholder='Hello Ji' readOnly={!iseditable} 
        onChange={(e)=>setText(e.target.value)}/>
        <div className={` ${iseditable ?  'hidden': '' } cursor-pointer` } onClick={modifyEdit}>✏️</div>
        <div className={`${iseditable ?  '': 'hidden' } cursor-pointer`} onClick={modifyEdit}>📁</div>
        <div className=' cursor-pointer' onClick={handleDelete}> ❌ </div>
        <input className=' cursor-pointer' type="checkbox" checked={toggle} onChange={(e)=>toggleChange(e)}/>
      </div>
  )
}

export default Todos
