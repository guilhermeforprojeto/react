import React, { useState } from 'react';

import Button from './Button';

import "./AddTask.css"


const AddTask = ({handleTaskAddition}) => {
    const [inputDate, setIputDate] = useState('')
    //tudo que o usuario digitar vai estar no inputDate
    // o setIputDate( vai estar "lendo" o que for digitado
    const handleInputChange = (e) => {
            setIputDate(e.target.value);

    };
    const handleAddTaskClick = () => {
        //handleAddTaskClick O evento click no botão adicionar 
        handleTaskAddition(inputDate);
        //Apos clicar o valor de inputDate Sera enviado para handleTaskAddition 
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