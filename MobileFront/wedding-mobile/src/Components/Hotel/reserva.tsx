import { makeStyles, Grid, Typography, Theme, Button } from "@material-ui/core";
import hotelReserva from '../../pictures/LaReservaHotel.jpg';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main
      },
      item: {
        marginTop: '10px'
      },
    button:{
        marginBottom: '10px',
        color: theme.palette.primary.main
    }

}))


export default function Reserva (){
    const classes = useStyles();

    return (
            <div className={classes.card}>
                <Grid container spacing ={4} direction='column' justify='center' alignItems='center'>                  
                <Grid item xs={11}>
                    Hotel La Reserva <br/>
                    <img src={hotelReserva} alt="hotel" />
                </Grid>
                <Grid container direction='row' wrap='wrap' justify='center' alignItems='center'>
                    <Grid item xs={6} classes={{root: classes.item}}>
                        <Typography>Reservaciones: <br/> 
                        Karla <br/>
                        33 1133 2118
                        </Typography>
                    </Grid>                
                    <Grid item xs={6}>
                        <Button variant='outlined' href='https://wa.me/13311332118' className={classes.button}>Enviar Mensaje</Button>
                    </Grid>  
                </Grid>
                <Grid container direction='row' wrap='wrap' justify='center' alignItems='center'>
                    <Grid item xs={11} classes={{root: classes.item}}>
                        <Typography> 
                            Carretera Chapala-Jocotepec 960 <br/> 
                            45920 Ajijic, Jal.
                        </Typography>
                    </Grid>                
                    <Grid item xs={6}>
                        <Button variant='outlined' href='https://www.google.com/maps/place/La+Reserva+Club+privado+%26+Resort/@20.2923965,-103.2934875,15z/data=!4m8!3m7!1s0x0:0xb97ffbfca9d6d8ac!5m2!4m1!1i2!8m2!3d20.2924681!4d-103.2934965' className={classes.button}>Ir al mapa</Button>
                    </Grid>  
                </Grid>
                    <Grid item xs={11}>
                        <Button variant='outlined' href='https://www.lareservaajijic.com/' className={classes.button}>Ir a Sitio Web</Button>
                    </Grid>
                </Grid>
            </div>
            )
           
}
