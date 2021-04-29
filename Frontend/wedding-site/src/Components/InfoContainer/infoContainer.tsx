import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import MapContainer from '../Map/Map'
import imagenCeremonia from '../../pictures/Captura_edited.jpg'
import imagenBanquete from '../../pictures/Screenshot_2.png'
import imagenHoteles from '../../pictures/Screenshot_3.png'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginTop:'15%',
      marginLeft: '50%',
      width: '100%',
    },
    image: {
      widht: '30%',
      height:'45%'
    }
  }),
)

function InfoContainer ( props: {event:string, info:string, coordinates:{lat:number, lng:number}}) {

  const imagen = () => {
    switch (props.event) {
      case 'Ceremonia':
        return imagenCeremonia
      case 'Banquete':
        return imagenBanquete
      case 'Hospedaje':
        return imagenHoteles
    }

  } 

  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#EFEFEF', color:'#777F6F'}}>
      <Grid container spacing={3}>
        <Grid item container xs={12} sm={6}>
          <Grid item container direction='column' justify='space-evenly' alignItems='flex-start'>
            <Grid item>
              <h2 style={{fontWeight: 'normal', alignItems: 'center'}}>{props.event}</h2>
            </Grid>
            <Grid item>
              {props.info}
            </Grid>
            <Grid item>
              <img src={imagen()} alt='imagen' className={classes.image}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MapContainer {...props.coordinates}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default InfoContainer