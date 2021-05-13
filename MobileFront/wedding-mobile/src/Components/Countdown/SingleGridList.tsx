import React, { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from '@material-ui/core';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Card from "@material-ui/core/Card";
import calculateTimer from "./Timer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap-reverse",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "transparent",
      marginTop:'15%',
      width: '300px',
    },
    gridList: {
      width: '100%',
      padding: "3px",
      justifyContent: "center",
      textAlign: "center",
    },
    card: {
      backgroundColor: theme.palette.primary.light,
      opacity: '0.7',
      width: '100%',
      height: '42%',
      justifyContent: 'center',
      alignContent: 'center'
    
    },
    title: {
      color: theme.palette.secondary.main,
      backgroundColor: "transparent",
      textAlign: "center",
      fontSize: 'small'
    },
    titleBar: {
      backgroundColor: "transparent",
    },
    typography: {
      fontSize: '2rem',
      justifyContent: 'center',
      padding: '15%',
      marginTop: '10%',
      color: theme.palette.secondary.main
    }
      
  })
);

export default function SingleLineGridList() {
  const classes = useStyles();
  const [currentDate, setcurrentDate] = useState<number>(+new Date());
  const [countDownArray, setCountDownArray] = useState<
    Array<{ title: string; count: string | number }>
  >([]);

  useEffect(() => {
    let countDownArray: Array<{
      title: string;
      count: string | number;
    }> = calculateTimer(currentDate);
    setCountDownArray(countDownArray);
  }, [currentDate]);

  setInterval(() => {
    setcurrentDate((state: number) => (state = +new Date()));
  }, 1000);

  return (

    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {countDownArray.map((tile) => (
          <GridListTile  key={tile.count} >
            <Card className={classes.card}>
              <Typography className={classes.typography}>{tile.count}</Typography>
            </Card>        
            <GridListTileBar
              subtitle={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    
  );
}
