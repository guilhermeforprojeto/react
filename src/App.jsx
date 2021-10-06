import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

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
                render={() => (
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
      </div>
    </Router>
  );
};

export default App;
