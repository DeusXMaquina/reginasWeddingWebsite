import { Grid, Button, makeStyles, Theme, Typography} from '@material-ui/core';
import ContentBox from './../MainBox/box';
import liverpool from './../../pictures/liverpool2.png';
import icon from './../../pictures/icon-regalo.png'
import moneypool from './../../pictures/moneyPool.png'

const useStyles = makeStyles((theme:Theme) => ({
    card: {
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main
    },
    liverpool: {
        marginLeft: '5%',
        marginRight: '5%'
    },
    item: {
        marginTop: '10px'
    },
    button: {
        marginBottom: '10px',
        color: theme.palette.primary.main
      }

  }))

export default function GiftCard (){
const classes = useStyles();
return (
    <div className={classes.card}>
        <ContentBox>
           <Grid container spacing={4} direction='column' justify='center' alignItems='center' >
               <Grid item xs={12} classes={{root: classes.item}}>
               <img src={icon} alt="regalo-icon" />
               </Grid>
               <Grid item xs={12}>
               <Typography>Mesa de Regalos</Typography>
               </Grid>
               <Grid item xs={12}>
                   <Grid  container spacing={1} direction='row'  justify='space-between' alignItems='center'>
                        <Grid item xs={6}>
                            <img className={classes.liverpool} src={liverpool} alt="loverpoolImg" />
                        </Grid>
                        <Grid item xs={6} >
                            <Typography>
                                Número de evento: <br/> 50488620
                            </Typography>
                        </Grid>
                    </Grid>
               </Grid>
               <Grid item xs={12}>
                    <Button variant='outlined' href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/50488620' className={classes.button}>Ir a liverpool</Button>
               </Grid>
               <Grid item xs={12}>
                   <Grid container spacing={1} direction='row'  justify='space-between' alignItems='center'>
                       <Grid item xs={6}>
                       <img src={moneypool} alt="moneyPoolImg" />
                       </Grid>
                       <Grid item xs={6}>
                        <Typography>
                            Boda Santiago y Regina
                        </Typography>
                       </Grid>
                   </Grid>
               </Grid>
               <Grid item xs={12}>
                    <Button variant='outlined' href='https://www.moneypool.mx/p/jFNUiN4' className={classes.button}>Hacer Depósito</Button>
               </Grid>
           </Grid>
        </ContentBox>
    </div>
)

    
}
