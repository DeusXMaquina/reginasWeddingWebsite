import ContentBox from '../MainBox/box'
import { makeStyles, Theme, Grid, Button } from '@material-ui/core'
import { IlocationCard } from './IlocationCard'
import './locationcard.css'

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
    marginBottom: '10px',
    color: theme.palette.primary.main
  }
}))


export default function LocationCard (props: IlocationCard) {
  const classes = useStyles()

  return (
  <div className={classes.card}>
  <ContentBox>
    <Grid container spacing={4} direction='column' justify='center' alignItems='center'>
      <Grid item xs={11} classes={{root: classes.item}}>
        {props.name}
      </Grid>
      <Grid item xs={11}>
        {props.date.day} <br/>
        {props.date.date}
      </Grid>
      <Grid item xs={11}>
        {props.eventDuration.start}<br/>
        {props.eventDuration.ends}
      </Grid>
      <Grid item xs={11}>
        {props.location.address} <br/>
        {props.location.state}
      </Grid>
      <Grid item xs={11}>
        <Button variant='outlined' href={props.location.map} className={classes.button}>Ir al mapa</Button>
      </Grid>
    </Grid>
  </ContentBox>
  </div>
  )
}