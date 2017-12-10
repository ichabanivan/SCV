import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setFilter} from 'actions/'

const mapStateToProps = (state) => {
  return {csv: state.csv}
};

@connect(mapStateToProps, {setFilter})
export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.csv.text
    };

    this.handleFilter = this.handleFilter.bind(this)
  }

  state = {
    sortTo: true
  }

  componentWillMount() {
    this.props.setFilter()
  }

  handleFilter(e) {
    this.props.setFilter(e.target.dataset.index, this.state.sortTo);
    this.setState({
      sortTo: !this.state.sortTo
    })
  }

  render() {
    return (
        <table>
          <thead>
            <tr>
              {
                this.props.csv.head.map((el, index) =>
                <th onClick={this.handleFilter} key={index} data-index={index}>{el}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.csv.body.map((el, index) =>
              <tr key={index}>
                  {
                    el.map((ed, index) =>
                    <td key={index}>{ed}</td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </table>
    )
  }
}