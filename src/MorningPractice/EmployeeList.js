import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Employee extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

 

  render() {
    return (
      <div>
        <ul>
          <Link
            to="/employees/info">
               {this.props.employees.map((employee, idx) => {
              return <li key={idx}>{employee.firstName}</li>
            })}
            </Link>
           
       
        </ul>
      </div>
    )
  }
}

export default Employee