/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

import React, { Component } from 'react';
import CSV from 'components/CSV'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {


    return (
      <div>
        <h1>CSV</h1>
        <CSV />
      </div>
    );
	}
}
