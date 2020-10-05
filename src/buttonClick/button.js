import React from 'react'

function Button(props) {
  return (
   
    <>
     {console.log(props)}
      <p>Button clicked: {props.count}</p>
      <button onClick={props.handleClick}>Increment</button>
      <button onClick={props.history.goBack}>Go back</button>
    </>
  )
}

export default Button
