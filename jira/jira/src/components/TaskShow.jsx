import React, { useState } from 'react';
import TaskCreate from './TaskCreate';

function TaskShow({ task, onDelete, onUpdate }) {

    const [showEdit, setShowEdit] = useState(false);

    const handlerDeleteClick = () => {

        onDelete(task.id);

    }

    const handlerEditClick = () => {

        setShowEdit(!showEdit);

    }

    const handlerSubmit = (id,updatedTitle,UpdatedTaskDesc) => {

        setShowEdit(false);

        onUpdate(id, updatedTitle, UpdatedTaskDesc);
    }

    return (

        <div className="Task-Show">

            {showEdit ? (<TaskCreate task={task} taskFormUpdate={true} onUpdate={handlerSubmit }></TaskCreate>) : (
                <div>

                    <h3 className="Task-Title">Goreviniz</h3>

                    <p>{task.title}</p>

                    <h3 className="Task-Title">Yapilacaklar</h3>

                    <p>{task.taskDesc}</p>

                    <div>

                        <button className="Task-Delete" onClick={handlerDeleteClick}>Sil</button>

                        <button className="Task-Edit" onClick={handlerEditClick}>Gunceller</button>

                    </div>

                </div>
            )}
        </div>
    );
}

export default TaskShow;