import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme:Theme)=> ({
    root: {
        display: 'flex',
        backgroundSize: 'cover',
        width: '100%',
        margin:'0px',
        marginRight:'0px'
    },
}))

export default function BackgroundContainer (props: { children: any; image: any; }) {
    const classes = useStyles();
    const {children, image}= props;

    return (
        <Container  style={{backgroundImage: "url("+image+")"}} className = {classes.root} >   
          {children}
        </Container>
    );
}

BackgroundContainer.propTypes ={
    chilren: PropTypes.node,

}
