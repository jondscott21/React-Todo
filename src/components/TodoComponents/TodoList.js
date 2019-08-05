// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    // constructor() {
    //     super();

    // }

    render() {
        return(
            <div>
                {this.props.todoList.map(el => <Todo key={el.id} toggleClick={this.props.toggleClick} item={el} />)}
            </div>
        );
    }
}

export default TodoList;
