import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import VerticalTabs from './Components/Sidebar/sidebar'
import LogoBar from './Components/LogoSidebar/logoSidebar'
import BackgroundContainer from './Components/BackgroundImage/backgroundImage'
import picture from './pictures/header1.jpg';



function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <LogoBar/>
        <BackgroundContainer image={picture}>
          <VerticalTabs/>
        </BackgroundContainer>
      </div>
    </Provider>
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
