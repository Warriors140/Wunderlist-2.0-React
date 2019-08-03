import React from "react";
import './App.css';
import AddTodo from "./containers/AddTodo"
import TodoList from "./containers/TodoList";
import Footer from "./containers/Footer";

const App = () => (
 <div className="Todo2">
 <div className="Todo">
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
  </div>
);

export default App;
