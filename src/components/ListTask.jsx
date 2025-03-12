import React from 'react'
import Task from './Task'
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/esm/Button';
import { taskFilter } from '../JS/actions/actions';

const ListTask = () => {
  const tasks = useSelector(state => state.toDoReducer.tasks)
  const filter = useSelector(state => state.toDoReducer.filter)
  // console.log(tasks)
  const dispatch = useDispatch()

   const filteredTasks = tasks.filter(task => {

    if(filter === 'Done') return task.isDone
    if(filter === 'Undone') return !task.isDone
    return true
   })

  return (
    <div>
      
      <Button variant="secondary" className='m-4' onClick={() => dispatch(taskFilter('All'))}>All</Button>

      <Button variant="success" className='m-4' onClick={() => dispatch(taskFilter('Done'))}>Done</Button>

      <Button variant="warning" className='m-4' onClick={() => dispatch(taskFilter('Undone'))}>Undone</Button>
     


      {filteredTasks.map(t => <Task task = {t} key = {t.id} />)}
      
    </div>
  )
}

export default ListTask
