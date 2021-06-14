import ContentBox from '../MainBox/box'
import { makeStyles, Theme, Grid, TextField, Checkbox, Button } from '@material-ui/core'
import { useState, useEffect } from 'react'

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

export default function CustomInvite (props:any) {

  const [hasError, setErrors] = useState(false)
  const [QSValue, setQSValue] = useState(false)
  const [isDisabled, setDisable] = useState(true)
  const [counter, setCounter] = useState(0)
  const [noAssistDisable, setNoAssistDisable] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }
  }

  const checkboxCreator = (event:boolean, nombre:string, id:number) => {
    return <span key={id}>
      <Checkbox
        key={id}
        color='primary'
        value={id}
        inputProps={{'aria-label': 'secondary checkbox'}}
        onChange={(e) => handleChange(e)}
      /> {nombre}
    </span>
  }

  const showTicketCheckbox = (title:string, event:boolean, ticket_info:{id:number, nombre:string}[]) => {
    var elements = [<span key={ticket_info.length}>{title}<br/></span>]
    console.log(ticket_info)
    for (let index = 0; index < ticket_info.length; index++) {

      elements.push(checkboxCreator(event, ticket_info[index].nombre, ticket_info[index].id))
    }
    return elements
  }

  async function sendConfirmation (codigo_invitado:any) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({codigo_invitado})
    }
    await fetch ('http://127.0.0.1:5000', requestOptions)
      .then(response => response.json()).then((data) => console.log('Enviado'))
    }

  const classes = useStyles()
  console.log(props.infoArray)
  return <div className={classes.card}>
    <ContentBox>
      <Grid container>
        <Grid item xs={12}>
          Check In
        </Grid>
        <Grid item alignContent='flex-start' xs={12}>
          {props.infoArray.rotulo} <br/>
          Selecciona todas las casillas de quienes asistiran
        </Grid>
        <Grid container direction='column' item xs={6}>
          {props.infoArray.boletos_recepcion.total !== 0 ? showTicketCheckbox('Recepcion', true, props.infoArray.boletos_recepcion.info_boletos) : ''}
        </Grid>
        <Grid container direction='column' item xs={6}>
          {props.infoArray.boletos_after.total !== 0 ? showTicketCheckbox('After', true, props.infoArray.boletos_after.info_boletos) : ''}
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button} type='submit' disabled={isDisabled} variant='outlined' color='primary' style={{color:'#777F6F'}}> Asistire </Button>
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button} type='submit' disabled={noAssistDisable} variant='outlined' color='primary' style={{color:'#777F6F'}}> No asistire </Button>
        </Grid>
      </Grid>
    </ContentBox>
  </div>
  // Gracias por acompañarnos los esperamos con mucho cariño
}