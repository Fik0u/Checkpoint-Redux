import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Task = ({task}) => {
  return (
    <div>
      
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> {task.description} </Accordion.Header>
        <Accordion.Body>
            <Button variant="success" className='m-4'>Done</Button>

            <Button variant="warning" className='m-4'>Edit</Button>
            
            <Button variant="danger" className='m-4'>Delete</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  )
}

export default Task
