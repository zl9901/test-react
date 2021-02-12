import { useState } from 'react';
import TaskFormik from './TaskFormik';
import { addTask, deleteTask } from '../actions/TaskAction';
import { useDispatch, useSelector } from "react-redux";


function TaskTrackerList(props) {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const addNewTask = (task) => {
        dispatch(addTask(task));
    }

    return (
        <div className="border border-2 border-dark rounded p-3">
            <h2>Task Tracker 
                { !showTaskForm ? 
                    <button 
                        className="btn btn-success mt-1" 
                        style={{float: 'right'}} 
                        onClick={() => {
                            setShowTaskForm(true);
                        }}
                    >Add</button>
                    :
                    <button 
                        className="btn btn-danger mt-1" 
                        style={{float: 'right'}} 
                        onClick={() => {
                            setShowTaskForm(false);
                        }}
                    >Close</button>
                }
            </h2>

            { showTaskForm && 
                <TaskFormik addNewTask={addNewTask}></TaskFormik> 
            }  
            
            { !tasks.length>0 ?
                <span>No Task To Show</span>
                :
                <ul className="list-group">
                    { tasks.map((task, idx) => {
                        return (        
                            <li className="list-group-item my-1" key={idx}>
                                <h5 style={{fontWeight: 'bold'}}>
                                    {task['task']} 
                                    <button 
                                        className="btn badge badge-danger" 
                                        style={{float: 'right'}}
                                        onClick={()=>dispatch(deleteTask(idx))}
                                        >X</button>
                                </h5>
                                <span>{task['reminder'] ? task['dayTime']+' | '+'Reminder':task['dayTime']}</span>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>  
    );
}
  
export default TaskTrackerList;