import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import Employee from './Employee'
import EmployeeList from "./EmployeeList"
import Header from "./Header"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Route
          exact path="/employees"
          render={(props) => {
            return <EmployeeList employees={this.props.EMPLOYEES}/>
          }}
        />

        <Route 
          exact path="/"
          component={Header}
        />

        <Route
          exact path="/employees/info"
          render={(props) => {
            return <Employee employees={this.props.EMPLOYEES} {...props}/>
          }}
        />

       
      </div>
    )
  }
}

export default Home