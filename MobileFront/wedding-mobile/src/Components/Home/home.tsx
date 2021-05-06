import ContentBox from './../MainBox/box';
import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ((thme:Theme)=> 
createStyles({
    root: {
      
    }
}))

export default function Home () {
    const classes = useStyles();

    return (
        <ContentBox>
           <body className= 'mainBox'>
               
               
           </body> 
        </ContentBox>
    )
    
}
