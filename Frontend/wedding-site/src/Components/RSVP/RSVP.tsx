import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import CustomInvite from '../CustomInvite/CustomInvite'


import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import GeneralInvite from '../GeneralInvite/GeneralInvite'

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
  const [confirm, setConfirm] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles()

  const checkboxCreator = (ticketNumber:number) => {
      return <span>
      <Checkbox
        key={ticketNumber}
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
          setGuest(res)}).catch(err => setErrors(err))
          setQSValue(true)
    }
  }
  useEffect(() => {fetchData()}, [])
  

  if (QSValue) {
    return <CustomInvite infoArray={guest} />
  }
  return <GeneralInvite/>
}