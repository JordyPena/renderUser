import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
        firstName: "",
        age: ""
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target
     this.setState({
       [name]: value
     })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("form submitted")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />

          <button>Submit</button>
          <button onClick={this.props.history.goBack}>Go Back</button>

        </form>

        <p>My name is: {this.state.name}</p>
        <div>
        <p>I am {this.state.age} years old</p>

        </div>
      </div>
      
    )
  }
}

export default Form