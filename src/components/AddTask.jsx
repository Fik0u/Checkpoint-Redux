import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/actions/actions';


const AddTask = () => {
    const [description, setDescription] = useState('')
    // console.log(description)
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
      e.preventDefault();
       if(description.trim()=== '') return alert('You need to add a task description')
        const newTask = {
      id: Math.random(),
      description: description,
      isDone: false
    }

        dispatch(addTask(newTask))
        setDescription('')
    }

  return (
    <div>

       <Form className='container' onSubmit = {handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Description" style={{width:'600px', margin:'auto'}} value = {description} onChange = {(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" style={{margin: '20px', backgroundColor:'beige', color:'black', border:'none', borderRadius:'20px'}}>
        Add Task
      </Button>
    </Form>


   
    </div>
  )
}

export default AddTask
