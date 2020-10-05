import React from 'react'

function Employee(props) {
  return (
    <div>
      <p>Employees info</p>
      {props.employees.map((employee, idx) => {
        console.log(props)
        if (employee.id === props.match)
        return <p>{employee.role}</p>
      })}
    </div>
  )
}

export default Employee
