import {List, ListItem,MakeSelectable} from 'material-ui/List'
import React,{PropTypes} from 'react'
import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar'

let SelectableList = MakeSelectable(List)

const wrappedComponent = (ComposedComponent) => {
  return class SelectableList extends React.Component {
    static contextTypes = {
    router: PropTypes.object.isRequired,
    }
    constructor(props) {
      super(props)
      this.state = {selectedIndex:''}
      this.handleRequestChange = this.handleRequestChange.bind(this)
    }
    componentDidMount() {
      this.setState({
        selectedIndex : this.props.defaultValue
      })
      this.context.router.push(this.props.defaultValue)
    }
    handleRequestChange(event,value) {
      this.context.router.push(value)
      this.setState({
        selectedIndex : value
      })
    }
    render() {
      return (
        <ComposedComponent onChange={this.handleRequestChange} value={this.state.selectedIndex}>
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

SelectableList = wrappedComponent(SelectableList)

const SideNav = (props) => {
  return (
    <SelectableList defaultValue='/inbox' >
      <AppBar title="Menu" showMenuIconButton={false} />
      <ListItem primaryText="Inbox" value='/inbox' {...props} />
      <ListItem primaryText="WOW Starred App" value='/starred' {...props} />
      <ListItem primaryText="MAybeWorking" value='/working' {...props} />
    </SelectableList>
  )
}



export default SideNav
