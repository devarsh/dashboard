import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO } from './actionTypes.js'

const behaviors = {
  [ADD_TODO](state,{id,text,completed}) {
    return [...state,{id,text,completed}]
  },
  [REMOVE_TODO](state,{index}) {
    return state.filter( obj => { return obj.id === index ? false : true } )
  },
  [TOGGLE_TODO](state,{index}) {
    return state.map( obj => toggleTodo(obj,index) )
  }
}

const toggleTodo = (value,id) => {
  if(value.id !== id) {
    return value
  }
  return Object.assign({},value,{completed:!value.completed})
}


export const todosReducer = (state = {}, action) => {
  const behavior = behaviors[ action.type ]
  return behavior ? behavior(state, action) : state
}

