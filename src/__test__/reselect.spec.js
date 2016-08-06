import { createSelector } from 'reselect'
import expect from 'expect'

describe('Trying to explore the reselect library',()=> {
  it('should return addition of two values',()=> {
    const getFive = () => 5
    const getSeven = () => 7
    const Myfn = createSelector(getFive,getSeven,(val1,val2)=> val1+val2 )
    expect(Myfn()).toBe(12)
  })
  it('should compose selectors',()=> {
    const getFive = () => 5
    const getSeven = () => 7
    const getMultiplication = createSelector(getFive,getSeven,(x,y)=>x*y)
    const MultiplyWithSelector = createSelector(getMultiplication,getSeven,getFive,(x,y,z)=> x*y*z)
    expect(MultiplyWithSelector()).toBe(1225)
  })
})
