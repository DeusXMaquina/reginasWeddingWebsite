import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import './App.css'

export default function App() {

  return (
    <Provider store={store}>
    <div>
      Sup
    </div>
    </Provider>
  )
}
