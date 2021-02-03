import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Actions'
import VerticalTabs from './Components/Sidebar/sidebar'
import LogoBar from './Components/LogoSidebar/logoSidebar';
import BackgroundContainer from './Components/BackgroundImage/backgroundImage';
import picture from './pictures/header1.jpg';


function App() {
  return (
    
      <BackgroundContainer image={picture}>
        <LogoBar/>
        <VerticalTabs/>
      </BackgroundContainer>
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
