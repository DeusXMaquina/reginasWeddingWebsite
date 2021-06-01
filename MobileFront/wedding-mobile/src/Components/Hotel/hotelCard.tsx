import { makeStyles, Theme, Grid, Typography, Button} from "@material-ui/core";
import ContentBox from "../MainBox/box";
import './hotel.css'
import hotelIcon from '../../pictures/icon-hospedaje.png';
import Reserva from "./reserva";
import Pescador from "./pescador"

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

export default function HotelCard (){
const classes = useStyles();

return(
    <div id='hotel' className={classes.card}>
      <ContentBox>
        <Grid container spacing ={3} direction='column' justify='center' alignItems='center'>                  
          <Grid item xs={11} classes={{root: classes.item}}>
            <img src={hotelIcon} alt="IconHotel" /> <br/>
            <Typography>Hospedaje</Typography>
          </Grid>    
        </Grid>
        <Reserva/>
        <Pescador/>
      </ContentBox>
    </div>
    )
}  