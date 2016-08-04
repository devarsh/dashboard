import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { deepOrange500 } from 'material-ui/styles/colors'
import Drawer from 'material-ui/Drawer'
import SideNav from 'components/SideNav.js'
import MenuBar from 'components/MenuBar.js'



class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open : false}
    this.toggleNavigation = this.toggleNavigation.bind(this)
  }
  toggleNavigation() {
    this.setState({open: !this.state.open})
  }
  render() {
    return (
      <div id="main">
        <MenuBar onLeftIconButtonTouchTap={this.toggleNavigation}/>
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open)=> { this.setState({open}) }}
        >
          <SideNav onTouchTap={this.toggleNavigation}/>
        </Drawer>
        <div id="content">
          {this.props.children}
        </div>
      </div>
      )
  }
}

export default Layout
