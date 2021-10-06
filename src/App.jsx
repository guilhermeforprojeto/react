import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {
  // let message = "Hello Word com JS";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);
useEffect(() => {
    const fetchTask = async () => {
          const {data} = await axios.get(
            'https://jsonplaceholder.cypress.io/todos?_limit=10'
          );
        
        setTasks(data)
      }

        fetchTask();

    }, []);



  const handleTaskClick = (taskid) => {
    const newTaks = tasks.map((task) => {
      if (task.id == taskid) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTaks);
  };

  const handleTaskAddition = (taksTitle) => {
    // vai pegar o inputDate do AddTask e adicionar em taksTitle

    const newTaks = [
      ...tasks,
      {
        title: taksTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTaks);
    //vai setar o state adicionado
    // uma nova tarega com os dados trabalhados até chegara qui
  };

  const handleTaskDeletion = (taskId) => {
    const newTaks = tasks.filter((task) => task.id != taskId);

    setTasks(newTaks);
  };

  return (
    <Router>
      <div className="container">
            <Header />
            <Route
                path="/" 
                exact 
                component={() => (
                    <>
                        <AddTask handleTaskAddition={handleTaskAddition} />
                        <Tasks
                            tasks={tasks}
                            handleTaskClick={handleTaskClick}
                            handleTaskDeletion={handleTaskDeletion}
                          />
                    </>
                  )}
              />
            <Route path="/:taskTitle"exact component={TaskDetails}/>  
      </div>
    </Router>
  );
};

export default App;
