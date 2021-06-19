import ContentBox from '../MainBox/box'
import { useState } from 'react'
import { makeStyles, Theme, TextField, Button } from '@material-ui/core'
import CustomInvite from '../CustomInvite/customInvite'

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

export default function GeneralInvite () {

  const [isValidId, setValidId] = useState(false)
  const [guestInfo, setGuestInfo] = useState({})
  const [guestId, setGuestId] = useState('')
  const classes = useStyles()

  async function fetchData(guestID:string) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({codigo_invitado:guestID})
    }
      await fetch(`http://127.0.0.1:5000/`, requestOptions)
        .then(response => response.json())
        .then(data => setGuestInfo(data)).then(() => { console.log(guestInfo); setValidId(true)
          })
  }

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchData(guestId)
  }

  return !isValidId ? <div id='CheckIn' className={classes.card}>
    <ContentBox>
      <form onSubmit={(e:any) => handleChange(e)}>
        <TextField onChange={(e) => setGuestId(e.target.value)} className={classes.input} id='codigo-invitado' label='Codigo de Invitado' variant='outlined' /><br/>
        <Button className={classes.button} type='submit' variant='outlined' color='primary' style={{color:'#777F6F'}}> Buscar </Button>
      </form>
    </ContentBox>
  </div> : <CustomInvite {...guestInfo}/>
}