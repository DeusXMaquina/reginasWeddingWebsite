import { useState, useEffect } from 'react'
import ContentBox from '../MainBox/box'
import CustomInvite from '../CustomInvite/customInvite'
import GeneralInvite from '../GeneralInvite/generalInvite'

export default function RSVP () {
    const [hasError, setErrors] = useState(false)
    const [guest, setGuest] = useState([])
    const [QSValue, setQSValue] = useState(false)

  async function fetchData() {
    if (window.location.search) {
      const requestOptions = {
        method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      }
      const res = await fetch(`http://127.0.0.1:5000/${new URLSearchParams(window.location.search).get('cinv')}`, requestOptions)    
      res.json().then(res => {
        setGuest(res)}).then(() => setQSValue(true)).catch(err => setErrors(err))
      }
    }
  useEffect(() => {fetchData()}, [])

  if (QSValue) {
    return <CustomInvite infoArray={guest} />
  }
  return <div></div>
}