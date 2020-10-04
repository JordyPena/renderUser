import React, { Component } from "react"
import {Route} from "react-router-dom"
import Form from "./Form"
import Sentence from "./Sentence"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "",
        email: "",
        age: ""
      }
    }
  }

  handleChange = (user) => {
    
    const userName = user.name
    const userAge = user.age
    const userEmail = user.email
    this.setState((prevState) => {
        console.log(prevState)
      return {
        user: {
          name: userName || prevState.user.name,
          email: userEmail || prevState.user.email,
          age: userAge || prevState.user.age
        }
      }  
    })
  }

  render() {
    return (
      <>
        <Route
          exact path="/"
          render={(props) => {
            return <Form action={this.handleChange}/>
          }}
        />

        <Route 
          path="/submitted"
          render={(props) => {
            return <Sentence userObject={this.state.user} {...props}/>
          }}/>
      </>
    )
  }
}
export default App