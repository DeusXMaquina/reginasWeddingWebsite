import ContentBox from '../MainBox/box'
import { makeStyles, Theme, Grid, Button } from '@material-ui/core'
import { IlocationCard } from './IlocationCard'
import './locationcard.css'
import hotel from '../../pictures/TemploSanJose.jpg'
import banquete from '../../pictures/RecepcionCanoas.png'
import iconCeremony from '../../pictures/icon-ceremonia.png'
import iconParty from '../../pictures/icon-banquete.png'

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

  const imagen = () => {
    switch (props.name) {
      case 'Ceremonia':
        return hotel
      case 'Banquete':
        return banquete
      case 'Hospedaje':
        return hotel
      }
    }

  const icono = () => {
    switch (props.name) {
      case 'Ceremonia':
        return iconCeremony
      case 'Banquete':
        return iconParty
      case 'Hospedaje':
        return iconCeremony
      }
    }

  return (
  <div id={props.name} className={classes.card}>
  <ContentBox>
    <Grid container spacing={4} direction='column' justify='center' alignItems='center'>
      <Grid item xs={11} classes={{root: classes.item}}>
      <img src={icono()} alt='imagen'/><br/>
        {props.name}
        <img src={imagen()} alt='imagen'/>
      </Grid>
      <Grid item xs={11}>
        {props.date.day} <br/>
        {props.date.date}
      </Grid>
      <Grid item xs={11}>
        {props.eventDuration.start}
      </Grid>
      <Grid item xs={11}>
        {props.location.address} <br/>
        {props.location.state}
      </Grid>
      <Grid item xs={11}>
        <Button target="_blank" variant='outlined' href={props.location.map} className={classes.button}>Ir al mapa</Button>
      </Grid>
    </Grid>
  </ContentBox>
  </div>
  )
}