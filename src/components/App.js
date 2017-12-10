import React, { Component } from 'react'
import AddTodo from './CSV'

/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';



export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <h2>To do</h2>
        <div>
          <AddTodo />
        </div>
      </div>
    );
  }
}