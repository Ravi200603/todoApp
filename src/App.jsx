import { useState, useEffect } from 'react'
import Todos from './components/Todos'
import './App.css'



function App() {
  const addTodo = (e)=>{
    e.preventDefault();
    if(inputText.trim()!== ''){
      setTodos([...todos, { text: inputText, id: Date.now()}])
    }
    setInputText("");
  }

  const deleteTodo = (id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id ))
  }
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  

  // Set into storage 
  useEffect(()=>{
    
    localStorage.setItem("todos", JSON.stringify(todos));
    
  },[todos])

  // //get from storage
  useEffect(()=>{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    
  }, [])
  
  return (
    <div className='overflow-x-hidden h-screen'>
      <div className=' md:w-4/5 h-15 md:my-4 mx-2 m-2 rounded-md shadow-md md:mx-auto'>
        <input className='w-3/4 h-full text-center rounded-tl-md rounded-bl-md border-2 border-black outline-none' placeholder="Enter task here " type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
        <input className='w-1/4 h-full bg-black rounded-tr-md  rounded-br-md text-white submit-btn' type="submit" onClick={(e)=>{addTodo(e)}}/>
      </div>
      
    <div className={`border-2 m-2 rounded-md shadow-md p-2 md:w-4/5 md:mx-auto overflow-auto max-h-[70vh] ${todos.length ===0 ?'hidden' : ''} `}>
          <h1 className={` mx-auto mb-7 md:mx-12 md:my-4 text-2xl  font-bold `}>Things to be done today : </h1>


    <div className='grid md:grid-cols-3 grid-cols-1 m-auto gap-4'>
      
      {todos.map((todo)=>(<Todos  key={todo.id} inputText={todo.text} onDelete = {deleteTodo} id={todo.id}></Todos>))}
      </div>
    </div>
    </div>
  )
}

export default App
