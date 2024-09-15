import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/ToDoList';

describe('TodoList Component', () => {
  test('renders the initial todos', () => {
    render(<TodoList />);
    
    // Verify initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Zustand')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);

    // Simulate user typing and adding a todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add Todo'));

    // Verify the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle a todo', () => {
    render(<TodoList />);

    // Get the todo item and simulate toggle
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);

    // Verify the todo is now marked as completed
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Toggle it back
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);

    // Get the todo item and delete it
    const todo = screen.getByText('Learn React');
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));

    // Verify the todo is removed
    expect(todo).not.toBeInTheDocument();
  });
});