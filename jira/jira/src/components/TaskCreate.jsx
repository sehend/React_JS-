import React from 'react';
import { useState } from 'react';

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {

    const [title, setTitile] = useState(task ? task.title : '',);

    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handlerChange = (event) => {

        setTitile(event.target.value);

    }

    const handlerTaskChange = (event) => {

        setTaskDesc(event.target.value);

    }

    const handlerSubmit = (event) => {

        event.preventDefault();

        if (taskFormUpdate) {

            onUpdate(task.id, title, taskDesc);
        }
        else
        {
            onCreate(title, taskDesc);
        }

        setTitile('');

        setTaskDesc('');
    }

    return (

        <div>

            {taskFormUpdate ? (

                <h3>Lütfen Task Düzenleyiniz...</h3>,

                <div className="task-Update">

                    <form className="task-form" >

                        <label className="Task-Label">Baslikgi Duzenleyiniz</label>

                        <input value={title} onChange={handlerChange} className="Task-Input"></input>

                        <label className="Task-Label">Task Duzenleyiniz</label>

                        <textarea value={taskDesc} onChange={handlerTaskChange} className="Task-Input" rows={5}></textarea>

                        <button className="Task-Button Update-Button" onClick={handlerSubmit}>Duzenle</button>


                    </form>

                </div>
            )
                :

                (
                    <h3>Lütfen Task Ekleyiniz</h3>,

                    <div className="task-create">

                        <form className="task-form" >

                            <label className="Task-Label">Baslik</label>

                            <input value={title} onChange={handlerChange} className="Task-Input"></input>

                            <label className="Task-Label">Task Giriniz</label>

                            <textarea value={taskDesc} onChange={handlerTaskChange} className="Task-Input" rows={5}></textarea>

                            <button className="Task-Button" onClick={handlerSubmit}>Olustur</button>


                        </form>

                    </div>
                )}
        </div>
    );
}

export default TaskCreate;