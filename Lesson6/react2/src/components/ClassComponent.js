import React, { Component } from 'react'

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }


  render() {
    return (
      <>
        <div>ClassComponent</div>
        <div style={{ margin: '40px' }}>
          <span style={{ marginRight: '40px' }}>{this.state.count}</span>
          <button className='btn btn-success m-2' onClick={this.increment}>Increase</button>
          <button className='btn btn-danger m-2' onClick={this.decrement}>Decrease</button>
          <button className='btn btn-dark m-2' onClick={this.reset}>Reset</button>
        </div>
      </>
    )
  }
}

export default ClassComponent