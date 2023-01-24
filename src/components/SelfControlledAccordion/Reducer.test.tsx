import {reducer, StateType} from "./Reducer";

test('collapsed value should be true', ()=>{
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type:'TOOGLE_COLLAPSED' })
    //expect
    expect(newState.collapsed).toBe(true)
})

test('collapsed value should be false', ()=>{
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type:'TOOGLE_COLLAPSED' })
    //expect
    expect(newState.collapsed).toBe(false)
})

test('collapsed value should be false', ()=>{
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type:'TOOGLE_COLLAPSED' })
    //expect
    expect(newState.collapsed).toBe(false)
})

test('error reducer', ()=>{
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
   expect(()=> {
       reducer(state, {type: 'FAKE-TYPE'})
   }).toThrowError()
    //expect
})