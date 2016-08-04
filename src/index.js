/*import React from 'react'
import { render } from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import WrappedLayout from 'components/Main.js'
import MockedUp from 'components/rough/MockedUp.js'
import MockedUp2 from 'components/rough/MockedUp2.js'


render((
  <Router history={browserHistory}>
    <Route path="/" component={WrappedLayout}>
      <Route path="inbox" component={MockedUp} />
      <Route path="starred" component={MockedUp2} />
      <Route path="*" component={WrappedLayout} />
    </Route>
  </Router>
), document.getElementById('container'))
*/

import { createStore,combineReducers } from 'redux';
import { todosReducer } from 'actions/reducer.js'
import { visibilityReducer } from 'actions/reducer2.js'
import { addTodo,removeTodo,toggleTodo,showAll,showCompleted,showIncomplete } from 'actions/actions.js'

let reducers = combineReducers({
  todos : todosReducer,
  visible : visibilityReducer
})

let store = createStore(reducers)

console.log(store)

store.dispatch(addTodo('devarsh'))
store.dispatch(addTodo('harsh'))
store.dispatch(addTodo('aayush'))

console.log(store.getState())

store.dispatch(removeTodo(2))
console.log(store.getState())

store.dispatch(toggleTodo(2))
console.log(store.getState())

store.dispatch(showAll())
console.log(store.getState())

store.dispatch(toggleTodo(1))
console.log(store.getState())

store.dispatch(showIncomplete())
console.log(store.getState())




