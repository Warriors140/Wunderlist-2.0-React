
import React from "react";
import AddTodo from "./containers/AddTodo"
import TodoList from "./containers/TodoList";
import Footer from "./containers/Footer";

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);


import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
