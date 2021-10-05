import React, { useState } from "react";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import './App.css';


const App = () => {
  // let message = "Hello Word com JS";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
  ])

  const handleTaskAddition = (taksTitle) => {
    // vai pegar o inputDate do AddTask e adicionar em taksTitle
 
    const newTaks = [...tasks, {
      title: taksTitle,
      id: Math.random(10),
      completed: false,
    }]
      setTasks(newTaks)
      //vai setar o state adicionado
      // uma nova tarega com os dados trabalhados até chegara qui
  }

  return (
      <>
          <div className="container">
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks  tasks={tasks}/>
          </div>
           
      </>
    )
     
  
}

export default App;