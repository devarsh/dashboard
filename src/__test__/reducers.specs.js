import expect from 'expect'
import deepFreeze from 'deep-freeze'
import { addTodo,removeTodo,toggleTodo,showAll,showCompleted,showIncomplete } from 'actions/actions.js'
import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO,SHOW_COMPLETED,SHOW_ALL,SHOW_INCOMPLETE } from 'actions/actionTypes.js'
import { todosReducer } from 'actions/reducer.js'
import { visibilityReducer } from 'actions/reducer2.js'

describe('Reducers',()=> {
  describe('Todos',() => {
    it('should add a new Todo ',()=> {
      const stateBefore = []
      const action = addTodo('devarsh')
      action.id = 0
      const stateAfter = [{id:0,text:'devarsh',completed:false}]
      deepFreeze(stateBefore)
      deepFreeze(stateAfter)
      expect(todosReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should add a new Todo and not mutate', ()=> {
      const stateBefore = [ {id:0,text:'devarsh',completed:false} ]
      const action = addTodo('harsh')
      action.id = 1
      const stateAfter = [
        {id:0,text:'devarsh',completed:false},
        {id:1,text:'harsh',completed:false}
      ]
      deepFreeze(stateBefore)
      deepFreeze(action)
      expect(todosReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should toggle a Todo with the given id',()=> {
      const stateBefore = [
        {id:0,text:'devarsh',completed:false},
        {id:1,text:'harsh',completed:false}
      ]
      const action = toggleTodo(0)
      deepFreeze(stateBefore)
      deepFreeze(action)
      const stateAfter = [
        {id:0,text:'devarsh',completed:true},
        {id:1,text:'harsh',completed:false}
      ]
      expect(todosReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should return the same sets of Todos if a non existing id was given to toggle todo',()=> {
      const stateBefore = [
        {id:0,text:'devarsh',completed:false},
        {id:1,text:'harsh',completed:false}
      ]
      const action = toggleTodo(5)
      deepFreeze(stateBefore)
      deepFreeze(action)
      const stateAfter = [
        {id:0,text:'devarsh',completed:false},
        {id:1,text:'harsh',completed:false}
      ]
      expect(todosReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should delete a todo with the given id',()=> {
      const stateBefore = [
        {id:0,text:'devarsh',completed:false},
        {id:1,text:'harsh',completed:false}
      ]
      const action = removeTodo(0)
      deepFreeze(stateBefore)
      deepFreeze(action)
      const stateAfter = [
        {id:1,text:'harsh',completed:false}
      ]
      expect(todosReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should return the same sets of Todos if a non existing id was given to delete a todo',()=> {
      const stateBefore = [
        {id:0,text:'devarsh',completed:false},
        {id:1,text:'harsh',completed:false}
      ]
      const action = removeTodo(7)
      deepFreeze(stateBefore)
      deepFreeze(action)
      const stateAfter = [
        {id:0,text:'devarsh',completed:false},
        {id:1,text:'harsh',completed:false}
      ]
      expect(todosReducer(stateBefore,action)).toEqual(stateAfter)
    })
  })
  describe('ViewState',()=> {
    it('should return the default visibility as completed todos',()=> {
      const stateBefore = undefined
      const action = {type:'notFound'}
      const stateAfter = SHOW_COMPLETED
      expect(visibilityReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should return the visibility as all todos',()=> {
      const stateBefore = undefined
      const action = showAll()
      const stateAfter = SHOW_ALL
      expect(visibilityReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should return the visibility as completed todos',()=> {
      const stateBefore = undefined
      const action = showCompleted()
      const stateAfter = SHOW_COMPLETED
      expect(visibilityReducer(stateBefore,action)).toEqual(stateAfter)
    })
    it('should return the visibility as incomplete todos',()=> {
      const stateBefore = undefined
      const action = showIncomplete()
      const stateAfter = SHOW_INCOMPLETE
      expect(visibilityReducer(stateBefore,action)).toEqual(stateAfter)
    })
  })
})
