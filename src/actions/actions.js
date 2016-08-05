import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO,SHOW_COMPLETED,SHOW_ALL,SHOW_INCOMPLETE } from './actionTypes.js'

let todoId = 0
export const addTodo = (value) =>
  ({ type: ADD_TODO, id:todoId++,text:value,completed:false})

export const removeTodo = (index) =>
  ({ type: REMOVE_TODO, index})

export const toggleTodo = (index) =>
  ({ type: TOGGLE_TODO,index })

export const showAll = () =>
  ({ type : SHOW_ALL })

export const showCompleted = () =>
  ({ type : SHOW_COMPLETED })

export const showIncomplete = () =>
  ({ type : SHOW_INCOMPLETE })


