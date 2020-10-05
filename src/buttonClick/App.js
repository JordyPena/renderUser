import React, { PureComponent } from 'react'
import Button from "../buttonClick/button"
import {Route} from "react-router-dom"
import Home from "../buttonClick/Home"
import FormSecond from "./formSecond"

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    const clicked = this.state.count + 1
    this.setState({
      count: clicked
    })
  }

  render() {
    return (
      <div>
        <Route 
          exact path="/button"
          render={(props) => {
            return  <Button handleClick={this.handleClick} count={this.state.count} {...props}/>
          }}
       
        />

        <Route 
          exact path="/"
          component={Home}
          
          />

        <Route 
          exact path={["/user", "/user/1", "/user/2"]}
          render={(props) => {
            return <FormSecond {...props} />
          }}
        />

      </div>
    )
  }
}

export default App