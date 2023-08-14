import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} Welcome {this.props.place}</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps