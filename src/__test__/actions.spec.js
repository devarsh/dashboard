import expect from 'expect'

import { addTodo,removeTodo,toggleTodo,showAll,showCompleted,showIncomplete } from 'actions/actions.js'
import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO,SHOW_COMPLETED,SHOW_ALL,SHOW_INCOMPLETE } from 'actions/actionTypes.js'


describe('actions',()=> {
  it('should prepare a new Todo to be added',()=> {
    expect(addTodo('devarsh')).toEqual({type:ADD_TODO,id:0,text:'devarsh',completed:false})
  })
  it('should prepare a new Todo with id incremented',()=> {
    expect(addTodo('harsh')).toEqual({type:ADD_TODO,id:1,text:'harsh',completed:false})
  })
  it('should prepare an action to delete a Todo',()=> {
    expect(removeTodo(23)).toEqual({type:REMOVE_TODO,index:23})
  })
  it('should prepare an action to toggle a Todo',()=>{
    expect(toggleTodo(2)).toEqual({type:TOGGLE_TODO,index:2})
  })
  it('should prepare an action to show all todos',()=> {
    expect(showAll()).toEqual({type:SHOW_ALL})
  })
  it('should prepare an actin to show completed todos',()=> {
    expect(showCompleted()).toEqual({type:SHOW_COMPLETED})
  })
  it('should prepare an action to show incomplete todos',()=>{
    expect(showIncomplete()).toEqual({type:SHOW_INCOMPLETE})
  })
})
