import './App.css';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-dom/client';
import * as React from "react";
import * as ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render()

function App() {

  return (
    <Home />
  );
}

export default App
