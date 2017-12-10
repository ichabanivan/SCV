import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTable } from 'actions/'
import Table from './Table'

@connect(null, {addTable})
export default class AddTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: `Year, Mark, Model, H, Price, Date
1997,Ford,E350,"ac, abs, moon",3000.00, "2012-10-31"
1999,Chevy,"Venture «Extended Edition»","",4900.00, "2012-10-28"
1996,Jeep,Grand Cherokee,"MUST SELL! air, moon roof, loaded",4799.00, "2012-8-31"
1997,Ford,E350,"ac, abs, moon",3000.00, "2012-10-31"
1999,Chevy,"Venture «Extended Edition»","",4900.00, "2012-10-28"
1996,Jeep,Grand Cherokee,"MUST SELL! air, moon roof, loaded",4799.00, "2012-8-31"`
    };
  }

  componentWillMount() {
    this.props.addTable(this.state.text)
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = (e) => {
      this.props.addTable(this.state.text);
  }

  handleResetClick = () => {
      this.setState({
        text: ''
      });
  }

  render() {
    return (
      <div>
        <textarea
          type="text"
          onChange={this.handleTextChange}
          value={this.state.text}
        />
        <div className="btns">
          <button onClick = {this.handleClick}>New Table</button>
          <button onClick = {this.handleResetClick}>Reset Textarea</button>
        </div>
        <h3>Component Table</h3>
        <Table />
        <h3>Component Table</h3>
        <Table />
      </div>
    )
  }
}