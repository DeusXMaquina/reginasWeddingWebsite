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

export default function CustomInvite () {
  const [guestInfo, setGuestInfo] = useState({
    rotulo: '',
    codigo_invitado: '',
    boletos_recepcion: {
      info_boletos: [{id:0, nombre: ''}],
      total:0
    },
    boletos_after: {
      info_boletos: [{id:0, nombre: ''}],
      total:0
    },
  })
  const [hasError, setErrors] = useState(false)
  const [QSValue, setQSValue] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log(event)
    }
  }

  const checkboxCreator = (event:boolean, ticket_info:{id:number, nombre:string}) => {
    return <span key={ticket_info.id}>
      <Checkbox
        key={ticket_info.id}
        color='primary'
        value={ticket_info.id}
        inputProps={{'aria-label': 'secondary checkbox'}}
        onChange={(e) => handleChange(e)}
      /> {ticket_info.nombre}
    </span>
  }

  const showTicketCheckbox = (tickets:number, title:string, event:boolean, ticket_info:{id:number, nombre:string}[]) => {
    var elements = [<span key={tickets}>{title}<br/></span>]
    for (let index = 0; index < tickets; index++){
      elements.push(checkboxCreator(event, ticket_info[index]))
    }
    return elements
  }

  async function fetchData() {
    if (window.location.search) {
      const res = await fetch(`http://127.0.0.1:5000/${new URLSearchParams(window.location.search).get('cinv')}`)    
      res.json().then(res => {
          setGuestInfo(res)}).catch(err => setErrors(err))
          setQSValue(true)
    }
  }
  useEffect(() => {fetchData()}, [])

  console.log(guestInfo)

  const classes = useStyles()
  return <div className={classes.card}>
    <ContentBox>
      <Grid container>
        <Grid item xs={12}>
          Check In
        </Grid>
        <Grid item alignContent='flex-start' xs={12}>
          {guestInfo.rotulo}
        </Grid>
        <Grid container direction='column' item xs={6}>
          {showTicketCheckbox(guestInfo.boletos_recepcion.total, 'Recepcion', true, guestInfo.boletos_recepcion.info_boletos)}
        </Grid>
        <Grid container direction='column' item xs={6}>
        {showTicketCheckbox(guestInfo.boletos_after.total, 'After', true, guestInfo.boletos_after.info_boletos)}
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button} type='submit' variant='outlined' color='primary' style={{color:'#777F6F'}}> Asistire </Button>
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button} type='submit' variant='outlined' color='primary' style={{color:'#777F6F'}}> No asistire </Button>
        </Grid>
      </Grid>
    </ContentBox>
  </div>
}