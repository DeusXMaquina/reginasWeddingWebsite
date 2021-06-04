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