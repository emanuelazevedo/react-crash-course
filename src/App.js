import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  state = {
      todos: [
        {
          id: uuidv4(),
          title: 'todo1',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'qwewe',
          completed: true
        },
        {
          id: uuidv4(),
          title: 'fdsfdtodo3',
          completed: false
        },
      ]
  }

  markComplete = (id) => {
    console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  delTodo = id => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    console.log(this.state.todos);
    return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo = {this.addTodo} />
            <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
          </div>
        </div>
    )
  }
}

export default App;
