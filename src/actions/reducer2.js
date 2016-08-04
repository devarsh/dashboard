import { SHOW_COMPLETED,SHOW_ALL,SHOW_INCOMPLETE } from './actionTypes.js'


const behaviors = {
  [SHOW_COMPLETED](state,{type}) {
    return state = type
  },
  [SHOW_ALL](state,{type}) {
    return state = type
  },
  [SHOW_INCOMPLETE](state,{type}) {
    return state = type
  }
}

export const visibilityReducer = (state = SHOW_COMPLETED, action) => {
  const behavior = behaviors[ action.type ]
  return behavior ? behavior(state, action) : state
}


