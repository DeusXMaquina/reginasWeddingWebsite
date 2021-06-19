import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import logo from './pictures/SyR.png'
import Drawer from './Components/Drawer/drawer'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './Theme/theme'
import LocationCard from './Components/LocationCard/locationCard'
import data from './CardsInfo/cardsInfo.json'
import Home from './Components/Home/home'
import GiftCard from './Components/Gift/gift'
import Dresscode from './Components/DressCode/dresscode'
import HotelCard from './Components/Hotel/hotelCard'
import RSVP from './Components/RSVP/RSVP'

export default function App() {
  return (
  <ThemeProvider theme={Theme}>
    <Drawer/>
    <img className='logo' src={logo} alt='logo'/>
    
    <Provider store={store}>
      
      <div className= 'mainBox'>
        <Home/>
        <LocationCard {...data.events.ceremony}/>
        <LocationCard {...data.events.party}/>
        <HotelCard/>
        <GiftCard/>
        <Dresscode/>
        <RSVP/>
      </div>
    </Provider>
  </ThemeProvider>
  )
}
