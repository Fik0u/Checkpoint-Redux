import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/actions/actions';


const AddTask = () => {
    const [description, setDescritpion] = useState('')
    // console.log(description)
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
       if(description.trim()=== '') return alert('You need to add a task description')
            const newTask = {
                id: Math.random(),
                description: description,
                isDone: false
        }

        dispatch(addTask(newTask))
        setDescritpion('')
    }

  return (
    <div>

       <Form className='container' onSubmit={handleSubmit()}>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Description" value = {description} onChange = {(e) => setDescritpion(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>

    </div>
  )
}

export default AddTask
