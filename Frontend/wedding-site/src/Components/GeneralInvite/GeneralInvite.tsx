import React, { useState, useEffect, FormEvent } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CustomInvite from '../CustomInvite/CustomInvite'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      marginTop:'160%',
      marginLeft: '160%',
      width: '100%',
      height:'100%'
    },
    image: {
      widht: '30%',
      height:'45%'
    },
    button: {
      marginTop: '6px',
      marginLeft: '15px'
    }
  }),
)

export default function GeneralInvite () {
  const [hasError, setErrors] = useState(false)
  const [guestInfo, setGuestInfo] = useState([])
  const [guestID, setGuestId] = useState('')
  const [validID, setValidID] = useState(false)
  const classes = useStyles()

  async function fetchData(guestID:string) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }}

      await fetch(`http://127.0.0.1:5000/${guestID}`, requestOptions)
        .then(response => response.json())
        .then(data => setGuestInfo(data)).then(() => {
          setValidID(true)})
  }

  //AR0200PCR, CR0203JGD

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchData(guestID)
  }
  
  return !validID ? (
    <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
      <form onSubmit={(e:any) => handleChange(e)}>
        <TextField id='codigo-invitado' onChange={(e) => setGuestId(e.target.value)} label="Codigo de Invitado" variant="outlined" />
        <Button value={guestID} className={classes.button} type='submit' variant="contained" color="primary" style={{color:'#777F6F'}}>
          Buscar
        </Button>
      </form>
    </Paper>
  ) : (
    <CustomInvite infoArray={guestInfo}/>
  )
}