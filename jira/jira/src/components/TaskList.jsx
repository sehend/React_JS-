import React from 'react';
import TaskShow from './TaskShow';

function TaskList({ tasks, onDelete, onUpdate }) {
  return (

      <div className="task-List">

      {
          tasks.map((task,index) => {


              return (

                  <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}></TaskShow>

                  )


          })


          }
      </div>
  );

}

export default TaskList;