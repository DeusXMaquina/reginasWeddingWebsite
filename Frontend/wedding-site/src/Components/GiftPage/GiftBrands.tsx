import React from "react";
import { Grid, makeStyles, Paper, Theme } from "@material-ui/core";
import ContainerInvisible from "./../ContainerInvisible/ContainerInvisble";
import Brands from '../../Redux/Reducers/GiftBrandsReducer'
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10%",
    marginLeft: "10%",
    backgroundColor: "transparent"
    
    },
  grid: {
    width: "100%",
  },
  paper: {
    background: "transparent",
  },
  image: {
    width:"50%",
    height:"50%",
    padding:"5rem"
  }

}));

export default function GiftBrands() {
  const classes = useStyles();

  return (
    <ContainerInvisible>
     <div className={classes.root}>
       <Paper className={classes.paper}> 
       <Grid container direction="row" justify="center" alignItems="center">
         <Grid item lg>
           {Brands.map((brand)=>(
             <Button className={classes.image}>
             <img src={brand.img}alt={brand.title}/>
           </Button>
           ))}   
         </Grid>
        </Grid> 
       </Paper>
     </div>
    </ContainerInvisible>
  );
}
