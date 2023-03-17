import React from 'react'
import Modal from '../../modal/Modal'
import "./Item.scss"

export default function Item({name, isDone, onToggle, id, onDelete, onChecked, dueDate}) {
    
  const newDueDate = new Date(dueDate)

  return (
    <div className='list-group-item bg-inp'>
      <div className='"form-check todo-checkbox mt-1 mb-1'>
      <input className='form-check-input me-2' onChange={onToggle}  onClick={onChecked} checked={isDone} type="checkbox" />
      <label className='form-check-label me-5'>{name}</label>
        <span className='badge bg-secondary me-2'>{`${newDueDate.toLocaleDateString()} ${newDueDate.toLocaleTimeString()}`}</span>
       <Modal>
       <button className='btn btn-danger btn-sm ' onClick={onDelete}>&#10005;</button>
       </Modal>
      </div>
    
    </div>
  )
}
