import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { deepOrange500 } from 'material-ui/styles/colors'
import Layout from 'components/Auth/Login.js'


const wrapLayout = (WrappedComponent) => {
  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {muiTheme:getMuiTheme()}
    }
    getChildContext() {
      return {
        muiTheme : this.state.muiTheme
      }
    }
    render() {
      return (
        <MuiThemeProvider muiTheme={this.state.muiTheme}>
          <WrappedComponent {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

  WrapperComponent.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  }

  return WrapperComponent
}

let WrappedLayout = wrapLayout(Layout)

export default WrappedLayout





