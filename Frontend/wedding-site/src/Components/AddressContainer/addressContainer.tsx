import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto'
    }
  }),
);

export default function AddressContainer () {
    const classes = useStyles()
  return (
      <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <h1 style={{fontWeight: 'normal'}}>Recepcion/After/Ceremonia</h1>
          </Grid>
          <Grid container xs={6} direction='column' alignItems='stretch' justify='space-between'>
            <Grid spacing={3}>
            Nombre ejemplo 1 <br/>
            Nombre ejemplo 2
            </Grid>
            <Grid spacing={3}>
            Imagen del lugar
            </Grid>
          </Grid>
          <Grid item xs={6}>
          Mapa con la ubicacion
          </Grid>

        </Grid>
      </Paper>
  )
}