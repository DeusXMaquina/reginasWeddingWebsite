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

export default function RSVP () {
  const [hasError, setErrors] = useState(false)
  const [guest, setGuest] = useState([])
  const [QSValue, setQSValue] = useState(false)
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles()

  const checkboxCreator = (ticketNumber:number) => {
      return <span>
      <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Boleto {ticketNumber}<br/>
    </span>
  }
  const showTicketCheckbox = (tickets:number) => {
    for (let index = 0; index < tickets; index++) {
      checkboxCreator(index)
    }
  }


  async function fetchData() {
    if (window.location.search) {
      const res = await fetch(`http://127.0.0.1:5000/${new URLSearchParams(window.location.search).get('cinv')}`)    
      res.json().then(res => {
          setGuest(res[0])}).catch(err => setErrors(err))
          setQSValue(true)
    }
  }
  useEffect(() => {fetchData()}, [])
  

  if (QSValue) {
    return <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
      <h2>{guest[1]}</h2>
      <Grid container>
        <h3>Esta usted cordialmente invitado a mi boda</h3>
        <Grid item xs={12} sm={6}>
        {guest[2] !== 0 ? 'Boletos Banquete' : 'nada'}
          <br/>
          {checkboxCreator(guest[2])}

        </Grid>
        <Grid item xs={12} sm={6}>
        Boletos After <br/>
          <Checkbox
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
         /> Boleto 3 <br/>
         <Checkbox
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
         /> Boleto 3 <br/>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{color:'#777F6F'}}>
        Confirmar Asistencia
      </Button>
    </Paper>
  }
  return <div>
  <CircularProgress />
</div>
}

/*{guest.map(function (guestInfo){
    return <span>{guestInfo}<br/></span>
  })}*/