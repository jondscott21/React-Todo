import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
           
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addToList(this.state.item)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
               <input name='item' onChange={this.handleChange} value={this.state.item} type='text'></input>
               <button>Add Todo</button>
               <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;