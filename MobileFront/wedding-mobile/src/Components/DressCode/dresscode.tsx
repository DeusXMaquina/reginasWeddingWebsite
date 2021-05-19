import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import ContentBox from "../MainBox/box";
import icon from "../../pictures/icon-dresscode.png";
import women from "../../pictures/codigo-mujer.png";
import men from "../../pictures/codigo-hombre.png";


const useStyles = makeStyles((theme: Theme)=>({
    card: {
        color: theme.palette.primary.main
    },
    item: {
        marginTop: '10px', 
    },
    dressImg: {
        marginBottom: '5px'
    }
   
}))

export default function Dresscode () {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <ContentBox>
            <Grid container spacing={4} direction='column' justify='center' alignContent='center'>
                <Grid item xs={12} classes={{root: classes.item}}>
                <img src={icon} alt="dresscode-icon" />
                <br></br>
                <Typography>Dress Code</Typography>
                </Grid>

                <Grid container spacing={1} direction='row' justify='center'>
                    <Grid item xs={5}>
                        <img src={women} alt='womendresscode' className={classes.dressImg}></img>
                        <br/>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>Formal</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={men} alt='mendresscode'></img>
                    </Grid>

                </Grid>
            </Grid>
        </ContentBox>
        </div>   
    )
}
