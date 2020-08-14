import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleCLick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  render() {
    return (
      <div onClick={this.handleCLick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
