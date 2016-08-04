import { createStore,combineReducers } from 'redux'
import { todosReducer } from 'actions/reducer.js'
import { visibilityReducer } from 'actions/reducer2.js'
import { addTodo,removeTodo,toggleTodo,showAll,showCompleted,showIncomplete } from 'actions/actions.js'
import expect from 'expect'

let reducers = combineReducers({
  todos : todosReducer,
  visible : visibilityReducer
})

export let store = createStore(reducers)

export expect


