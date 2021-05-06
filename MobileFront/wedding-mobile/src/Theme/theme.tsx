import { createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-cinzel'


const theme = createMuiTheme({
    palette: {
      primary: {
        light:'#EFEFEF',
        main:'#EFEFEF',
        dark:'#D1CDC1',
        contrastText:'#D1CDC1'
      },
    secondary: {
      light:'#EFEFEF',
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