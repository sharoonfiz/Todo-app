

import './index.scss'
import Form from './Components/Form'
import Todolist from './Components/Todolist'
import { useState } from 'react'



function App() {

  const [inputText, setInputText] = useState("")
  const [task, setTask] = useState([])
  const [status, setStatus] = useState('')
  const [filteredTodo, setFilteredTodo] = useState([])
  const [editTask, setEdittask] = useState({})




  console.log(filteredTodo);
  console.log(status);

  // console.log(submitData);
  // console.log(inputText);


  return (

    <div className="app">

      <Form {...{ inputText, setInputText, status, setStatus, task, setTask, setFilteredTodo, editTask, setEdittask }} />

      <Todolist {...{ task, setTask, filteredTodo, setEdittask }} />


    </div>

  )
}

export default App
