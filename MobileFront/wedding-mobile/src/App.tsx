import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import logo from './pictures/SyR.png'
import Drawer from './Components/Drawer/drawer'
import './App.css'

export default function App() {

  return (
    <Provider store={store}>
      <Drawer/>
      <img className='logo' src={logo} alt='logo'/>
    <div className='mainBox'>
    <div  style={{textAlign: 'center', border: '2px solid red'}}>
        Algo
        <br/><button>Ola</button>
      </div>
      <div  style={{textAlign: 'center', border: '2px solid red'}}>
        Algo
        <br/><button>Ola</button>
      </div>
    </div>
    </Provider>
  )
}
