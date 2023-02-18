import React, { Component } from 'react'
import axios from 'axios'
export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: []
    }
  }

  getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res.data);
        this.setState({ myData: res.data })

      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        {
          this.state.myData.map((todo) => (
            <h2>{todo.title}</h2>
          ))
        }
      </div>
    )
  }
}

export default ClassComponent