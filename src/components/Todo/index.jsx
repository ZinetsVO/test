import React, {useState} from "react";
import css from "./styles.module.css";

const Todo = () => {

  const [check, setCheck] = useState(true);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const inputChange  = (e) => {
    setNewTodo(e.target.value)
    setCheck(!e.target.value)
  };
  console.log (todos)
 
  const addTask = () => {
    setTodos([...todos,newTodo]);
    setNewTodo("")
    setCheck(true)
  };


   return (
    <div className= {css.container}>
      <div className={css.inputSection}>
        <input type="text" value={newTodo} onChange={inputChange}/>
        <button className={css.btn} onClick={addTask} disabled={check}>Submit</button>
      </div>
      <ul className={css.todoList}>
        {todos.map((i, index) => (
          <li key={index} className={css.task}><p>{i}</p> <button className={css.deleteTask}>X</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;