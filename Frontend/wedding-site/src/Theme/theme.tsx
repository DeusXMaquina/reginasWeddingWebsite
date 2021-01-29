import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        light:'#889DAF',
        main:'#D7DADE',
        dark:'#5D6B73',
        contrastText:'#000000'
      },
    secondary: {
      light:'#A39D8A',
      main:'#000000',
      dark:'#4A543F',
      contrastText:'#000000'
      }
    }
  })

export default theme