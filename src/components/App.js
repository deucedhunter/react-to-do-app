import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddTaskForm from './AddTaskForm';

class App extends Component {
constructor(props){
  super(props);
    this.state = {
      task: '',
      taskList : [
        {text: 'body of task1', isDone: false},
        {text: 'body of task2', isDone: true},
        {text: 'body of task3', isDone: false},
        {text: 'body of task4', isDone: true}
      ]
  }
}
  handleDeleteTask = (item) => {
    this.setState({
      taskList: this.state.taskList.filter(task => task.text !== item.text)
    })
  }

  addItem = e => {
    e.preventDefault()
    console.log(e.target.value);
    const task = {text: this.state.task}
    this.setState({
      taskList: [...this.state.taskList, task],
      task: ''
    })
  }

  handleInput = e => {
    this.setState({
      task: e.target.value
    })

  }

  render(){
    return (
    <div className="row">
      <div className="col offset-m4 m4 center">
        <h1>List</h1>
        <AddTaskForm addItem={this.addItem} handleInput={this.handleInput} handleContent={this.state.task}/>
        <ToDoList taskList={this.state.taskList} onDelete={this.handleDeleteTask} />
      </div>
    </div>
    );
  }
}

export default App;
