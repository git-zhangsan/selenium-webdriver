/*
* @Author: zhanghuiming
* @Date:   2018-01-02 16:59:29
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2018-01-02 16:59:30
*/
import React from 'react';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: ''
    };
  }

  inputChange(e) {
    this.setState({ formInput: e.target.value });
  }

  addTodo(e) {
    e.preventDefault();

    const newTodoName = this.state.formInput;

    if (newTodoName) {
      this.props.onNewTodo({
        name: newTodoName
      });

      this.setState({ formInput: '' });
    }
  }
  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder="Walk the dog" onChange={(e) => this.inputChange(e)} />
        <button onClick={(e) => this.addTodo(e) }>
          Add Todo
        </button>
      </div>
    )
  }
}