import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, toggleTask } from '../JS/actions/actions';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Task = ({task}) => {

  const dispatch = useDispatch()

  const [taskEdit, setTaskEdit] = useState(task.description)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editTask(task.id, taskEdit))
    handleClose()
  }

  return (
    <div>
      
      <Accordion style={{width:'800px', margin:'auto'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header> {task.description} </Accordion.Header>
        <Accordion.Body style={{backgroundColor: task.isDone ? '#19875494' : 'white'}} >
            <Button variant="success" className='m-4' onClick={() => {dispatch(toggleTask(task.id))}}>{ task.isDone ? "Undone" : "Done"}</Button>

 
            <Button variant="outline-primary" onClick={handleShow}>Edit</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Task Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Control type="text"  value = {taskEdit} onChange = {(e)=> setTaskEdit(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                      <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            

            <Button variant="danger" className='m-4' onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  )
}

export default Task
