import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import logo from "./logo.png"; // Import the logo image

function uniqueId() {
  return Math.floor(Math.random() * 10000);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = () => {
    if (input.trim() !== "" && selectedDate !== null) {
      setTodos((prevTodos) =>
        prevTodos.concat({
          text: input,
          id: uniqueId(),
          date: selectedDate,
        })
      );
      setInput("");
      setSelectedDate(null);
    } else {
      alert("Please enter a task and select a date.");
    }
  };

  const removeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  return (
    <div className="container">
      <img src={logo} alt="Todo App Logo" className="logo" /> {/* Add logo here */}
      <h1>Welcome to My Todo App</h1>
      <p>
        This simple todo app helps you keep track of your tasks. Just enter a
        task in the input field, select a date, and click "Add Task". Click "Remove" to delete it from
        the list.
      </p>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select Date"
          dateFormat="MM/dd/yyyy"
          minDate={new Date()}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </div>

      <ul className="todo-list">
        {todos.map(({ text, id, date }) => (
          <li key={id} className="todo">
            <div className="todo-content">
              <input
                type="text"
                value={text}
                readOnly
                className="todo-input"
              />
              <DatePicker
                selected={date}
                readOnly
                dateFormat="MM/dd/yyyy"
                className="todo-date"
              />
            </div>
            <button className="erase" onClick={() => removeTodo(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
