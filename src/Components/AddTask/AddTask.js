import React, { useState } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { addTask } from "../../JS/Actions/actionTodo";
import "./AddItem.css";


function AddTask() {
  const [task, setTask] = useState("");
  const addTodo = ()=>{
    task!==""?
  dispatch(
    addTask({
      description: task,
      isDone: false,
      id: Math.random(),
    })
  ):alert('Please enter a task');
  setTask("")
}

  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        <h1>Checkpoint redux</h1>

        <Card.Body>
          <Card.Title>Tasks List</Card.Title>

          <Card.Text>
            <Form onSubmit={(e)=> {e.preventDefault();addTodo()} }>
              <Form.Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                  <Form.Control
                    placeholder="Add task"
                    onChange={(e) => setTask(e.target.value)}
                    
                    value={task}
                 
                    
                  />
                </Col>
                <Col xs={1}>
                  <Button
                    variant="success"
                    onClick={()=> addTodo() }
                    
                  >
                    Add Task
                  </Button>
                 
                </Col>
                <Col xs={1}></Col>
              </Form.Row>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddTask;
