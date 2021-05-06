import { createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-cinzel'


const theme = createMuiTheme({
    palette: {
      primary: {
        light:'#EFEFEF',
        main:'#4A543F',
        dark:'#8B9DB1',
        contrastText:'#5D6B74'
      },
    secondary: {
      light:'#EFEFEF',
      main:'#A39D8A',
      dark:'#8B9DB1',
      contrastText: '#5D6B74'
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