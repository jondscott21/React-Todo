import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import { isTemplateElement } from '@babel/types';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: 'Test Task',
          id: Date.now(),
          completed: false
        }
      ] 
    };
    
  }

  addToList = taskName => {
    const newItem = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  toggleClick = id => {
    this.setState({
      list: this.state.list.map(listItem => {
        if (id === listItem.id) {
          return {
            ...listItem,
            completed: !listItem.completed
          }
        } else {
          return listItem;
        }
      })
    })
  }
  
  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.list} toggleClick={this.toggleClick} />
        <TodoForm addToList={this.addToList} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
