import React, { useState } from 'react';

import Button from './Button';

import "./AddTask.css"


const AddTask = ({handleTaskAddition}) => {
    const [inputDate, setInputDate] = useState('')
    //tudo que o usuario digitar vai estar no inputDate
    // o setIputDate( vai estar "lendo" o que for digitado
    const handleInputChange = (e) => {
        setInputDate(e.target.value);

    };
    const handleAddTaskClick = () => {
        //handleAddTaskClick O evento click no botão adicionar 
        handleTaskAddition(inputDate);
        //Apos clicar o valor de inputDate Sera enviado para handleTaskAddition 
        setInputDate('') //aqui deixa o setInputDate favio apos setar
    };
    return(
        <div className="add-task-container">
            <input onChange={handleInputChange} 
            value={inputDate}
            className="add-task-input" 
            type="text" 
            />
            ;
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>

    );
    
};
 
export default AddTask;