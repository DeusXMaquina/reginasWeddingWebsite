import React from 'react';
import ContentBox from './../MainBox/box';
import { CardContent, makeStyles, Theme, Typography, Card } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import home from './../../pictures/home2.png'



const useStyles = makeStyles ((theme:Theme)=> 
createStyles({
    root: {
       color: theme.palette.primary.light,
       maxWidth: '80%',
       opacity: '0.7',
       position: 'absolute',
       top:'50%',
       left: '50%',
       transform: 'translate(-50%,-50%)',

    },
    title:
    {
        color: theme.palette.secondary.main,
        textAlign: 'center',
        fontSize: 'xx-large',
    }
}))

export default function Home () {
    const classes = useStyles();

    return (
        <ContentBox>
            <img src={home} alt="homePic" />
                <Card className={classes.root}> 
                    <Typography className={classes.title} >
                            Santiago & Regina
                    </Typography>
                </Card>           
        </ContentBox>
    )
    
}
