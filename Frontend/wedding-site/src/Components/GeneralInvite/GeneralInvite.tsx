import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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

export default function GeneralInvite () {
  const [hasError, setErrors] = useState(false)
  const [guest, setGuest] = useState([])
  const classes = useStyles()

  /*async function fetchData() {
    if (window.location.search) {
      const res = await fetch(`http://127.0.0.1:5000/${new URLSearchParams(window.location.search).get('cinv')}`)    
      res.json().then(res => {
          setGuest(res[0])}).catch(err => setErrors(err))
    }
  }
  useEffect(() => {fetchData()}, [])
  */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Evento')
    console.log(event);
  };

  const evento = () => console.log('asdasd')

  return (
    <Paper elevation={3} className={classes.paper} style={{backgroundColor: '#d7dade', color:'#777F6F'}}>
      <form>
        <TextField id="outlined-basic" label="Codigo de Invitado" variant="outlined" />
        <Button onClick={() => evento()} variant="contained" color="primary" style={{color:'#777F6F'}}>
          Buscar Invitado
        </Button>
      </form>
    </Paper>
  )
}