import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme:Theme)=> ({
    root: {
        display: 'flex',
        height: '100%',
        width: '100%'
    },
}))

export default function BackgroundContainer (props: { children: any; image: any; }) {
    const classes = useStyles();
    const {children, image}= props;

    return (
        <Container disableGutters  style={{backgroundImage: "url("+image+")"}} className = {classes.root} >   
          {children}
        </Container>
    );
}

BackgroundContainer.propTypes ={
    chilren: PropTypes.node,

}
