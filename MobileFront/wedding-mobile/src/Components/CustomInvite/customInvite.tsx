import ContentBox from '../MainBox/box'
import { makeStyles, Theme, Grid, TextField, Checkbox, Button } from '@material-ui/core'

const useStyles = makeStyles((theme:Theme) => ({
    card: {
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main
    },
    item: {
      marginTop: '10px'
    },
    button: {
      margin: '10%',
      color: theme.palette.primary.main
    },
    input: {
     margin: '10px'
    }
  }))

export default function CustomInvite () {
  const classes = useStyles()
  return <div className={classes.card}>
    <ContentBox>
      <Grid container>
        <Grid item xs={12}>
          Check In
        </Grid>
        <Grid item alignContent='flex-start' xs={12}>
          Rotulo
        </Grid>
        <Grid container direction='column' item xs={6}>
        Boletos Recepcion
          <Grid item>
            Boleto 1 <Checkbox />
          </Grid>
          <Grid item>
            Boleto 2 <Checkbox />
          </Grid>
        </Grid>
        <Grid container direction='column' item xs={6}>
        Boletos After
          <Grid item>
            Boleto 1 <Checkbox />
          </Grid>
          <Grid item>
            Boleto 2 <Checkbox />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button} type='submit' variant='outlined' color='primary' style={{color:'#777F6F'}}> Confirmar Asistencia </Button>
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button} type='submit' variant='outlined' color='primary' style={{color:'#777F6F'}}> Rechazar Asistencia </Button>
        </Grid>
      </Grid>

    </ContentBox>
  </div>
}