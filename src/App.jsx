import { useState } from 'react'
import './App.css'
import Modal from './components/modal/Modal'
import Todo from './components/todo/Todo'

function App() {
 

  return (
    <div className="App">
      <Todo />
      <Modal />
    </div>
  )
}

export default App
