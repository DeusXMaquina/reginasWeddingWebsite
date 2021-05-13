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

export default function App() {
  return (
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <Drawer/>
      <img className='logo' src={logo} alt='logo'/>
      <div className= 'mainBox'>
        <Home/>
        <LocationCard {...data.events.ceremony}/>
        <LocationCard {...data.events.party}/>
        <GiftCard/>
      </div>
    </Provider>
  </ThemeProvider>
  )
}
