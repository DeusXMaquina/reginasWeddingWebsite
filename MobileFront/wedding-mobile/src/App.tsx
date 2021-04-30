import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import logo from './pictures/SyR.png'
import Drawer from './Components/Drawer/drawer'
import './App.css'
import ContentBox from './Components/MainBox/box'
import image from './pictures/header2.jpg'

export default function App() {

  return (
    <Provider store={store}>
      <Drawer/>
      <img className='logo' src={logo} alt='logo'/>
      <div className= 'mainBox'>

        <ContentBox>
          Algo
            <br/><button>Ola</button>
            <br/><button>Ola3</button> <input type="text" style={{margin: '2px', padding: '2px', width: '75%', height: '150%'}}/>
            <br/>
            <img  src={image} alt="liverpool"/>
            <br/>
            <img src={image} alt="palacio"/>
        </ContentBox>
      
      </div>
    </Provider>
  )
}
