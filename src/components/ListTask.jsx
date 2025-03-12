import React from 'react'
import Task from './Task'
import { useSelector } from "react-redux";

const ListTask = () => {
  const tasks = useSelector(state => state.toDoReducer.tasks)
  console.log(tasks)
  return (
    <div>
      
      {tasks.map(t => <Task task = {t} key = {t.id} />)}
      
    </div>
  )
}

export default ListTask
