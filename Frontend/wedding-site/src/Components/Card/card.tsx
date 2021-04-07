import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginTop:'90%',
      marginLeft: '80%',
      width: '100%',
      height:'100%'
    },
    image: {
      widht: '30%',
      height:'45%'
    }
  }),
)

export default function Card () {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
      <h2 style={{fontWeight: 'normal', alignItems: 'center'}}>Nuestros Papás</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          Miguel Francisco Garza Salinas <br/>
          María de Lourdes Arregui Alva
        </Grid>
        <Grid item xs={12} sm={6}>
          Miguel Francisco Garza Salinas <br/>
          María de Lourdes Arregui Alva
        </Grid>
      </Grid>
    </Paper>
  )
}
