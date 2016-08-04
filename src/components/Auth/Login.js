import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username:'',pwd:''}
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onChangeHandler(event) {
    let obj = {}
    obj[event.target.name] = event.target.value
    this.setState(obj)
  }
  onSubmitHandler(event) {
    console.log(this.state)
  }
  render() {
    return (
      <div>

         <TextField
          hintText="Enter user name"
          floatingLabelText="User Name"
          type="text"
          value={this.state.username}
          onChange={this.onChangeHandler}
          name="username"
        /><br />
         <TextField
          hintText="Enter user name"
          floatingLabelText="User Name"
          type="password"
          value={this.state.pwd}
          onChange={this.onChangeHandler}
          name="pwd"
        /><br />
        <div>
          <FlatButton label="Login" onTouchTap={this.onSubmitHandler} />
          <FlatButton label="Rest" />
        </div>
      </div>
    )
  }

}

export default Form
