import React from 'react'
import {useSelector} from 'react-redux';
import Task from '../Task/Task.js'
import { Button } from "react-bootstrap";


function ListTasks() {
     // const show = useSelector((state) => state.reducerShow.show);
        const tasks = useSelector(state => state.tasksList)
       // const filts=
        return (
            
        <div>
             <Button
                    variant="success" >
                    Filter Tasks
                  </Button>
                  


        {tasks.map((task,i)=>
        <Task key={i} todotsk={task}/>)}
        </div>
    )
}

export default ListTasks
