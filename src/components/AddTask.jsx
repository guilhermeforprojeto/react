import React, { useState } from 'react';

import "./AddTask.css"
import Button from './Button';

const AddTask = () => {
    const [inputDate, setIputDate] = useState('')

    const handleInputChange = (e) => {
            setIputDate(e.target.value)

    }
    return(
        <div className="add-task-container">
            <input onChange={handleInputChange} className="add-task-input" type="text" />
            <div className="add-task-button-container">
            <Button>Adicionar</Button>
            </div>
        </div>

    );
    
};
 
export default AddTask;