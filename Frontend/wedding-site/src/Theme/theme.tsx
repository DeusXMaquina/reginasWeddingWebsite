import { createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-cinzel'


const theme = createMuiTheme({
    palette: {
      primary: {
        light:'#D1CDC1',
        main:'#D1CDC1',
        dark:'#D1CDC1',
        contrastText:'#D1CDC1'
      },
    secondary: {
      light:'#D1CDC1',
      main:'#889DAF',
      dark:'#D1CDC1',
      contrastText: '#D1CDC1'
      }
    },
    typography: {
      fontFamily: [
        'Cinzel',
        'serif'
      ].join(',')
    }
})

export default theme