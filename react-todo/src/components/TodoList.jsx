import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
    // Initialize state with a few demo todos
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
        { id: 3, text: 'Master Zustand', completed: false },
    ]);

    // Add a new todo
    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    // Toggle completed status
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
        <AddTodoForm addTodo={addTodo} />
        </div>
    );
};

export default TodoList;