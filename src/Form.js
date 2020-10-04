
import React, { Component }from 'react'
import { Link } from "react-router-dom"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      email: ""
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const user = this.state
    this.props.action(user)
  }

  handleChange = (event) => {
    console.log("change is working!")
    const {value, name} = event.target
  console.log(event.target)
    this.setState({
      //adding the userInput which is value to the input im targeting
      [name]: value
    })
  }

  handleClick = (event) => {
    console.log("submit click")
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.firstName}
            onChange={this.handleChange}
           
          />
  
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
           
            
          />
  
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
           
            
          />

          <button>Submit</button>
        </form>

        <Link
          to="/submitted">
          Submissions
        </Link>
      </>
    )
  }
  
}

 

export default Form
