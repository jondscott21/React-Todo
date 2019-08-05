// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div>
                {this.props.todoList.map(el => <p>{el.task}</p>)}
            </div>
        );
    }
}

export default TodoList;
