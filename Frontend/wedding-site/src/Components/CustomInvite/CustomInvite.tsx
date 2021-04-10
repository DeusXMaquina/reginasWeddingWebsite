import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { Grid, IconButton } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import GeneralInvite from '../GeneralInvite/GeneralInvite'
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginTop:'60%',
      marginLeft: '60%',
      width: '100%',
      height:'100%'
    },
    image: {
      widht: '30%',
      height:'45%'
    },
    alert: {
      position:'absolute',
      marginLeft:'33%',
      marginTop: '-32%'
    },
    confirmAlert: {
      position:'absolute',
      marginLeft:'33%',
      marginTop: '-20%'
    }
  }),
)

export default function RSVP (props: {infoArray:never[]}) {


  const [confirm, setConfirm] = useState(false)
  const [open, setOpen] = useState(true)
  const [confirmAlert, setConfirmAlert] = useState(false)
  const [receptionTickets, setReceptionTickets] = useState(0)
  const [afterTickets, setAfterTickets] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      switch(event.target.id) {
        case 'banquete':
          setReceptionTickets(receptionTickets + 1)
          break
        case 'after':
          setAfterTickets(afterTickets + 1 )
          break
        default:
          break
      }
    } else {
      switch(event.target.id) {
        case 'banquete':
          setReceptionTickets(receptionTickets - 1)
          break
        case 'after':
          setAfterTickets(afterTickets - 1 )
          break
        default:
          break
      }
    }
  }

  async function sentComfirmation (guestID:string, receptionTickets:number, afterTickets:number) {
    const requestOptions = {
      method:'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({guestID, receptionTickets, afterTickets})
    }
    await fetch(`http://127.0.0.1:5000/`, requestOptions)
      .then(response => response.json()).then((data) => setConfirmAlert(true))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(receptionTickets)
    console.log(afterTickets)
    sentComfirmation(props.infoArray[0], receptionTickets, afterTickets)
  }

  const classes = useStyles()

  const checkboxCreator = (ticketNumber:number, type:boolean) => {
      return <span key={ticketNumber}>
      <Checkbox
        key={ticketNumber}
        color="primary"
        id= {type ? 'banquete': 'after'}
        value={ticketNumber}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onChange={(e) => handleChange(e)}
      /> Boleto {ticketNumber + 1}<br/>
    </span>
  }
  const showTicketCheckbox = (tickets:number, title:string, type:boolean) => {
      var elements = [<span key={tickets}>{title}<br/></span>]
    for (let index = 0; index < tickets; index++) {
      elements.push(checkboxCreator(index, type))
    }
    return elements
  }
  
  console.log(props.infoArray)

    return props.infoArray[0] !== undefined ? <div>
      <Collapse in={confirmAlert} className={classes.confirmAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setConfirmAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Asistencia Confirmada!
        </Alert>
      </Collapse>
      <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
    <form onSubmit={(e:any) => handleSubmit(e)}>
      <h2>{props.infoArray[1]}</h2>
      <Grid container>
        <h3>Esta usted cordialmente invitado a mi boda</h3>
        <Grid item xs={12} sm={6}>
          {showTicketCheckbox(props.infoArray[2], 'Boletos Banquete', true)}
        </Grid>
        <Grid item xs={12} sm={6}>
        {props.infoArray[4] === 0 ? '' : showTicketCheckbox(props.infoArray[4], 'Boletos After', false)}
        </Grid>
      </Grid>
      <Button type='submit' variant="contained" color="primary" style={{color:'#777F6F'}}>
        Confirmar Asistencia
      </Button>
    </form>
    </Paper></div> : <div>
    <Collapse in={open} className={classes.alert}>
        <Alert severity='error'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          El codigo de Invitado no existe
        </Alert>
      </Collapse><GeneralInvite/></div>
}