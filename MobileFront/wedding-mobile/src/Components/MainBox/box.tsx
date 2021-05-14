import {makeStyles } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core/styles';
import PropTypes  from 'prop-types';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            overflow: 'hidden',
            display: 'block',
            marginBottom: '0.5rem',
            position: 'unset', '& img': { position: 'relative', maxWidth: '100%'},
            flexWrap: 'wrap',
            maxWidth: '100%',
            backgroundColor: theme.palette.primary.light, 
            alignItems: 'center'
        }
    }),
)  
export default function ContentBox (props: {children: any}) {
    const classes = useStyles();
    const {children} = props;

    return(      
            <Box className={classes.root}>
            {children}
            </Box>   
    )
}

ContentBox.prototype={
    children: PropTypes.node
}