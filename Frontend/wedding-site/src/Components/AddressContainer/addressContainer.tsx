import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import MapContainer from '../Map/Map'
import Imagen from '../../pictures/Captura_edited.jpg'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: '5%',
      width: '100%',
      height: '100%'
    },
    image: {
      widht: '30%',
      height:'45%'
    }
  }),
)

export default function AddressContainer ( props: {address:{lat:number, lng:number}}) {
  console.log(props.address)
    const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 style={{fontWeight: 'normal', alignItems: 'center'}}>Recepcion/After/Ceremonia</h2>
        </Grid>
          <Grid container spacing={6} direction='column' alignItems='stretch' justify='space-between'>
            <Grid item xs={3}>
              Nombre ejemplo 1 <br/>
              Nombre ejemplo 2
            </Grid>
            <Grid container spacing={0} style={{margin: '30px'}}>
              <Grid item xs={6}>
                <img src={Imagen} className={classes.image}/>
              </Grid>
              <Grid item xs={6}>
                <MapContainer {...props.address}/>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </Paper>
  )
}