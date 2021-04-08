import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginTop:'40%',
      marginLeft: '30%',
      width: '100%',
      height:'100%'
    },
    image: {
      widht: '30%',
      height:'45%'
    }
  }),
)

export default function RSVP (props: {infoArray:never[]}) {

  const [checked, setChecked] = useState(true);
  const [confirm, setConfirm] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles()

  const checkboxCreator = (ticketNumber:number) => {
      return <span>
      <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Boleto {ticketNumber + 1}<br/>
    </span>
  }
  const showTicketCheckbox = (tickets:number, title:string) => {
      var elements = [<span>{title}<br/></span>]
    for (let index = 0; index < tickets; index++) {
      elements.push(checkboxCreator(index))
    }
    return elements
  }
  

    return <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
    <form>
      <h2>{props.infoArray[1]}</h2>
      <Grid container>
        <h3>Esta usted cordialmente invitado a mi boda</h3>
        <Grid item xs={12} sm={6}>
          {showTicketCheckbox(props.infoArray[2], 'Boletos Banquete')}
        </Grid>
        <Grid item xs={12} sm={6}>
        {props.infoArray[3] === 0 ? '' : showTicketCheckbox(props.infoArray[2], 'Boletos After')}
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{color:'#777F6F'}}>
        Confirmar Asistencia
      </Button>
    </form>
    </Paper>
}