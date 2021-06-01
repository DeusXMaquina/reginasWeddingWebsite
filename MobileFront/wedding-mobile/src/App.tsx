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
import GeneralInvite from './Components/GeneralInvite/generalInvite'
import CustomInvite from './Components/CustomInvite/customInvite'
import HotelCard from './Components/Hotel/hotelCard';

export default function App() {
  return (
  <ThemeProvider theme={Theme}>
    <img className='logo' src={logo} alt='logo'/>
    <Provider store={store}>
      <Drawer/>
      <div className= 'mainBox'>
        <Home/>
        <LocationCard {...data.events.ceremony}/>
        <LocationCard {...data.events.party}/>
        <HotelCard/>
        <GiftCard/>
        <Dresscode/>
        <GeneralInvite/>
        <CustomInvite/>
      </div>
    </Provider>
  </ThemeProvider>
  )
}
