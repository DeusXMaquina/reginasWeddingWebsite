import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme:Theme)=> ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        backgroundSize: 'cover',
    },
}))

export default function BackgroundContainer (props: { children: any; image: any; }) {
    const classes = useStyles();
    const {children, image}= props;

    return (
        <Container disableGutters style={{backgroundImage: "url("+image+")"}} className = {classes.root} >   
          {children}
        </Container>
    );
}

BackgroundContainer.propTypes ={
    chilren: PropTypes.node,

}
