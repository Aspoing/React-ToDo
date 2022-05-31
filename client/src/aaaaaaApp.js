import React, {Component} from "react"
import logo from './logo.svg';
import './App.css';

import ToDoList from "./ToDo/ToDoList"

class App extends Component {
  render() {
    return (
      <ToDoList/>
    );
  }
}

export default App;
