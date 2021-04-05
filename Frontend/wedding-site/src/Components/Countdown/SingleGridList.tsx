import React, { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
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
      width: "1100px",
    },
    gridList: {
      width: "40%",
      padding: "4px",
      justifyContent: "center",
      textAlign: "center",
    },
    card: {
      backgroundColor: theme.palette.secondary.dark,
    },
    title: {
      backgroundColor: "transparent",
      textAlign: "center",
    },
    titleBar: {
      backgroundColor: "transparent",
    },
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
      <GridList className={classes.gridList} spacing={12} cols={4}>
        {countDownArray.map((tile) => (
          <GridListTile key={tile.count}>
            <Card className={classes.card}>
              <h1>{tile.count}</h1>
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
