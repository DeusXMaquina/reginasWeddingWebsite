import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Actions'

function App() {
  const counter = useSelector( (state:any) => state.counterReducer)
  const logged = useSelector( (state:any) => state.loggedReducer)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick= {() => dispatch(increment())}>+</button>
      <button onClick= {() => dispatch(decrement())}>-</button>
      {logged ? <h1>Hidden component</h1> : ''}
    </div>
  )
}

export default App;
