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
        this.state.item = '';
    }

    render() {
        return(
            <form  onSubmit={this.handleSubmit}>
               <input placeholder="Enter Your Task Here" name='item' onChange={this.handleChange} value={this.state.item} type='text'></input>
               <div>   
                <button className='btn'>Add Todo</button>
                <button className='btn' onClick={this.props.clearCompleted}>Clear Completed</button>
               </div>
            </form>
        );
    }
}

export default TodoForm;