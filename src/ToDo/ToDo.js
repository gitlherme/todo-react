import './ToDo.css'
import { useState } from 'react'


function ToDo() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const removeTask = (e, value) => {
    e.preventDefault()
    const todosCopy = todos.slice()
    todosCopy.splice(todosCopy.indexOf(value), 1)
    setTodos(todosCopy)
  }


  return (
    <div className="ToDo">
      <h1>To Do List</h1>
      <small>Caso a tarefa seja finalizada, clique na caixa de seleção para remove-la da lista ✨</small>
      <ul>
        {todos.map((task, index) => {
          return (
            <div className="task">
              <input type="checkbox" name="finish-task" id="finish-task" onClick={(e) => removeTask(e, task)}/>
              <li key={task+index}>{task}</li>
            </div>
          )
        })}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (value !== '') {
            setTodos([...todos, value]);
            setValue('');
          }
        }}
      >
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default ToDo;
