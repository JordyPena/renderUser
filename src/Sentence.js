import React from 'react'

function Sentence(props) {
console.log(props.userObject)
  function handleClick(event) {
    props.history.goBack()
  }
  
  return (
    <> 
      {props.userObject.name && <p>My name is {props.userObject.name}</p>}
      {props.userObject.age && <p>I am {props.userObject.age} year old</p>}
      {props.userObject.email && <p>You can reach me at {props.userObject.email}</p>}

      <button onClick={handleClick}>Go back!</button>
    </>
  )
}

export default Sentence
