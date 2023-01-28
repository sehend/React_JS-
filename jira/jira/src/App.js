import logo from './logo.svg';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {

    const [tasks,setTasks] = useState([]);

    const createTask = (title, taskDesc) => {

        const createdTasks = [...tasks, { id: Math.round(Math.random() * 999999), title: title, taskDesc: taskDesc }];

        setTasks(createdTasks);

    }

    const deleteTaskById = (id) => {

        const afterDeletingTask = tasks.filter((task) => {

            return task.id !== id;

        })

        setTasks(afterDeletingTask);
    }

    const editTaskById = (id, updatedTitle, UpdatedTaskDesc) => {

        const updatedTask = tasks.map((task) => {

            if (task.id === id) {

                return { id: id, title: updatedTitle, taskDesc: UpdatedTaskDesc }

            }

            return task;

        });

        setTasks(updatedTask);
    }

  return (
    <div className="App">

          <TaskCreate onCreate={createTask }></TaskCreate>

          <h1>Gorevler</h1>

          <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById }></TaskList>

    </div>
  );
}

export default App;
