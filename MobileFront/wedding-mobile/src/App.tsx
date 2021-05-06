import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import logo from './pictures/SyR.png'
import Drawer from './Components/Drawer/drawer'
import './App.css'
import Home from './Components/Home/home'


export default function App() {

  return (
    <Provider store={store}>
      <Drawer/>
      <img className='logo' src={logo} alt='logo'/>
      <div className= 'mainBox'>
        
      </div>
    </Provider>
  )
}
