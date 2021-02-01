import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Actions'
import VerticalTabs from './Components/Sidebar/sidebar'

function App() {
  return (
    <div className='App'>
      <VerticalTabs/>
    </div>
  )
}

/* 
const counter = useSelector( (state:any) => state.counterReducer)
const logged = useSelector( (state:any) => state.loggedReducer)
const dispatch = useDispatch()
<h1>Counter {counter}</h1>
<button onClick= {() => dispatch(increment())}>+</button>
<button onClick= {() => dispatch(decrement())}>-</button>
*/

export default App;
