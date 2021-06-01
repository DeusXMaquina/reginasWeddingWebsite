import ContentBox from '../MainBox/box'
import { makeStyles, Theme, Grid, TextField, Button } from '@material-ui/core'

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
  const classes = useStyles()
  return <div id='CheckIn' className={classes.card}>
    <ContentBox>
      <TextField className={classes.input} id='codigo-invitado' label='Codigo de Invitado' variant='outlined' /><br/>
      <Button className={classes.button} type='submit' variant='outlined' color='primary' style={{color:'#777F6F'}}> Buscar </Button>
    </ContentBox>
  </div>
}