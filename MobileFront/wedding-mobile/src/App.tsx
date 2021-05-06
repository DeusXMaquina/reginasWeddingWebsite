import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import logo from './pictures/SyR.png'
import Drawer from './Components/Drawer/drawer'
import './App.css'
import ContentBox from './Components/MainBox/box'
import image from './pictures/header2.jpg'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './Theme/theme'
import LocationCard from './Components/LocationCard/locationCard'
import data from './CardsInfo/cardsInfo.json'

export default function App() {
  return (
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <Drawer/>
      <img className='logo' src={logo} alt='logo'/>
      <div className= 'mainBox'>
        <LocationCard {...data.events.ceremony}/>
        <LocationCard {...data.events.party}/>
        <ContentBox>
          Algo
            <br/><button>Ola</button>
            <br/><button>Ola3</button> <input type="text" style={{margin: '2px', padding: '2px', width: '75%', height: '150%'}}/>
            <br/>
            <img  src={image} alt="liverpool"/>
            <br/>
            <img src={image} alt="palacio"/>
        </ContentBox>
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
  </ThemeProvider>
  )
}
