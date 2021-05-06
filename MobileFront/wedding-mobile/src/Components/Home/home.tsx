import ContentBox from './../MainBox/box';
import home from './../../pictures/home2.png';
import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((thme:Theme)=> 
createStyles({
    root: {
        marginTop: '13%',
        marginBottom: '13%'
    }
}))

export default function Home () {
    const classes = useStyles();

    return (
        <ContentBox>
            <img className= {classes.root} src={home} alt="homePic"/>
        </ContentBox>
    )
    
}
